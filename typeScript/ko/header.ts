namespace trial.components {
    interface IHeaderViewModel {
        headerText: KnockoutObservable<string>
    }
    ko.components.register("trial-header", {
        viewModel: {
            createViewModel: () => {
                const viewModel: IHeaderViewModel = {
                    headerText: ko.observable("All Cars from the JSON list using TyprScript")
                };
                return viewModel;
            }
        },
        template: `<div><h1 data-bind="text:headerText" ></h1></div>`
    });
}
