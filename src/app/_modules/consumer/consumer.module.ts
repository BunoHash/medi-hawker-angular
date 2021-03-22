import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './consumer.route';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';




import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule, AutoCompleteModule, BreadcrumbModule, CalendarModule, CarouselModule, ChartModule, CheckboxModule, ChipsModule, CodeHighlighterModule, ColorPickerModule, ConfirmDialogModule, ContextMenuModule, DataViewModule, DialogModule, FieldsetModule, FullCalendarModule, GalleriaModule, InplaceModule, InputMaskModule, InputSwitchModule, InputTextareaModule, LightboxModule, MegaMenuModule, MenubarModule, MenuModule, MessagesModule, MultiSelectModule, OrderListModule, OrganizationChartModule, OverlayPanelModule, PaginatorModule, PanelMenuModule, PasswordModule, PickListModule, ProgressBarModule, RadioButtonModule, RatingModule, ScrollPanelModule, SlideMenuModule, SliderModule, SpinnerModule, SplitButtonModule, StepsModule, TabMenuModule, TerminalModule, TieredMenuModule, ToastModule, ToggleButtonModule, ToolbarModule, TooltipModule, TreeModule, TreeTableModule, VirtualScrollerModule } from 'primeng';
import { DashboardComponent } from './dashboard.component/dashboarddemo.component';
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';
import { CarService } from 'src/app/demo/service/carservice';
import { BreadcrumbService } from 'src/app/pages/app.breadcrumb/breadcrumb.service';
import { EventService } from 'src/app/demo/service/eventservice';
import { HttpClientModule } from '@angular/common/http';
import { ConsumerShellComponent } from './consumer-shell/consumer-shell.component';
import { AppMenuComponent } from 'src/app/pages/app.menu/app.menu.component';
import { AppMenuitemComponent } from 'src/app/pages/app.menuitem/app.menuitem.component';
import { AppTopBarComponent } from 'src/app/pages/app.topbar/app.topbar.component';
import { AppRightPanelComponent } from 'src/app/pages/app.rightpanel/app.rightpanel.component';
import { AppFooterComponent } from 'src/app/pages/app.footer/app.footer.component';
import { AppConfigComponent } from 'src/app/pages/app.config/app.config.component';
import { AppBreadcrumbComponent } from 'src/app/pages/app.breadcrumb/app.breadcrumb.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';







@NgModule({
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
    CardModule,
    InputTextModule,
    ListboxModule,
    DropdownModule,
    TableModule,
    SelectButtonModule,
    PanelModule,
    FileUploadModule,
    MessageModule,
    TabViewModule,
    AutoCompleteModule,
    FormsModule,
    CommonModule,

    HttpClientModule,
    AccordionModule,
    BreadcrumbModule,
    CalendarModule,
    CarouselModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    FieldsetModule,
    FullCalendarModule,
    GalleriaModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScrollPanelModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TerminalModule,
    TieredMenuModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,
    CardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsumerShellComponent, ConsumerDashboardComponent, DashboardComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppRightPanelComponent,
    AppBreadcrumbComponent,
    AppConfigComponent,
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    ProductCardComponent,
    CartComponent,
    OrderComponent],
  providers: [CarService, BreadcrumbService, EventService, AuthService],
  bootstrap: [ConsumerShellComponent]
})
export class ConsumerModule {

  constructor() {
    console.log("Consumer Module initiated!");
  }
}
