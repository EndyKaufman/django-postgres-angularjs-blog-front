angular.module("app").run(['$templateCache', function(a) { a.put('views/project/inputs/right.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="ItemName">Name</label>\n' +
    '    <input type="text" class="form-control" id="ItemName" name="ItemName" ng-model="ProjectSvc.item.name" required>\n' +
    '    <span ng-show="projectForm.$submitted || projectForm.ItemName.$touched" class="form-control-feedback"\n' +
    '          ng-class="!projectForm.ItemName.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '          aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback">\n' +
    '    <label for="ItemType">Type</label>\n' +
    '    <select class="form-control" id="ItemType" ng-model="ProjectSvc.item.type">\n' +
    '        <option ng-repeat="type in AppConst.project.types"\n' +
    '                ng-value="type.id"\n' +
    '                ng-bind-html="type.title | unsafe"\n' +
    '                ng-selected="ProjectSvc.item.type==type.id"></option>\n' +
    '    </select>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback">\n' +
    '    <label for="ItemTags">Tags</label>\n' +
    '    <tags-input id="ItemTags" ng-model="ProjectSvc.item.tags" placeholder="Add tag" min-length="1">\n' +
    '        <auto-complete source="TagSvc.searchTag($query)"></auto-complete>\n' +
    '    </tags-input>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="ItemDescription">Description</label>\n' +
    '                <textarea type="text" class="form-control" id="ItemDescription" name="ItemDescription"\n' +
    '                          ng-model="ProjectSvc.item.description" required></textarea>\n' +
    '</div>');
	a.put('views/project/inputs/central.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="ItemTitle">Title</label>\n' +
    '    <input type="text" class="form-control" id="ItemTitle" name="ItemTitle" ng-model="ProjectSvc.item.title"\n' +
    '           ng-change="ProjectSvc.slugName(ProjectSvc.item.title)" required>\n' +
    '    <span ng-show="projectForm.$submitted || projectForm.ItemTitle.$touched" class="form-control-feedback"\n' +
    '          ng-class="!projectForm.ItemTitle.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '          aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" ng-if="ProjectSvc.item.type==1">\n' +
    '    <label for="ItemText">Text</label>\n' +
    '                <textarea type="text" class="form-control" id="ItemText"\n' +
    '                          ng-model="ProjectSvc.item.text" rows="15"></textarea>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" ng-if="ProjectSvc.item.type==2">\n' +
    '    <label for="ItemHtml">Html</label>\n' +
    '                <textarea type="text" class="form-control" id="ItemHtml"\n' +
    '                          ng-model="ProjectSvc.item.html" rows="15"></textarea>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" ng-if="ProjectSvc.item.type==3">\n' +
    '    <label for="ItemUrl">Url</label>\n' +
    '                <textarea type="text" class="form-control" id="ItemUrl"\n' +
    '                          ng-model="ProjectSvc.item.url" rows="15"></textarea>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" ng-if="ProjectSvc.item.type==4">\n' +
    '    <label for="ItemMarkdown">Markdown</label>\n' +
    '                <textarea type="text" class="form-control" id="ItemMarkdown"\n' +
    '                          ng-model="ProjectSvc.item.markdown" rows="15"></textarea>\n' +
    '</div>\n' +
    '<div class="form-group" ng-repeat="image in ProjectSvc.item.images track by image.id">\n' +
    '    <label for="{{\'ItemImage\'+($index+1)}}" ng-bind-html="\'Image \'+($index+1) | unsafe"></label>\n' +
    '    <div class="input-group has-feedback">\n' +
    '        <input type="text" class="form-control" id="{{\'ItemImage\'+($index+1)}}"\n' +
    '               ng-model="image.src">\n' +
    '                        <span class="input-group-btn">\n' +
    '                            <button ng-click="FileSvc.showList(image)" class="btn btn-cta-default"\n' +
    '                                    type="button" id="{{\'projectSelect\'+$index+\'Image\'}}">\n' +
    '                                <i class="fa fa-check"></i> Select\n' +
    '                            </button>\n' +
    '                            <button ng-click="ProjectSvc.doDeleteImage($index)" class="btn btn-cta-red"\n' +
    '                                    type="button" id="{{\'projectDelete\'+$index+\'Image\'}}">\n' +
    '                                <i class="fa fa-trash"></i> Delete image\n' +
    '                            </button>\n' +
    '                        </span>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/tag/list.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        Tag: <span ng-bind-html="TagSvc.tagText | unsafe"></span>\n' +
    '                    </h1>\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '            <div ng-repeat="allItem in TagSvc.allList">\n' +
    '                <section class="latest section" ng-if="allItem.name==\'project\'">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading" ng-include="\'views/project/list-header.html\'">\n' +
    '                        </h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/tag/list-projects.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </section><!--//section-->\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/tag/list-projects.html', '<div class="item row" ng-repeat="item in allItem.list | limitTo:ProjectSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/project/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="/project">All projects <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/search/list.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        Search result for text "<span ng-bind-html="SearchSvc.searchText | unsafe"></span>"\n' +
    '                    </h1>\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '            <div ng-repeat="allItem in SearchSvc.allList">\n' +
    '                <section class="latest section" ng-if="allItem.name==\'project\'">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading" ng-include="\'views/project/list-header.html\'">\n' +
    '                        </h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/tag/list-projects.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </section><!--//section-->\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/search/list-projects.html', '<div class="item row" ng-repeat="item in allItem.list | limitTo:ProjectSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/project/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="/project">All projects <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/project/update.html', '<div class="container sections-wrapper">\n' +
    '    <form name="projectForm">\n' +
    '        <div class="row">\n' +
    '            <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '                <section class="latest section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h1 class="heading">\n' +
    '                            <span>Edit project</span>\n' +
    '                            <a ng-href="{{\'/project/\'+ProjectSvc.item.name}}"\n' +
    '                               class="btn btn-cta-default pull-right btn-xs" ng-if="AccountSvc.isAdmin()"\n' +
    '                               id="projectUpdate"><i class="fa fa-pencil-square-o"></i> View</a>\n' +
    '                        </h1>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/project/inputs/central.html\'"></div>\n' +
    '                            <div>\n' +
    '                                <button ng-click="ProjectSvc.doUpdate(ProjectSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                        ng-disabled="!projectForm.$valid" id="projectSave">\n' +
    '                                    <i class="fa fa-floppy-o"></i> Save\n' +
    '                                </button>\n' +
    '                                <button ng-click="ProjectSvc.doDelete(ProjectSvc.item)" class="btn btn-cta-red"\n' +
    '                                        id="projectDelete">\n' +
    '                                    <i class="fa fa-trash"></i> Delete project\n' +
    '                                </button>\n' +
    '                                <button ng-click="ProjectSvc.doAddImage()" class="btn btn-cta-default pull-right"\n' +
    '                                        id="projectAddImage">\n' +
    '                                    <i class="fa fa-plus"></i> Add image\n' +
    '                                </button>\n' +
    '                            </div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </section><!--//section-->\n' +
    '\n' +
    '            </div><!--//primary-->\n' +
    '            <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '\n' +
    '                <aside class="list tags aside section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading">Additionally</h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/project/inputs/right.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </aside><!--//section-->\n' +
    '\n' +
    '                <aside class="info aside section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading sr-only">Search</h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/search.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </aside><!--//aside-->\n' +
    '\n' +
    '            </div><!--//secondary-->\n' +
    '        </div><!--//row-->\n' +
    '    </form>\n' +
    '</div><!--//masonry-->');
	a.put('views/project/list.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-include="\'views/project/list-header.html\'">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div class="item row"\n' +
    '                             ng-repeat="item in ProjectSvc.list | limitTo:ProjectSvc.limit:ProjectSvc.begin">\n' +
    '                            <div ng-include="\'views/project/list-item.html\'"></div>\n' +
    '                        </div><!--//item-->\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/project/list-item.html', '<a class="col-md-4 col-sm-4 col-xs-12" ng-href="{{\'/project/\'+item.name}}" ng-if="item.images.length>0">\n' +
    '    <img class="img-responsive project-image" ng-src="{{AppConfig.static_url+item.images[0].srcStatic}}"\n' +
    '         ng-if="item.images.length>0"\n' +
    '         alt="{{item.title}}"/>\n' +
    '</a>\n' +
    '<div class="desc col-xs-12" ng-class="item.images.length>0?\'col-md-8 col-sm-8\':\'col-md-12 col-sm-12\'">\n' +
    '    <div class="pull-right">\n' +
    '        <a ng-click="ProjectSvc.doDelete(item)" class="btn btn-cta-red btn-xs"\n' +
    '           id="projectDelete" ng-if="AccountSvc.isAdmin()">\n' +
    '            <i class="fa fa-trash"></i>\n' +
    '            <span class="hidden-xs">Delete</span>\n' +
    '        </a>\n' +
    '        <a ng-href="{{\'/project/update/\'+item.name}}"\n' +
    '           class="btn btn-cta-default btn-xs" ng-if="AccountSvc.isAdmin()"\n' +
    '           id="{{\'project\'+$index+\'Update\'}}">\n' +
    '            <i class="fa fa-pencil-square-o"></i>\n' +
    '            <span class="hidden-xs">Edit</span>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '    <h3 class="title">\n' +
    '        <a ng-href="{{\'/project/\'+item.name}}" ng-bind-html="item.title | unsafe"></a>\n' +
    '    </h3>\n' +
    '    <p ng-bind-html="item.description | unsafe"></p>\n' +
    '    <p>\n' +
    '        <a class="more-link" ng-href="{{\'/project/\'+item.name}}" id="{{\'project\'+$index+\'Detail\'}}"><i\n' +
    '                class="fa fa-link"></i> Detail...</a>\n' +
    '    </p>\n' +
    '</div><!--//desc-->\n' +
    '<div class="desc col-md-12 col-sm-12 col-xs-12">\n' +
    '    <hr class="divider" ng-if="!$last"/>\n' +
    '</div><!--//desc-->');
	a.put('views/project/list-header.html', '<span ng-bind-html="AppConst.project.strings.title | unsafe"></span>\n' +
    '<a ng-href="/project/create"\n' +
    '   class="btn btn-cta-secondary pull-right btn-xs" ng-if="AccountSvc.isAdmin()" id="projectCreate"><i class="fa fa-plus"></i>  Create</a>');
	a.put('views/project/item.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        <span ng-bind-html="ProjectSvc.item.title | unsafe"></span>\n' +
    '                        <a ng-href="{{\'/project/update/\'+ProjectSvc.item.name}}"\n' +
    '                           class="btn btn-cta-secondary pull-right btn-xs" ng-if="AccountSvc.isAdmin()" id="projectUpdate"><i class="fa fa-pencil-square-o"></i> Edit</a>\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div class="item row">\n' +
    '                            <div ng-include="\'views/project/item-content.html\'"></div>\n' +
    '                        </div><!--//item-->\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="list description aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Description</h2>\n' +
    '                    <div class="content">\n' +
    '                        <span ng-bind-html="ProjectSvc.item.description | unsafe"></span>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/project/item-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/project/item-tags.html', '<ul class="list-unstyled">\n' +
    '    <li ng-repeat="tag in ProjectSvc.item.tags"><i class="fa fa-tag"></i> <a ng-href="{{\'/tag/\'+tag.text}}"\n' +
    '                                                                             ng-bind-html="tag.text | unsafe"></a></li>\n' +
    '</ul>');
	a.put('views/project/item-content.html', '<div ng-if="ProjectSvc.item.images.length>0">\n' +
    '    <div class="desc col-md-12 col-sm-12 col-xs-12">\n' +
    '        <div ng-if="ProjectSvc.item.images.length==1">\n' +
    '            <img ng-src="{{AppConfig.static_url+ProjectSvc.item.images[0].srcStatic}}"\n' +
    '                 class="img-responsive"/>\n' +
    '        </div>\n' +
    '        <div ng-if="ProjectSvc.item.images.length>1">\n' +
    '            <div data-nq-carousel="">\n' +
    '                <div data-carousel-item="" ng-repeat="image in ProjectSvc.item.images">\n' +
    '                    <!--h3 class="carousel-title" nf-if="image.title!=\'\'"\n' +
    '                        ng-bind-html="image.title | unsafe"></h3-->\n' +
    '                    <img ng-src="{{AppConfig.static_url+image.srcStatic}}">\n' +
    '                    <div class="carousel-caption" nf-if="image.description!=\'\'">\n' +
    '                        <h4 ng-bind-html="image.description | unsafe"></h4>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <hr class="divider"/>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="desc col-md-12 col-sm-12 col-xs-12">\n' +
    '    <div ng-if="ProjectSvc.item.type==1 && ProjectSvc.item.text">\n' +
    '        <p ng-bind-html="ProjectSvc.item.text | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="ProjectSvc.item.type==2 && ProjectSvc.item.html">\n' +
    '        <p ng-bind-html="ProjectSvc.item.html | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="ProjectSvc.item.type==3 && ProjectSvc.item.url">\n' +
    '        <p ng-bind-html="ProjectSvc.item.url | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="ProjectSvc.item.type==4 && ProjectSvc.item.markdown">\n' +
    '        <markdown extensions="github, table, twitter" strip="true" allow-html="true"\n' +
    '                  ng-model="ProjectSvc.item.markdown">\n' +
    '        </markdown>\n' +
    '    </div>\n' +
    '</div><!--//desc-->');
	a.put('views/project/create.html', '<div class="container sections-wrapper" ng-init="ProjectSvc.initEmptyItem()">\n' +
    '    <form name="projectForm">\n' +
    '        <div class="row">\n' +
    '            <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '                <section class="latest section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h1 class="heading">\n' +
    '                            <span>Create project</span>\n' +
    '                        </h1>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/project/inputs/central.html\'"></div>\n' +
    '                            <div>\n' +
    '                                <button ng-click="ProjectSvc.doCreate(ProjectSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                        ng-disabled="!projectForm.$valid" id="projectCreate">\n' +
    '                                    <i class="fa fa-check"></i> Create\n' +
    '                                </button>\n' +
    '                                <button ng-click="ProjectSvc.doDelete(ProjectSvc.item)" class="btn btn-cta-red"\n' +
    '                                        id="projectDelete">\n' +
    '                                    <i class="fa fa-trash"></i> Delete project\n' +
    '                                </button>\n' +
    '                                <button ng-click="ProjectSvc.doAddImage()" class="btn btn-cta-default pull-right"\n' +
    '                                        id="projectAddImage">\n' +
    '                                    <i class="fa fa-plus"></i> Add image\n' +
    '                                </button>\n' +
    '                            </div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </section><!--//section-->\n' +
    '\n' +
    '            </div><!--//primary-->\n' +
    '            <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '\n' +
    '                <aside class="list tags aside section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading">Additionally</h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/project/inputs/right.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </aside><!--//section-->\n' +
    '\n' +
    '                <aside class="info aside section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading sr-only">Search</h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/search.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </aside><!--//aside-->\n' +
    '\n' +
    '            </div><!--//secondary-->\n' +
    '        </div><!--//row-->\n' +
    '    </form>\n' +
    '</div><!--//masonry-->');
	a.put('views/message/prompt.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title"></h4></div>\n' +
    '            <div class="modal-body">\n' +
    '                <div class="modal-body-inner" ng-bind="content"></div>\n' +
    '                <div class="margin-t form-group"><label for="promptModel">{{promptLabel}}</label><input type="text"\n' +
    '                                                                                                        class="form-control"\n' +
    '                                                                                                        name="promptModel"\n' +
    '                                                                                                        ng-model="promptModel">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-cta-default" ng-click="$cancel()">\n' +
    '                    <i class="fa fa-undo"></i> {{cancelText}}\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()">\n' +
    '                    <i class="fa fa-check"></i> {{confirmText}}\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                <i class="fa fa-times"></i>\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/message/modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title"></h4></div>\n' +
    '            <div class="modal-body" ng-bind="content"></div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$hide()">{{closeText}}</button>\n' +
    '            </div>\n' +
    '            <button type="button" class="close" ng-click="$hide()" ng-bind-html="closeIcon">&nbsp;</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/message/confirm.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title"></h4></div>\n' +
    '            <div class="modal-body">\n' +
    '                <div class="modal-body-inner" ng-bind="content"></div>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-cta-default" ng-click="$cancel()">\n' +
    '                    <i class="fa fa-undo"></i> {{cancelText}}\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()">\n' +
    '                    <i class="fa fa-check"></i> {{confirmText}}\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                <i class="fa fa-times"></i>\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/message/alert.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title"></h4></div>\n' +
    '            <div class="modal-body">\n' +
    '                <div class="modal-body-inner" ng-bind="content"></div>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$hide()">\n' +
    '                    <i class="fa fa-check"></i> {{okText}}\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <button type="button" class="close" ng-click="$hide()" ng-bind-html="closeIcon">\n' +
    '                <i class="fa fa-times"></i>\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/home/list.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading" ng-include="\'views/project/list-header.html\'">\n' +
    '                    </h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-projects.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/home/list-tags.html', '<ul class="list-unstyled">\n' +
    '    <li ng-repeat="tag in TagSvc.list | limitTo:TagSvc.limitOnHome">\n' +
    '        <i class="fa fa-tag"></i> <a ng-href="{{\'/tag/\'+tag.text}}" ng-class="tag.text==TagSvc.tagText?\'active\':\'\'"\n' +
    '                                     ng-bind-html="tag.text | unsafe"></a></li>\n' +
    '</ul>\n' +
    '<a class="btn btn-default btn-block" ng-click="TagSvc.limitOnHome=10000" ng-if="TagSvc.limitOnHome<10000">Show all <i\n' +
    '        class="fa fa-chevron-down"></i></a>\n' +
    '');
	a.put('views/home/list-projects.html', '<div class="item row" ng-repeat="item in ProjectSvc.list | limitTo:ProjectSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/project/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="/project">All projects <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/home/content.html', '<div class="container">\n' +
    '    <div class="page-header">\n' +
    '        <h1>Page header</h1>\n' +
    '    </div>\n' +
    '    <p class="lead">Description of page <code>source code</code> and others text.</p>\n' +
    '    <p>Text for link <a href="http://google.com">i am link</a> others text.</p>\n' +
    '</div>');
	a.put('views/file/update.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="FileCtrl">\n' +
    '            <form name="fileForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/file/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="fileUpdateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!fileForm.$valid" id="fileUpdateConfirm">\n' +
    '                        <i class="fa fa-floppy-o"></i> {{confirmText}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/file/list.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content">\n' +
    '            <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title"></h4></div>\n' +
    '            <div class="modal-body">\n' +
    '                <div class="modal-body-inner">\n' +
    '                    <div ng-controller="FileCtrl">\n' +
    '                        <div ng-include="\'views/file/list.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="fileListCancel"><i\n' +
    '                        class="fa fa-undo"></i> {{cancelText}}\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()" id="fileListConfirm"><i\n' +
    '                        class="fa fa-check"></i> {{confirmText}}\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                <i class="fa fa-times"></i>\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/file/list.html', '<div class="row">\n' +
    '    <div class="col-md-3">\n' +
    '        <button ng-click="FileSvc.showCreate()" class="btn btn-cta-default" type="button" id="fileCreate">\n' +
    '            <i class="fa fa-plus"></i> Add file\n' +
    '        </button>\n' +
    '    </div>\n' +
    '    <div class="col-md-9">\n' +
    '        <div class="input-group">\n' +
    '            <input type="text" class="form-control search-query"\n' +
    '                   ng-model="FileSvc.searchText"\n' +
    '                   ng-enter="FileSvc.doSearch(FileSvc.searchText)" required/>\n' +
    '                                        <span class="input-group-btn">\n' +
    '                                            <button ng-click="FileSvc.doSearch(FileSvc.searchText)"\n' +
    '                                                    class="btn btn-cta-secondary"\n' +
    '                                                    type="button" id="fileSearch">\n' +
    '                                                Search\n' +
    '                                            </button>\n' +
    '                                        </span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<table class="table table-hover">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '        <th>#</th>\n' +
    '        <th>Url</th>\n' +
    '        <th>Comment</th>\n' +
    '        <th class="text-right">Actions</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="item in FileSvc.list" ng-click="FileSvc.selectItem(item)"\n' +
    '        ng-class="(FileSvc.item.id==item.id)?\'bold\':\'\'">\n' +
    '        <td ng-bind-html="item.id"></td>\n' +
    '        <td ng-bind-html="item.src | unsafe"></td>\n' +
    '        <td ng-bind-html="item.comment | unsafe"></td>\n' +
    '        <td class="text-right">\n' +
    '            <button ng-click="FileSvc.showUpdate(item)" class="btn btn-cta-default btn-xs" type="button"\n' +
    '                    id="{{\'file\'+item.id+\'Update\'}}"><i class="fa fa-pencil-square-o"></i> Edit\n' +
    '            </button>\n' +
    '            <button ng-click="FileSvc.doDelete(item)" class="btn btn-cta-red btn-xs" type="button"\n' +
    '                    id="{{\'file\'+item.id+\'Delete\'}}"><i class="fa fa-trash"></i> Delete\n' +
    '            </button>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>');
	a.put('views/file/inputs.html', '<div class="form-group" ng-if="FileSvc.mode==\'create\'">\n' +
    '    <label for="FileUpload">File</label>\n' +
    '    <input class="form-control" type="file" id="FileUpload"/>\n' +
    '</div>\n' +
    '<div class="form-group" ng-if="FileSvc.mode==\'update\'">\n' +
    '    <label for="FileUpload">File</label>\n' +
    '    <input class="form-control" type="text" id="FileUpload"\n' +
    '                  ng-model="FileSvc.item.src" disabled/>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="FileComment">Comment</label>\n' +
    '        <textarea type="text" class="form-control" id="FileComment"\n' +
    '                  ng-model="FileSvc.item.comment"></textarea>\n' +
    '</div>');
	a.put('views/file/create.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="FileCtrl">\n' +
    '            <form name="fileForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/file/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="fileCreateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!fileForm.$valid" id="fileCreateConfirm">\n' +
    '                        <i class="fa fa-check"></i> {{confirmText}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/account/resetpassword.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        Reset password\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <p>Please enter code from email and new password for you account</p>\n' +
    '                        <form ng-submit="AccountSvc.doResetpassword(code, password)" name="accountForm"\n' +
    '                              ng-init="code=AccountSvc.resetpasswordCode">\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="code">Code:</label>\n' +
    '                                <input type="text" class="form-control" name="code" id="code"\n' +
    '                                       placeholder="code from email"\n' +
    '                                       ng-model="code" required>\n' +
    '                                <span ng-show="accountForm.$submitted || accountForm.code.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!accountForm.code.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="password">New password:</label>\n' +
    '                                <input type="password" class="form-control" name="password" id="password"\n' +
    '                                       placeholder="new password"\n' +
    '                                       ng-model="password" required>\n' +
    '                                <span ng-show="accountForm.$submitted || accountForm.password.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!accountForm.password.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <button type="submit" class="btn btn btn-cta-secondary" ng-disabled="!accountForm.$valid"\n' +
    '                                    id="accountResetpassword">Save password and login\n' +
    '                                on site\n' +
    '                            </button>s\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="list description aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Additionally</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/account/additionally.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/reg.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        Registration form\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <form name="accountForm">\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="email">Email</label>\n' +
    '                                <input type="email" class="form-control" name="email" id="email"\n' +
    '                                       ng-model="AccountSvc.item.email" required>\n' +
    '                                        <span ng-show="accountForm.$submitted || accountForm.email.$touched"\n' +
    '                                              class="form-control-feedback"\n' +
    '                                              ng-class="!accountForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                              aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="password">Password</label>\n' +
    '                                <input type="password" class="form-control" name="password" id="password"\n' +
    '                                       ng-model="AccountSvc.item.password" required>\n' +
    '                                        <span ng-show="accountForm.$submitted || accountForm.password.$touched"\n' +
    '                                              class="form-control-feedback"\n' +
    '                                              ng-class="!accountForm.password.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                              aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <button ng-click="AccountSvc.doReg(AccountSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                    ng-disabled="!accountForm.$valid" id="accountReg">Create\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="list description aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Additionally</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/account/additionally.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/recovery.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        Recovery access\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <p>Please enter you email address used on registration</p>\n' +
    '                        <form ng-submit="AccountSvc.doRecovery(email)" name="accountForm">\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="email">Email:</label>\n' +
    '                                <input type="email" class="form-control" name="email" id="email" placeholder="email"\n' +
    '                                       ng-model="email" required>\n' +
    '                            <span ng-show="accountForm.$submitted || accountForm.email.$touched"\n' +
    '                                  class="form-control-feedback"\n' +
    '                                  ng-class="!accountForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                  aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <button type="submit" class="btn btn btn-cta-secondary" ng-disabled="!accountForm.$valid"\n' +
    '                                    id="accountRecovery"><i class="fa fa-envelope-o"></i> Sent link to reset password\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="list description aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Additionally</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/account/additionally.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/profile.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        Profile\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <form name="accountForm">\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="firstname">First name</label>\n' +
    '                                <input type="text" class="form-control" name="firstname" id="firstname"\n' +
    '                                       ng-model="AccountSvc.item.firstname">\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.firstname.$touched"\n' +
    '                          class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.firstname.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="lastname">Last name</label>\n' +
    '                                <input type="text" class="form-control" name="lastname" id="lastname"\n' +
    '                                       ng-model="AccountSvc.item.lastname">\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.lastname.$touched"\n' +
    '                          class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.lastname.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="username">Username</label>\n' +
    '                                <input type="text" class="form-control" name="username" id="username"\n' +
    '                                       ng-model="AccountSvc.item.username" required>\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.username.$touched"\n' +
    '                          class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.username.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="email">Email</label>\n' +
    '                                <input type="email" class="form-control" name="email" id="email"\n' +
    '                                       ng-model="AccountSvc.item.email" required>\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.email.$touched" class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="password">Password</label>\n' +
    '                                <input type="password" class="form-control" name="password" id="password"\n' +
    '                                       ng-model="AccountSvc.item.password"\n' +
    '                                       placeholder="if empty, the password will not be changed">\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.password.$touched"\n' +
    '                          class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.password.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <button ng-click="AccountSvc.doUpdate(AccountSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                    ng-disabled="!accountForm.$valid" id="accountSave">\n' +
    '                                <i class="fa fa-floppy-o"></i> Save\n' +
    '                            </button>\n' +
    '                            <button ng-click="AccountSvc.doDelete()" class="btn btn-cta-red" id="accountDelete"><i\n' +
    '                                    class="fa fa-trash"></i> Delete\n' +
    '                                account\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/login.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        Login on site\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <p>Please enter you email address and password for login on site</p>\n' +
    '                        <form ng-submit="AccountSvc.doLogin(email, password)" name="accountForm">\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="email">Email:</label>\n' +
    '                                <input type="email" class="form-control" name="email" id="email" placeholder="email"\n' +
    '                                       ng-model="email" required>\n' +
    '                                <span ng-show="accountForm.$submitted || accountForm.email.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!accountForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="password">Password:</label>\n' +
    '                                <input type="password" class="form-control" name="password" id="password"\n' +
    '                                       placeholder="password"\n' +
    '                                       ng-model="password" required>\n' +
    '                                <span ng-show="accountForm.$submitted || accountForm.password.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!accountForm.password.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <button type="submit" class="btn btn-cta-secondary" ng-disabled="!accountForm.$valid"\n' +
    '                                    id="accountLogin">\n' +
    '                                Login\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="list description aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Additionally</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/account/additionally.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only">Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '            <aside class="list tags aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading">Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/additionally.html', '<ul class="list-unstyled">\n' +
    '    <li ng-if="$routeParams.navId!=\'login\'"><i class="fa fa-link"></i> <a ng-href="/login">Login</a></li>\n' +
    '    <li ng-if="$routeParams.navId!=\'reg\'"><i class="fa fa-link"></i> <a ng-href="/reg">Registration</a></li>\n' +
    '    <li ng-if="$routeParams.navId!=\'recovery\'"><i class="fa fa-link"></i> <a ng-href="/recovery">Recovery password</a></li>\n' +
    '</ul>');
	a.put('views/search.html', '<div class="form-search search-only" ng-controller="NavbarCtrl" ng-if="!NavbarSvc.items.search.hidden">\n' +
    '    <div class="input-group">\n' +
    '        <input type="text" class="form-control search-query"\n' +
    '               placeholder="{{NavbarSvc.items.search.placeholder}}" ng-model="SearchSvc.searchText"\n' +
    '               ng-enter="SearchSvc.doSearch(SearchSvc.searchText)"/>\n' +
    '                                    <span class="input-group-btn">\n' +
    '                                        <button ng-click="SearchSvc.doSearch(SearchSvc.searchText)"\n' +
    '                                                class="btn btn-cta-secondary" type="button" id="searchNav">\n' +
    '                                            Search\n' +
    '                                        </button>\n' +
    '                                    </span>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/header.html', '<!-- ******HEADER****** -->\n' +
    '<header class="header" ng-controller="NavbarCtrl">\n' +
    '    <div class="container">\n' +
    '        <img class="profile-image cursor-pointer img-responsive img-circle pull-left" ng-src="{{AppConst.home.image}}"\n' +
    '             alt="{{AppConst.home.title}}" ng-if="AppConst.home.image" ng-click="NavbarSvc.goHome()"/>\n' +
    '        <div class="profile-content pull-left">\n' +
    '            <h1 class="name cursor-pointer" ng-bind-html="AppConst.home.title | unsafe" ng-click="NavbarSvc.goHome()"></h1>\n' +
    '            <h2 class="desc cursor-pointer" ng-bind-html="AppConst.home.description | unsafe" ng-click="NavbarSvc.goHome()"></h2>\n' +
    '            <ul class="social list-inline" ng-if="AppConst.home.social && AppConst.home.social.length>0">\n' +
    '                <li ng-class="$last ? \'last-item\' : \'\'"\n' +
    '                    ng-repeat="item in AppConst.home.social">\n' +
    '                    <a ng-href="{{item.url}}"><i class="" ng-class="item.iconClass"></i></a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div><!--//profile-->\n' +
    '        <div ng-repeat="item in NavbarSvc.items.right | orderBy:\'$index\':true" ng-if="!item.hidden">\n' +
    '            <a class="btn btn-cta-primary pull-right"\n' +
    '               ng-click="item.click()"\n' +
    '               ng-bind-html="item.title | unsafe" ng-if="!item.url" id="{{item.name+\'Nav\'}}"\n' +
    '               ng-class="item.active==true ? \'active\' : \'\'"></a>\n' +
    '            <a class="btn btn-cta-primary pull-right"\n' +
    '               ng-click="item.click()"\n' +
    '               ng-href="{{item.url}}" ng-bind-html="item.title | unsafe" ng-if="item.url" id="{{item.name+\'Nav\'}}"\n' +
    '               ng-class="item.active==true ? \'active\' : \'\'"></a>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-repeat="item in NavbarSvc.items.left | orderBy:\'$index\':true" ng-if="!item.hidden">\n' +
    '            <a class="btn btn-cta-primary pull-right"\n' +
    '               ng-click="item.click()"\n' +
    '               ng-bind-html="item.title | unsafe" ng-if="!item.url" id="{{item.name+\'Nav\'}}"\n' +
    '               ng-class="item.active==true ? \'active\' : \'\'"></a>\n' +
    '            <a class="btn btn-cta-primary pull-right"\n' +
    '               ng-click="item.click()"\n' +
    '               ng-href="{{item.url}}" ng-bind-html="item.title | unsafe" ng-if="item.url" id="{{item.name+\'Nav\'}}"\n' +
    '               ng-class="item.active==true ? \'active\' : \'\'"></a>\n' +
    '\n' +
    '        </div>\n' +
    '    </div><!--//container-->\n' +
    '</header><!--//header-->');
	a.put('views/footer.html', '<!-- ******FOOTER****** -->\n' +
    '<footer class="footer" ng-controller="NavbarCtrl">\n' +
    '    <div class="container text-center">\n' +
    '        <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you\'d like to use the template without the attribution, you can check out other license options via our website: themes.3rdwavemedia.com */-->\n' +
    '        <small class="copyright"><i class="fa fa-copyright"></i> {{AppConst.home.title}}\n' +
    '        </small>\n' +
    '    </div><!--//container-->\n' +
    '</footer><!--//footer-->\n' +
    '');
	a.put('views/empty.html', '');
	 }]);