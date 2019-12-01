namespace colibri.ui.controls.viewers {

    export class EmptyCellRendererProvider implements ICellRendererProvider {
        
        private _getRenderer : (element : any) => ICellRenderer;

        constructor(getRenderer? : (element : any) => ICellRenderer) {
            this._getRenderer = getRenderer ?? ((e) => new EmptyCellRenderer());
        }

        getCellRenderer(element: any): ICellRenderer {
            return this._getRenderer(element);
        }        
        
        preload(element: any): Promise<PreloadResult> {
            return Controls.resolveNothingLoaded();
        }
    }
}