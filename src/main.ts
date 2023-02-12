import { ApplicationRef } from '@angular/core';
import { bootstrapApplication, enableDebugTools } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).then((moduleRef) => {
  const applicationRef = moduleRef.injector.get(ApplicationRef);
  const componentRef = applicationRef.components[0];
  enableDebugTools(componentRef);

  const originalTick = applicationRef.tick;
    applicationRef.tick = function() {
      const windowPerfomance = window.performance;
      const  before = windowPerfomance.now();
      const retValue = originalTick.apply(this, []);
      const after = windowPerfomance.now();
      const runTime = after - before;
      window.console.log('CHANGE DETECTION TIME' , runTime);
      return retValue;
    };
});
