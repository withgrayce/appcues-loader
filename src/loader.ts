import { Appcues } from './types';

export class Loader
{
  private api: Appcues | undefined;
  private loader: Promise<Appcues> | undefined;
  private resolve: (api: Appcues) => void;
	private reject: (err: Error) => void;

	constructor(private accountId: string = null) {
		if (typeof window === 'undefined') {
			throw new Error('Appcues is supported only in browser environment');
		}
	}

  public load(): Promise<Appcues> {
    if (typeof this.api !== 'undefined') {
			return Promise.resolve(this.api);
		}

		if (typeof this.loader !== 'undefined') {
			return this.loader;
		}

    return this.loader = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;

      if (window['Appcues']) {
        resolve(window['Appcues']);
        return;
      }

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = !0;
      script.src = `//fast.appcues.com/${this.accountId}.js`
      script.onload = () => {
        resolve(window['Appcues'] as unknown as Appcues);
      };
      script.onerror = (error) => {
        reject(error)
      }
      document.head.appendChild(script);
		});
  }
}
