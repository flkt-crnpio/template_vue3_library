import * as components from './components';

const componentsList = components?.default;
const LibraryComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      Vue.component(name, componentsList[name]);
    })
  },
};
export default LibraryComponents;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LibraryComponents);
}
