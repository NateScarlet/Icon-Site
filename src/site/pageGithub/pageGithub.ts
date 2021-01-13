import { Component, Prop, Part } from '@mdi/element';
 
import template from "./pageGithub.html";
import style from './pageGithub.css';

import '@mdi/components/mdi/markdown';
import MdiMarkdown from '@mdi/components/mdi/markdown';
import '@mdi/components/mdi/icon';
import MdiIcon from '@mdi/components/mdi/icon';
import '@mdi/components/mdi/buttonToggle';
import MdiButtonToggle from '@mdi/components/mdi/buttonToggle';
import '@mdi/components/mdi/button';
import MdiButton from '@mdi/components/mdi/button';
import '@mdi/components/mdi/buttonLink';
import MdiButtonLink from '@mdi/components/mdi/buttonLink';
import '@mdi/components/mdi/buttonGroup';
import MdiButtonGroup from '@mdi/components/mdi/buttonGroup';
import '@mdi/components/mdi/inputText';
import MdiInputText from '@mdi/components/mdi/inputText';
import '@mdi/components/mdi/inputFileLocal';
import MdiInputFileLocal from '@mdi/components/mdi/inputFileLocal';
import { Icon } from '@mdi/components/mdi/shared/models/icon';
import { addTooltip } from '@mdi/components/mdi/tooltip/addTooltip';
import { getGitHubPreview } from './utils';

const GITHUB_FILE = '/content/github.md';
 
@Component({
  selector: 'site-page-github',
  style,
  template 
})
export default class SitePageGithub extends HTMLElement {
  @Prop() icons: Icon[] = [];
  @Prop() navigationItems: any[] = [];
  
  @Part() $instructionsButton: MdiButtonToggle;
  @Part() $instructionsSection: HTMLDivElement;
  @Part() $markdown: MdiMarkdown;
  @Part() $nav: HTMLUListElement;
  @Part() $header: HTMLHeadingElement;
  @Part() $edit: MdiButtonLink;
  @Part() $suggest: MdiButtonLink;
  @Part() $wipYes: MdiButton;
  @Part() $wipNo: MdiButton;
  @Part() $iconNone: MdiButton;
  @Part() $iconDownload: MdiButton;
  @Part() $iconLink: MdiButton;
  @Part() $inputName: MdiInputText;
  @Part() $inputFile: MdiInputFileLocal;
  @Part() $inputData: MdiInputText;
  @Part() $inputShadow: MdiInputText;
  @Part() $canvas: HTMLCanvasElement;

  ulIndent: HTMLLIElement[] = [];

  _linkIcon: string | null = null;
  get linkIcon() {
    return this._linkIcon;
  }
  set linkIcon(v) {
    this.$iconNone.active = v === null;
    this.$iconDownload.active = v === 'download';
    this.$iconLink.active = v === 'link';
    this._linkIcon = v;
    this.update();
  }

  _wip = true;
  get wip() {
    return this._wip;
  }
  set wip(v) {
    this.$wipYes.active = v === true;
    this.$wipNo.active = v === false;
    this._wip = v;
    this.update();
  }

  _name = 'account';
  _path = 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z';
  _shadowPath = '';

