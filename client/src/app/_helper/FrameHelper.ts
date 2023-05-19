import { Application } from "src/assets/Shared/Enums";

export default class FrameHelper {
    static GetIFrame(application: Application) {
        switch (application) {
            case Application.ProducerGo:
                return "https://cardexchange.shop/producer/desktop/editions/go#eshop-main-container";
            case Application.ProducerPremium:
                return "https://cardexchange.shop/producer/desktop/editions/premium#eshop-main-container";
            case Application.ProducerProfessional:
                return "https://cardexchange.shop/producer/desktop/editions/professional#eshop-main-container";
            case Application.ProducerEnterprise:
                return "https://cardexchange.shop/producer/desktop/editions/enterprise#eshop-main-container";
            case Application.ProducerBusiness:
                return "https://cardexchange.shop/producer/desktop/editions/business#eshop-main-container";
            default:
                return "";
        }
    }
}