import { Application } from "src/assets/Shared/Enums";

export default class ApplicationHelper {

    // Returns the application that best fits the users needs
    // CardSize = The card size that will be used
    // Layout = The number of layouts per template
    // Connection = Will direct connection to a DB be required
    static GetApplication(cardSize: string, layout: string, connection: string): Application {
        if (cardSize != '' && parseInt(cardSize, 10) == 1) {
            return Application.ProducerGo;
        }

        switch (parseInt(layout, 10)) {
            case 1:
                return Application.ProducerPremium;
            case 2:
                return Application.ProducerProfessional
        }

        switch (parseInt(connection, 10)) {
            case 1:
                return Application.ProducerEnterprise;
            case 2:
                return Application.ProducerBusiness;
        }

        return Application.NotFound
    }

}