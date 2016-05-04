# django-postgres-angularjs-blog-front
  Front for project https://github.com/EndyKaufman/django-postgres-angularjs-blog

https://django-postgres-angularjs-blog.herokuapp.com

[![Requirements Status](https://requires.io/github/EndyKaufman/django-postgres-angularjs-blog-front/requirements.svg?branch=master)](https://requires.io/github/EndyKaufman/django-postgres-angularjs-blog-front/requirements/?branch=master)

## frontend tools
```
sudo npm install -g npm
sudo npm install -g gulpjs/gulp-cli#4.0 karma-cli npm-check-updates bower protractor selenium-webdriver node-gyp git+https://git@github.com/Medium/phantomjs.git#v1.9.19
sudo npm install --save-dev
sudo npm install node-sass --save-dev
sudo npm install gulpjs/gulp#4.0 --save-dev
sudo npm rebuild
gulp webdriver_update
sudo bower install --save --allow-root
```

#TEST (on Protractor + Selenium with PhantomJS)

## run tests (before run tests, you must run server)
```
gulp test
```

use custom host

```
gulp test --host http://127.0.0.1:5000
```

for test one file

```
gulp test --file tests/account/recovery_access.email.api.js
```

if error in test, you may run tests on debug mode

```
export $(cat .env)
cd front
gulp test --debug true
```

## build frontend on development mode

default on run command "gulp build"

```
gulp build --env development
```
## build frontend on production mode

```
gulp build --env production
```

use custom output for static

```
gulp build --env production --static_dir ../wwwroot
```
