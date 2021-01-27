
namespace trial.components {
    interface IcarDetailViewModel {
        selectedCarDetails: KnockoutObservable<string>;
        selectedCarName: KnockoutObservable<string>;
        buttonIsDisabled: KnockoutObservable<boolean>;
        buttonIsEnable(): void;
    }

    ko.components.register("trial-details", {
        viewModel: {
            createViewModel: (params) => {
                const viewModel: IcarDetailViewModel = {
                    selectedCarDetails: ko.observable(),
                    selectedCarName: params.selectedItemName,
                    buttonIsDisabled: ko.observable(false),
                    buttonIsEnable() {
                        viewModel.buttonIsDisabled(true);
                    }
                }
                viewModel.selectedCarName.subscribe((value) => {
                    $.getJSON("js/json/" + value + ".json", (data) => {
                        viewModel.selectedCarDetails(data);
                    });
                });
                return viewModel;
            }
        },
        template: `<div class="boxKnockout">
                    <h2 data-bind="text:selectedCarName"></h2>
                        <ul data-bind="foreach:selectedCarDetails">
                            <li><span data-bind="text:description" ></span></li>
                            <li><label>Made :</label><spain data-bind="text:made"></spain></li>
                            <li><label>Models :</label><select class ="inputData"data-bind = "options:models"></select></li>
                        </ul>
                    <button data-bind="click :buttonIsEnable, attr : {'disabled' : buttonIsDisabled}"enable>Button</button>
                </div>`
    });
}
