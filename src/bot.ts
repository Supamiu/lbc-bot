import * as lbc from "leboncoin-api";

/**
 * The main bot class.
 */
export class Bot {

    private _running = false;

    private _interval: number = 60 * 1000;

    public start(): void {
        this._running = true;
        this.checkTask();
    }

    public stop(): void {
        this._running = false;
    }

    public checkTask(): void {
        let search = new lbc.Search()
            .setPage(1)
            .setCategory("locations")
            .setRegion("pays_de_la_loire")
            .setDepartment("loire_atlantique")
            .addSearchExtra("ret", 1)
            .setLocation("Couëron 44200,Saint-Herblain 44800,Nantes")
            .addSearchExtra("sqs", 6)
            .addSearchExtra("sqe", 9)
            .addSearchExtra("mrs", 500)
            .addSearchExtra("mre", 850);

        search.run().then( result => {
           console.log(result.nbResult);
        });
        // if (this._running) {
        //     setTimeout(this.checkTask, this.interval);
        // }
    }

    public get interval(): number {
        return this._interval;
    }
}

