import { ErrorHandler } from '@angular/core';
export class GlobalErrorHandler implements ErrorHandler {
    errorHandler: any;
    constructor() {
    // The event listener bellow will be triggered only on real devices. If you want to use this in a browser, you should change it to window.addEventListener('DOMContentLoaded'...
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Inside Error handler');
        
    this.errorHandler = new (window as any).StackdriverErrorReporter();
            this.errorHandler.start({
                key:"AIzaSyD_Ho2T6-rlzxvKs3jrlcfe4fi1pCZKjBQ",
                projectId:"disco-charger-326805",
                 // key: 'YOUR API KEY',
                // projectId: 'YOUR PROJECT ID',
                // customReportingFunction:  this.myCustomFunction,
                // disabled: false,
                // context: {user: 'user1'}
                
           });
        });
    }
    handleError(erro: any): void {
        
        console.log("inside handle error!!!!!!!");
        console.log(erro);
        
        this.errorHandler.report(erro);
    }
    //  myCustomFunction(payload:any) {
    //     console.log("custom reporting function called with payload:", payload);
    //     return Promise.resolve(); 
    //   }
}