import { ApplicationConfig } from "@angular/core";
import { provideRouter, withPreloading } from "@angular/router";
import { QuicklinkStrategy, quicklinkProviders } from "ngx-quicklink";
import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(QuicklinkStrategy)), provideAnimationsAsync(), quicklinkProviders],
};
