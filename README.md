## Under Development

## Installation

### Requirements
* MongoDB
* Nodejs `v8`
* Nginx

`nvm` could help you to manage different Nodejs version and adapted the project version on `.nvmrc`. [Installation](https://github.com/creationix/nvm#installation)

`$ nvm use` or `nvm install 8`

Install all depencies 

`$ npm install`

#### Nginx

Part of a single page application is config the web server to let the app controls the path and rendering

#####Setup
* Install `nginx` 
* Update or create a `nginx.confg` using the `resources/dev.nginx.config`
  * This maybe help `sudo cp dev.nginx.config /usr/local/etc/nginx/nginx.conf` (The path could be different, just make sure if it's correct)
* After that, go to the `nginx.conf` and update the `root` path of the application
  * The path is from you local
* Run nginx test to validate the config `sudo nginx -t`
* Run `sudo nginx -s reload` reload the service


_Note:_ 
* For Development propose we are using a [Mlab](https://mlab.com/) to provide a `Mongo` database

## Development
```
$ npm start
```

Go to without nginx [http://localhost:3000](http://localhost:3000)
Or
Go to [http://localhost](http://localhost)

`npm run build`: Compilate the React App
`npm run lint`: Check the code base on `eslint` rules

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

`Gitflow`: Branch per (Feature|Bug|Fix|Update)
* Make sure `master` is updated
* Take the new branch from master `$ git checkout -b $branchName master`
* Applied changes, added to the stage, committed the and `$ git push -u origin $branchName`

_Note:_
* In order to have and keep a good history, the commit message should describe what the changes are and the details of it in the Pull Request `PR` content
* Please make sure to update tests as appropriate.

### Style

Using BEM as css pattern. 

Let's keep each component handle is onw style file `[container|component].scss`.

```$xslt
containers/
  Service.jsx
  sevice.scss
```

In order to shared style like `[Color|Mixin|Font|...]` the `app/main.scss` will have all the share style file that will live in `app/base-style`.
Example: `_color.scss`
