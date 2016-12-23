class RootComponent {
    constructor($injector) {
        this.$injector = $injector;
        this.componentName = "myappRoot";
    }

    find() {
        var directives = this.$injector.get(this.componentName + "Directive");
        if(!directives.length) {
            console.log("NOT found");
            return;
        }

        directives.forEach(dir => {
            console.log(dir.controller.prototype);
        });
    }
}

appModule.component("myappRoot", {
    controller: RootComponent,
    templateUrl: "root.component.html"
});
