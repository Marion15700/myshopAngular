import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Presentation } from './components/presentation/presentation';
import { ProductPage } from './components/product-page/product-page';
import { InscriptionForm } from './components/inscription-form/inscription-form';
import { ConnexionForm } from './components/connexion-form/connexion-form';
import { ContactForm } from './components/contact-form/contact-form';
import { TablePanier } from './components/table-panier/table-panier';
import { AddproductForm } from './components/addproduct-form/addproduct-form';
import { Admin } from './components/admin/admin';
import { ProductInfo } from './components/product-info/product-info';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "product-page", component: ProductPage},
    {path: "presentation", component: Presentation},
    {path: "inscription-form", component: InscriptionForm},
    {path: "connexion-form", component: ConnexionForm},
    {path: "contact-form", component: ContactForm},
    {path: "table-panier", component: TablePanier},
    {path: "addproduct-form", component: AddproductForm},
    {path: "admin", component: Admin},
    {path: "productInfo", component: ProductInfo},
    {path: "editProducts", component: AddproductForm},
    {path: "editUsers", component:InscriptionForm}
];
