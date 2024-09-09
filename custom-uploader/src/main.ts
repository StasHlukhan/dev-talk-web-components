import { defineCustomElement } from 'vue'
import Uploader from './custom-elements/Uploader.ce.vue'

const CustomUploader = defineCustomElement(Uploader)

customElements.define('custom-uploader', CustomUploader)
