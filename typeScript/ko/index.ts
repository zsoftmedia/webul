namespace trial {
    export class Index {
        static store: Redux.Store<store.IRoot, Redux.Action> & Redux.MiddlewareAPI<Redux.ThunkDispatch<any, void, Redux.Action>, any>;

    }
    interface TrialApp {
        selected: KnockoutObservable<string>
    }

    ko.components.register("trial-app", {
        viewModel: {
            createViewModel: () => {
                const viewModel: TrialApp = {
                    selected: ko.observable(),
                };
                return viewModel;
            }
        },
        template: `
        <div class="box">
            <trial-header />
             <trial-list params ="selectedItemName:selected" />
            <trial-details params ="selectedItemName:selected" />
        </div>
    `
    });

    window.onload = () => {
        // const preloadedState: store.IRoot = {};
        // Index.store = Redux.createStore(
        //     core.reducers.Root.reducer,
        //     preloadedState as Redux.DeepPartial<any>,
        //     Redux.applyMiddleware<Redux.ThunkDispatch<any, void, Redux.Action>, any>(ReduxThunk.default)
        // );
        document.body.innerHTML = "<trial-app></trial-app>";
        ko.options.useOnlyNativeEvents = true;
        ko.applyBindings();
    };
}
