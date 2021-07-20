import { PermissionHandler } from './app/ui/persmission-handler'
import { PluginManager } from '@remixproject/engine/lib/manager'
import { EventEmitter } from 'events'
import { Engine } from '@remixproject/engine/lib/engine'
import { PluginBase, Profile } from '@remixproject/plugin-utils'
import { ViewPlugin } from '@remixproject/engine-web'
/* eslint-disable camelcase */
declare module 'yo-yo'{
  interface yo_yo {
    (strings:string[], ...values:any[]):HTMLElement;
    update(element:HTMLElement, element2:HTMLElement);
  }
  var yo:yo_yo
  export = yo;
}

declare module 'dom-css'{
 interface dom_css{
   (element:HTMLElement, css:any):void;
 }

 var css:dom_css
 export = css;
}

interface SetPluginOptionType {
  queueTimeout: number
}

export class RemixEngine extends Engine {
  event: EventEmitter;
  setPluginOption ({ name, kind }) : SetPluginOptionType
  onRegistration (plugin) : void
}

export function isNative(name: any): any;
/**
 * Checks if plugin caller 'from' is allowed to activate plugin 'to'
 * The caller can have 'canActivate' as a optional property in the plugin profile.
 * This is an array containing the 'name' property of the plugin it wants to call.
 * canActivate = ['plugin1-to-call','plugin2-to-call',....]
 * or the plugin is allowed by default because it is native
 *
 * @param {any, any}
 * @returns {boolean}
 */
export function canActivate(from: any, to: any): boolean;
export class RemixAppManager extends PluginManager {
  constructor();
    event: EventEmitter;
    pluginsDirectory: string;
    pluginLoader: PluginLoader;
    permissionHandler: PermissionHandler;
    getAll(): import('@remixproject/plugin-utils').Profile<any>[];
    getIds(): string[];
    isDependent(name: any): any;
    isRequired(name: any): any;
    registeredPlugins(): Promise<any>;
    turnPluginOn(name: string | string[]);
    turnPluginOff(name: string);
}

export class PluginManagerSettings {
  openDialog(): void;
  permissions: any;
  currentSetting: any;
  onValidation(): void;
  /** Clear one permission from a plugin */
  clearPersmission(from: any, to: any, method: any): void;
  /** Clear all persmissions from a plugin */
  clearAllPersmission(to: any): void;
  settings(): any;
  render(): any;
}

export class PluginManagerComponent extends ViewPlugin extends Plugin implements PluginBase {
  constructor(appManager: RemixAppManager, engine: Engine)
  appManager: RemixAppManager
  pluginSettings: PluginManagerSettings
  engine: Engine
  htmlElement: HTMLDivElement
  views: { root: null, items: {} }
  localPlugin: LocalPlugin
  pluginNames: string[]
  inactivePlugins: Profile[]
  activePlugins: Profile[]
  filter: string
  isActive(name: string): boolean
  activateP(name: string): void
  deactivateP(name: string): void
  onActivation(): void
  renderComponent(): void
  openLocalPlugin(): Promise<void>
  render(): HTMLDivElement
  filterPlugins({ target }: { target: any }) : void
  getAndFilterPlugins: (filter?: string) => void
}

// eslint-disable-next-line no-use-before-define
export = LocalPlugin;
declare class LocalPlugin {
  /**
     * Open a modal to create a local plugin
     * @param {Profile[]} plugins The list of the plugins in the store
     * @returns {Promise<{api: any, profile: any}>} A promise with the new plugin profile
     */
  open(plugins: any[]): Promise<{
        api: any;
        profile: any;
    }>;

    profile: any;
    /**
     * Create the object to add to the plugin-list
     */
    create(): any;
    updateName({ target }: {
        target: any;
    }): void;

    updateUrl({ target }: {
        target: any;
    }): void;

    updateDisplayName({ target }: {
        target: any;
    }): void;

    updateProfile(key: any, e: any): void;
    updateMethods({ target }: {
        target: any;
    }): void;

    /** The form to create a local plugin */
    form(): any;
}

export interface PluginManagerContextProviderProps {
  appManager: RemixAppManager
  pluginComponent: PluginManagerComponent
  pluginSettings: PluginManagerSettings
  activePluginNames: string[]
  isActive?: (name: string) => boolean
  filterPlugins: () => void
  profile: Partial<PluginManagerProfile>
  defaultProfile: DefaultLocalPlugin
  headingLabel: string
}

export interface RemixUiPluginManagerProps {
  appManager: RemixAppManager
  pluginComponent: PluginManagerComponent
  pluginSettings: PluginManagerSettings // Window & typeof globalThis | []
  activePluginNames: string[]
  isActive?: (name: string) => boolean
  filterPlugins: () => void
  profile: Partial<PluginManagerProfile>
  headingLabel: string
}
/** @class Reference loaders.
 *  A loader is a get,set based object which load a workspace from a defined sources.
 *  (localStorage, queryParams)
 **/
declare class PluginLoader {
  get currentLoader(): any;
    donotAutoReload: string[];
    loaders: {};
    current: string;
    set(plugin: any, actives: any): void;
    get(): any;
}

export type PluginManagerSettings = {
  openDialog: () => void
  onValidation: () => void
  clearPermission: (from: any, to: any, method: any) => void
  settings: () => HTMLElement
  render: () => HTMLElement
}

export interface DefaultLocalPlugin extends Profile {
  name: string
  displayName: string
  url: string
  type: string
  hash: string
  methods: any
  location: string
}

export interface FormStateProps {
  pname: string
  displayName: string
  url: string
  type: string
  hash: string
  methods: any
  location: string
}

export type PluginManagerProfile = Profile & {
  name: string,
  displayName: string,
  methods: Array<any>,
  events?: Array<any>,
  icon: 'assets/img/pluginManager.webp',
  description: string,
  kind?: string,
  location: 'sidePanel' | 'mainPanel' | 'none',
  documentation: 'https://remix-ide.readthedocs.io/en/latest/plugin_manager.html',
  version: any
  type: 'iframe' | 'ws'
  hash: string
}
export type LocalPlugin = {
  create: () => Profile
  updateName: (target: string) => void
  updateDisplayName: (displayName: string) => void
  updateProfile: (key: string, e: Event) => void
  updateMethods: (target: any) => void
  form: () => HTMLElement
}

export { }