  connectedCallback() {
    // Instructions
    this.$markdown.file = GITHUB_FILE;
    this.$instructionsButton.addEventListener('click', this.handleInstructionsToggle.bind(this));
    this.$instructionsSection.style.display = 'none';
    addTooltip(this.$instructionsButton, () => {
      return `Toggle Instructions`;
    });
    // Sidebar
    this.$edit.href = `https://github.com/Templarian/MaterialDesign-Site/tree/master/src/${GITHUB_FILE}`;
    const h1 = 'GitHub Icon Preview Generator Instructions';
    this.$suggest.href = `https://github.com/Templarian/MaterialDesign-Site/issues/new?title=Suggested%20Change%20to%20%22${h1}%22&body=%3C%21--%20Describe%20how%20you%20would%20improve%20the%20documentation%20here%20--%3E`;
    // Form
    this.$wipYes.addEventListener('click', () => {
      this.wip = true;
    });
    this.$wipNo.addEventListener('click', () => {
      this.wip = false;
    });
    this.$iconNone.addEventListener('click', () => {
      this.linkIcon = null;
    });
    this.$iconDownload.addEventListener('click', () => {
      this.linkIcon = 'download';
    });
    this.$iconLink.addEventListener('click', () => {
      this.linkIcon = 'link';
    });
    this.$inputName.addEventListener('input', (e) => {
      this._name = (e.target as any).value;
      this.update();
    });
    this.$inputFile.addEventListener('change', (e: any) => {
      const name = e.detail.name.replace('.svg', '');
      this._name = name;
      this.$inputName.value = name;
      const match = e.detail.value.match(/ d="([^"]+)"/);
      if (match) {
        this._path = match[1];
        this.$inputData.value = match[1];
      } else {
        alert('Unable to find singular path tag with valid d attribute.')
      }
      this.update();
    });
    this.$inputData.addEventListener('input', (e) => {
      this._path = (e.target as any).value;
      this.update();
    });
    this.$inputShadow.addEventListener('input', (e) => {
      this._shadowPath = (e.target as any).value;
      this.update();
    });
    this.update();
  }

  async render(changes) {
    
  }

  async update() {
    let context = this.$canvas.getContext('2d') as CanvasRenderingContext2D;
    let img = await getGitHubPreview(this._name, this._path, this.wip);
    let back;
    if (this.wip) {
      back = await this.getImage('/assets/resources/github-preview-blank-draft.png');
    } else {
      back = await this.getImage('/assets/resources/github-preview-blank.png');
    }
    context.drawImage(back, 0, 0);
    context.drawImage(img, 0, 0);
    if (this._shadowPath !== '') {
      let svgPathElement = this.getIconSvgPath(this._shadowPath, 0, 0, 10);
      const width = 325,
        height = 294;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.appendChild(svgPathElement)
      let imgShadow = await this.getPngFromSvg(svg);
      context.drawImage(imgShadow, 70, 10);
    }
    if (this.linkIcon == 'link') {
      let link = await this.getImage('/assets/resources/github-preview-overlay-link.png');
      context.drawImage(link, 0, 0);
    } else if (this.linkIcon == 'download') {
      let download = await this.getImage('/assets/resources/github-preview-overlay-download.png');
      context.drawImage(download, 0, 0);
    }
    if (this.wip) {
      let wip = await this.getImage('/assets/resources/github-preview-overlay-wip.png');
      context.drawImage(wip, 0, 0);
    }
  }

  getIconSvgPath(data, x, y, scale): SVGPathElement {
    const ns = 'http://www.w3.org/2000/svg',
      path = document.createElementNS(ns, 'path');
    path.setAttribute('d', data);
    path.setAttribute('fill', 'rgba(0, 0, 0, 0.2)');
    path.setAttribute('stroke', '#000');
    path.setAttribute('stroke-width', '0.05');
    path.setAttribute('stroke-dasharray', '0.5 0.2');
    path.setAttribute('transform', `translate(${x},${y}) scale(${scale},${scale})`)
    return path;
  }

  getPngFromSvg(svgElement: SVGSVGElement): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      var svg = new XMLSerializer().serializeToString(svgElement);
      var img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(svg)}`;
    });
  }

  async getImage(imageUrl: string) {
    let img = document.createElement('img');
    return new Promise<any>((resolve, reject) => {
      img.onload = () => { resolve(img); };
      img.onerror = () => { reject(); };
      img.src = imageUrl;
    });
  }

  handleInstructionsToggle(e) {
    const { active } = e.detail;
    this.$instructionsSection.style.display = active ? 'initial' : 'none';
  }
}
