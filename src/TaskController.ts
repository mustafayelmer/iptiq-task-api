import * as express from "express";
import {Express, Router} from "express";
import {TaskMode, TaskPriority} from "@yelmer-samples/iptiq-task-manager";
import {TaskAddDto} from "@yelmer-samples/iptiq-task-manager/dist/task-manager/interfaces";
import {TaskService} from "./TaskService";

// noinspection JSUnusedGlobalSymbols
export class TaskController {
    _router: Router;
    _service: TaskService;


    /**
     * @constructor
     * */
    constructor() {
        this._router = express.Router();
        this._service = new TaskService();
    }
    route(app: Express): void {
        this._router.post('/add', (req, res) => {
            this._service.addAsync(req.body as TaskAddDto)
                .then(content => {
                    res.status(content ? 201 : 202).json(content);
                })
                .catch((e: Error) => {
                    res.status(400).json({name: e.name, message: e.message});
                });
        });

        this._router.get('/list', (req, res) => {
            this._service.listAsync()
                .then(content => {
                    res.json(content);
                })
                .catch((e: Error) => {
                    res.status(400).json({name: e.name, message: e.message});
                });
        });
        this._router.get('/size', (req, res) => {
            this._service.sizeAsync()
                .then(content => {
                    res.json(content);
                })
                .catch((e: Error) => {
                    res.status(400).json({name: e.name, message: e.message});
                });
        });
        this._router.delete('/kill/:pid', (req, res) => {
            this._service.killAsync(req.params.pid as string)
                .then(content => {
                    res.json(content);
                })
                .catch((e: Error) => {
                    res.status(400).json({name: e.name, message: e.message});
                });
        });
        this._router.delete('/kill-group/:priority', (req, res) => {
            this._service.killGroupAsync(req.params.priority as TaskPriority)
                .then(content => {
                    res.json(content);
                })
                .catch((e: Error) => {
                    res.status(400).json({name: e.name, message: e.message});
                });
        });
        this._router.delete('/kill-all', (req, res) => {
            this._service.killAllAsync()
                .then(content => {
                    res.json(content);
                })
                .catch((e: Error) => {
                    res.status(400).json({name: e.name, message: e.message});
                });
        });
        this._router.patch('/reset-mode/:mode', (req, res) => {
            this._service.resetModeAsync(req.params.mode as TaskMode)
                .then(content => {
                    res.json(content);
                })
                .catch((e: Error) => {
                    res.status(400).json({name: e.name, message: e.message});
                });
        });
        this._router.patch('/reset-capacity/:capacity', (req, res) => {
            this._service.resetCapacityAsync(req.params.capacity as unknown as number)
                .then(content => {
                    res.json(content);
                })
                .catch((e: Error) => {
                    res.status(400).json({name: e.name, message: e.message});
                });
        });
        app.use('/v1', this._router);
    }
}