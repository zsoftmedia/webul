namespace trial.components {
    interface IcarViewModel {
        cars: KnockoutObservableArray<string>;
        noDataInJSONFile: KnockoutObservable<string>;
        selectedCarName: KnockoutObservable<string>;
        selectListItem(mycars: selectListItem): void;
    }
    interface selectListItem {
        brand: string;
    }
    ko.components.register("trial-list", {
        viewModel: {
            createViewModel: (params) => {
                $.getJSON("js/json/main.json", (data) => {
                    viewModel.cars(data.cars);
                    if (viewModel.cars().length === 0) {
                        viewModel.noDataInJSONFile("NO Data Found!");
                    } else {
                        viewModel.selectedCarName(data.cars[0].brand);
                    }
                });
                const viewModel: IcarViewModel = {
                    cars: ko.observableArray([]),
                    noDataInJSONFile: ko.observable(),
                    selectedCarName: params.selectedItemName,
                    selectListItem: (mycar) => {
                        viewModel.selectedCarName(mycar.brand);

                    }
                };
                return viewModel;
            }
        },
        template: `
            <div class="jsonBox">
                <h1 class = "noData"data-bind="text:noDataInJSONFile"></h1>
                <ul data-bind="foreach:cars">
                    <li data-bind="text:brand,css:{selected:brand == $parent.selectedCarName()},click:$parent.selectListItem">
                   </li>
                </ul>
            </div>
    `
    });
}
