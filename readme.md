# iptiQ - Task Manager Project - Api

Call Task Manager component

## Standards
- Language: `TS`
- Eslint: `Yes`
- Static Code Analysis: `Yes` *IntelliJ Code Inspections*

## Commands
- ``npm run clear`` *// clears "dist" folder*
- ``npm run lint`` *// runs eslint for static code analysis*
- ``npm run test`` *// runs test files in "test" folder*
- ``npm run build`` *// builds JS files at "dist" folder*
- ``npm run start`` *// starts web server*

## Dependencies
- ``@yelmer-samples/iptiq-task-manager`` *core component*
- ``express`` *provides as web server*
- ``dotenv`` *reads environment*
- ``cors`` *provides CORS*
- ``body-parser`` *handles body by header*
- ``helmet`` *handles header keys*

## Postman
> You can find Postman export file at [go to test folder](./assets/) 

## Config
> You can use `host` as `http://localhost:8080/v1` 

## Environment
> You can set env constants
>
| Name | Value | Info |
| ---- | --- | --- |
| HTTP_PORT | 8080 | Port value for web server |
| NODE_ENV | prod | Environment type (prod, stage, test, dev, local)) |

> Sample Endpoint
>
`POST` `http://localhost:8080/v1/add`
> Sample Payload
````json
{
    "priority": "high"
}
````
> Sample Response
````json
{
    "createdAt": 1632515642364,
    "pid": "de338029-2399-4ae9-90ad-6329a3236b0b",
    "priority": "high"
}
````

## Samples

### Add
> Creates a new task with given priority
>
| Type | Value |
| ---- | --- |
| Method | POST |
| Endpoint | `host`/add |
| Payload | AddDto |
| Response | TaskItem |

> Sample Endpoint
>
`POST` `http://localhost:8080/v1/add`
> Sample Payload
````json
{
    "priority": "high"
}
````
> Sample Response
````json
{
    "createdAt": 1632515642364,
    "pid": "de338029-2399-4ae9-90ad-6329a3236b0b",
    "priority": "high"
}
````

### List
> Lists all tasks with sorting createdAt
>
| Type | Value |
| ---- | --- |
| Method | GET |
| Endpoint | `host`/list |
| Payload | *none* |
| Response | Array<TaskItem> |
> Sample Endpoint
>
`GET` `http://localhost:8080/v1/list`
> Sample Response
````json
[
    {
        "createdAt": 1632517732432,
        "pid": "7c9594c8-f2e5-41ba-aa37-136c6875a00c",
        "priority": "high"
    },
    {
        "createdAt": 1632517735945,
        "pid": "e95857a9-eec0-4a8a-b7c3-9a0b4a0672d4",
        "priority": "low"
    }
]
````

### Size
> Returns task size (number of tasks)
>
| Type | Value |
| ---- | --- |
| Method | GET |
| Endpoint | `host`/size |
| Payload | *none* |
| Response | SizeResponse |
> Sample Endpoint
>
`GET` `http://localhost:8080/v1/size`
> Sample Response
````json
{
    "count": 1
}
````

### Mode
> Returns current mode
>
| Type | Value |
| ---- | --- |
| Method | GET |
| Endpoint | `host`/mode |
| Payload | *none* |
| Response | ModeResponse |
> Sample Endpoint
>
`GET` `http://localhost:8080/v1/mode`
> Sample Response
````json
{
    "mode": "fifo"
}
````

### Capacity
> Returns current capacity (possible maximum number of tasks)
>
| Type | Value |
| ---- | --- |
| Method | GET |
| Endpoint | `host`/capacity |
| Payload | *none* |
| Response | SizeResponse |
> Sample Endpoint
>
`GET` `http://localhost:8080/v1/capacity`
> Sample Response
````json
{
    "count": 500
}
````

### Kill All
> Kills/removes all tasks
>
| Type | Value |
| ---- | --- |
| Method | DELETE |
| Endpoint | `host`/kill-all |
| Payload | *none* |
| Response | KillListResponse |
> Sample Endpoint
>
`DELETE` `http://localhost:8080/v1/kill-all`
> Sample Response
````json
{
    "deletedCount": 23
}
````

### Kill by Group
> Kills/removes tasks which' priority equals to given
>
| Type | Value |
| ---- | --- |
| Method | DELETE |
| Endpoint | `host`/kill-group/`priority` |
| Payload | *none* |
| Response | KillListResponse |
> Sample Endpoint
>
`DELETE` `http://localhost:8080/v1/kill-group/low`
> Sample Response
````json
{
    "deletedCount": 4
}
````

### Kill by Pid
> Kills/removes task with given pid
>
> **NOTE**: It could throw an error if task is absent, but I preferred it, @todo
>
| Type | Value |
| ---- | --- |
| Method | DELETE |
| Endpoint | `host`/kill/`pid` |
| Payload | *none* |
| Response | KillResponse |
> Sample Endpoint
>
`DELETE` `http://localhost:8080/v1/kill/7c9594c8-f2e5-41ba-aa37-136c6875a00c`
> Sample Response
````json
{
    "isDeleted": true
}
````

---

### Reset mode
> Reset mode in runtime
>
| Type | Value |
| ---- | --- |
| Method | PATCH |
| Endpoint | `host`/reset-mode/`mode` |
| Payload | *none* |
| Response | KillListResponse |

> Sample Endpoint
>
`PATCH` `http://localhost:8080/v1/reset-mode/fifo`

> Sample Response
````json
{
    "deletedCount": 5
}
````

### Reset Capacity
> Reset capacity in runtime
>
| Type | Value |
| ---- | --- |
| Method | PATCH |
| Endpoint | `host`/reset-capacity/`capacity` |
| Payload | *none* |
| Response | KillListResponse |
> Sample Endpoint
>
`PATCH` `http://localhost:8080/v1/reset-capacity/500`
> Sample Response
````json
{
    "deletedCount": 3
}
````

### Prepared by
- Mustafa Yelmer
- mustafayelmer(at)gmail.com
- `2021-09-21`