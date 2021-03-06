angular.module("app").run(['$templateCache', function(a) { a.put('views/project/inputs/right.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="ItemName" translate>Name</label>\n' +
    '    <input type="text" class="form-control" id="ItemName" name="ItemName" ng-model="ProjectSvc.item.name" required>\n' +
    '    <span ng-show="projectForm.$submitted || projectForm.ItemName.$touched" class="form-control-feedback"\n' +
    '          ng-class="!projectForm.ItemName.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '          aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback">\n' +
    '    <label for="ItemType" translate>Type</label>\n' +
    '    <select class="form-control" id="ItemType" ng-model="ProjectSvc.item.type">\n' +
    '        <option ng-repeat="type in AppConst.project.types"\n' +
    '                ng-value="type.id"\n' +
    '                ng-bind-html="type.title | unsafe"\n' +
    '                ng-selected="ProjectSvc.item.type==type.id"></option>\n' +
    '    </select>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback">\n' +
    '    <label for="ItemTags" translate>Tags</label>\n' +
    '    <tags-input id="ItemTags" ng-model="ProjectSvc.item.tags" placeholder="{{ \'add tag\' | translate}}" min-length="1">\n' +
    '        <auto-complete source="TagSvc.searchTag($query)"></auto-complete>\n' +
    '    </tags-input>\n' +
    '</div>\n' +
    '<div data-nq-tabset="" data-tabset-model="ItemDescriptionTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group">\n' +
    '        <label for="ItemDescription_{{lang}}" translate>Description</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemDescription_{{lang}}" name="ItemDescription"\n' +
    '                              ng-model="ProjectSvc.item[\'description_\'+lang]" required></textarea>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
	a.put('views/project/inputs/central.html', '<div data-nq-tabset="" data-tabset-model="ItemDescriptionTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group has-feedback" show-errors>\n' +
    '        <label for="ItemTitle_{{lang}}" translate>Title</label>\n' +
    '        <input type="text" class="form-control" id="ItemTitle_{{lang}}" name="ItemTitle_{{lang}}" ng-model="ProjectSvc.item[\'title_\'+lang]"\n' +
    '               ng-change="ProjectSvc.slugName(ProjectSvc.item[\'title\'+lang])" required>\n' +
    '        <span ng-show="projectForm.$submitted || projectForm.ItemTitle.$touched" class="form-control-feedback"\n' +
    '              ng-class="!projectForm.ItemTitle.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '              aria-hidden="true"></span>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-if="ProjectSvc.item.type==1">\n' +
    '        <label for="ItemText_{{lang}}" translate>Text</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemText_{{lang}}"\n' +
    '                              ng-model="ProjectSvc.item[\'text_\'+lang]" rows="15"></textarea>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-if="ProjectSvc.item.type==2">\n' +
    '        <label for="ItemHtml_{{lang}}" translate>Html</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemHtml_{{lang}}"\n' +
    '                              ng-model="ProjectSvc.item[\'html_\'+lang]" rows="15"></textarea>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-if="ProjectSvc.item.type==3">\n' +
    '        <label for="ItemUrl_{{lang}}" translate>Url</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemUrl_{{lang}}"\n' +
    '                              ng-model="ProjectSvc.item[\'url_\'+lang]" rows="15"></textarea>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-if="ProjectSvc.item.type==4">\n' +
    '        <label for="ItemMarkdown_{{lang}}" translate>Markdown</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemMarkdown_{{lang}}"\n' +
    '                              ng-model="ProjectSvc.item[\'markdown_\'+lang]" rows="15"></textarea>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group" ng-repeat="image in ProjectSvc.item.images track by image.id">\n' +
    '    <label for="{{\'ItemImage\'+($index+1)}}" translate translate-n="($index+1)" translate-plural="Image {{$count}}"></label>\n' +
    '    <div class="input-group has-feedback">\n' +
    '        <input type="text" class="form-control" id="{{\'ItemImage\'+($index+1)}}"\n' +
    '               ng-model="image.src">\n' +
    '                        <span class="input-group-btn">\n' +
    '                            <button ng-click="FileSvc.showList(image)" class="btn btn-cta-default"\n' +
    '                                    type="button" id="{{\'projectSelect\'+$index+\'Image\'}}">\n' +
    '                                <i class="fa fa-check"></i> <translate>Select</translate>\n' +
    '                            </button>\n' +
    '                            <button ng-click="ProjectSvc.doDeleteImage($index)" class="btn btn-cta-red"\n' +
    '                                    type="button" id="{{\'projectDelete\'+$index+\'Image\'}}">\n' +
    '                                <i class="fa fa-trash"></i> <translate>Delete image</translate>\n' +
    '                            </button>\n' +
    '                        </span>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/post/inputs/right.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="ItemName" translate>Name</label>\n' +
    '    <input type="text" class="form-control" id="ItemName" name="ItemName" ng-model="PostSvc.item.name" required>\n' +
    '    <span ng-show="postForm.$submitted || postForm.ItemName.$touched" class="form-control-feedback"\n' +
    '          ng-class="!postForm.ItemName.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '          aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback">\n' +
    '    <label for="ItemType" translate>Type</label>\n' +
    '    <select class="form-control" id="ItemType" ng-model="PostSvc.item.type">\n' +
    '        <option ng-repeat="type in AppConst.post.types"\n' +
    '                ng-value="type.id"\n' +
    '                ng-bind-html="type.title | unsafe"\n' +
    '                ng-selected="PostSvc.item.type==type.id"></option>\n' +
    '    </select>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback">\n' +
    '    <label for="ItemTags" translate>Tags</label>\n' +
    '    <tags-input id="ItemTags" ng-model="PostSvc.item.tags" placeholder="{{ \'add tag\' | translate}}" min-length="1">\n' +
    '        <auto-complete source="TagSvc.searchTag($query)"></auto-complete>\n' +
    '    </tags-input>\n' +
    '</div>\n' +
    '<div data-nq-tabset="" data-tabset-model="ItemDescriptionTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group">\n' +
    '        <label for="ItemDescription_{{lang}}" translate>Description</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemDescription_{{lang}}" name="ItemDescription"\n' +
    '                              ng-model="PostSvc.item[\'description_\'+lang]" required></textarea>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
	a.put('views/post/inputs/central.html', '\n' +
    '<div data-nq-tabset="" data-tabset-model="ItemDescriptionTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group has-feedback" show-errors>\n' +
    '        <label for="ItemTitle_{{lang}}" translate>Title</label>\n' +
    '        <input type="text" class="form-control" id="ItemTitle_{{lang}}" name="ItemTitle_{{lang}}" ng-model="PostSvc.item[\'title_\'+lang]"\n' +
    '               ng-change="PostSvc.slugName(PostSvc.item[\'title\'+lang])" required>\n' +
    '        <span ng-show="postForm.$submitted || postForm.ItemTitle.$touched" class="form-control-feedback"\n' +
    '              ng-class="!postForm.ItemTitle.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '              aria-hidden="true"></span>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-if="PostSvc.item.type==1">\n' +
    '        <label for="ItemText_{{lang}}" translate>Text</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemText_{{lang}}"\n' +
    '                              ng-model="PostSvc.item[\'text_\'+lang]" rows="15"></textarea>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-if="PostSvc.item.type==2">\n' +
    '        <label for="ItemHtml_{{lang}}" translate>Html</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemHtml_{{lang}}"\n' +
    '                              ng-model="PostSvc.item[\'html_\'+lang]" rows="15"></textarea>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-if="PostSvc.item.type==3">\n' +
    '        <label for="ItemUrl_{{lang}}" translate>Url</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemUrl_{{lang}}"\n' +
    '                              ng-model="PostSvc.item[\'url_\'+lang]" rows="15"></textarea>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-if="PostSvc.item.type==4">\n' +
    '        <label for="ItemMarkdown_{{lang}}" translate>Markdown</label>\n' +
    '                    <textarea type="text" class="form-control" id="ItemMarkdown_{{lang}}"\n' +
    '                              ng-model="PostSvc.item[\'markdown_\'+lang]" rows="15"></textarea>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group" ng-repeat="image in PostSvc.item.images track by image.id">\n' +
    '    <label for="{{\'ItemImage\'+($index+1)}}" translate translate-n="($index+1)" translate-plural="Image {{$count}}"></label>\n' +
    '    <div class="input-group has-feedback">\n' +
    '        <input type="text" class="form-control" id="{{\'ItemImage\'+($index+1)}}"\n' +
    '               ng-model="image.src">\n' +
    '                        <span class="input-group-btn">\n' +
    '                            <button ng-click="FileSvc.showList(image)" class="btn btn-cta-default"\n' +
    '                                    type="button" id="{{\'postSelect\'+$index+\'Image\'}}">\n' +
    '                                <i class="fa fa-check"></i> <translate>Select</translate>\n' +
    '                            </button>\n' +
    '                            <button ng-click="PostSvc.doDeleteImage($index)" class="btn btn-cta-red"\n' +
    '                                    type="button" id="{{\'postDelete\'+$index+\'Image\'}}">\n' +
    '                                <i class="fa fa-trash"></i> <translate>Delete image</translate>\n' +
    '                            </button>\n' +
    '                        </span>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/tag/update.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="TagCtrl">\n' +
    '            <form name="tagForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/tag/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="tagUpdateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!tagForm.$valid" id="tagUpdateConfirm">\n' +
    '                        <i class="fa fa-floppy-o"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/tag/list.html', '<table class="table table-hover">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '        <th style="width:20px" translate>ID</th>\n' +
    '        <th translate>Text</th>\n' +
    '        <th translate>Description</th>\n' +
    '        <th class="text-right" style="width:200px" translate>Actions</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="item in TagSvc.list"\n' +
    '        ng-class="(TagSvc.item.id==item.id)?\'bold\':\'\'">\n' +
    '        <td ng-bind="item.id" ng-click="TagSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="item.text" ng-click="TagSvc.selectItem(item)"></td>\n' +
    '        <td class="break-word" ng-bind="item[\'description_\'+AppLang.getCurrent()]" ng-click="TagSvc.selectItem(item)"></td>\n' +
    '        <td class="text-right">\n' +
    '            <button ng-click="TagSvc.showUpdate(item)" class="btn btn-cta-default btn-xs" type="button"\n' +
    '                    id="{{\'tag\'+item.id+\'Update\'}}"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate>\n' +
    '            </button>\n' +
    '            <button ng-click="TagSvc.doDelete(item)" class="btn btn-cta-red btn-xs" type="button"\n' +
    '                    id="{{\'tag\'+item.id+\'Delete\'}}"><i class="fa fa-trash"></i> <translate>Delete</translate>\n' +
    '            </button>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>');
	a.put('views/manager/tag/list-header.html', '<span ng-bind="ManagerSvc.title"></span>\n' +
    '<button ng-click="TagSvc.showCreate()" class="btn btn-cta-secondary pull-right btn-xs"\n' +
    '        type="button" id="tagCreate">\n' +
    '    <i class="fa fa-plus"></i> <translate>Create</translate>\n' +
    '</button>');
	a.put('views/manager/tag/inputs.html', '<div class="form-group">\n' +
    '    <label for="TagText" translate>Text</label>\n' +
    '    <input type="text" class="form-control" id="TagText"\n' +
    '           ng-model="TagSvc.item.text"/>\n' +
    '</div>\n' +
    '<div data-nq-tabset="" data-tabset-model="TagDescriptionTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group">\n' +
    '        <label for="TagDescription_{{lang}}" translate>Description</label>\n' +
    '        <textarea class="form-control" id="TagDescription_{{lang}}"\n' +
    '                  ng-model="TagSvc.item[\'description_\'+lang]"></textarea>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
	a.put('views/manager/tag/create.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="TagCtrl">\n' +
    '            <form name="tagForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/tag/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="tagCreateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!tagForm.$valid" id="tagCreateConfirm">\n' +
    '                        <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/public_link/update.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="PublicLinkCtrl">\n' +
    '            <form name="public_linkForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/public_link/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="public_linkUpdateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!public_linkForm.$valid" id="public_linkUpdateConfirm">\n' +
    '                        <i class="fa fa-floppy-o"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/public_link/list.html', '<table class="table table-hover">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '        <th style="width:20px" translate>ID</th>\n' +
    '        <th translate>Icon</th>\n' +
    '        <th translate>Title</th>\n' +
    '        <th translate>In header</th>\n' +
    '        <th translate>In contact</th>\n' +
    '        <th translate>In footer</th>\n' +
    '        <th class="text-right" style="width:200px" translate>Actions</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="item in PublicLinkSvc.list | orderBy:\'position\'"\n' +
    '        ng-class="(PublicLinkSvc.item.id==item.id)?\'bold\':\'\'">\n' +
    '        <td ng-bind="item.id" ng-click="PublicLinkSvc.selectItem(item)"></td>\n' +
    '        <td ng-click="PublicLinkSvc.selectItem(item)">\n' +
    '            <i class="{{(item.icon==\'\')?\'fa\':item.icon}}"></i>\n' +
    '        </td>\n' +
    '        <td class="break-word" ng-bind="item[\'title_\'+AppLang.getCurrent()]" ng-click="PublicLinkSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="(item.in_header==1)?\'Yes\':\'No\'" ng-click="PublicLinkSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="(item.in_contact)?\'Yes\':\'No\'" ng-click="PublicLinkSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="(item.in_footer)?\'Yes\':\'No\'" ng-click="PublicLinkSvc.selectItem(item)"></td>\n' +
    '        <td class="text-right">\n' +
    '            <button ng-click="PublicLinkSvc.showUpdate(item)" class="btn btn-cta-default btn-xs" type="button"\n' +
    '                    id="{{\'public_link\'+item.id+\'Update\'}}"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate>\n' +
    '            </button>\n' +
    '            <button ng-click="PublicLinkSvc.doDelete(item)" class="btn btn-cta-red btn-xs" type="button"\n' +
    '                    id="{{\'public_link\'+item.id+\'Delete\'}}"><i class="fa fa-trash"></i> <translate>Delete</translate>\n' +
    '            </button>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>');
	a.put('views/manager/public_link/list-header.html', '<span ng-bind="ManagerSvc.title"></span>\n' +
    '<button ng-click="PublicLinkSvc.showCreate()" class="btn btn-cta-secondary pull-right btn-xs"\n' +
    '        type="button" id="public_linkCreate">\n' +
    '    <i class="fa fa-plus"></i> <translate>Create</translate>\n' +
    '</button>');
	a.put('views/manager/public_link/inputs.html', '<div class="form-group">\n' +
    '    <label for="PublicLinkSrc" translate>Src</label>\n' +
    '    <input class="form-control" type="text" id="PublicLinkSrc" ng-model="PublicLinkSvc.item.src"/>\n' +
    '</div>\n' +
    '<div data-nq-tabset="" data-tabset-model="PublicLinkTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group">\n' +
    '        <label for="PublicLinkTitle_{{lang}}" translate>Title</label>\n' +
    '        <input type="text" class="form-control" id="PublicLinkTitle_{{lang}}"\n' +
    '               ng-model="PublicLinkSvc.item[\'title_\'+lang]"/>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '        <label for="PublicLinkDescription_{{lang}}" translate>Description</label>\n' +
    '        <textarea class="form-control" id="PublicLinkDescription_{{lang}}"\n' +
    '                  ng-model="PublicLinkSvc.item[\'description_\'+lang]"></textarea>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="PublicLinkIcon" translate>Icon</label>\n' +
    '    <div class="input-group">\n' +
    '        <input type="text" class="form-control" id="PublicLinkIcon"\n' +
    '               ng-model="PublicLinkSvc.item.icon"/>\n' +
    '        <span class="input-group-btn">\n' +
    '            <button ng-click="IconsSvc.showList(PublicLinkSvc.item.icon)"\n' +
    '                    class="btn btn-cta-secondary" type="button" id="publicLinkSelectIcon">\n' +
    '                <i class="{{(PublicLinkSvc.item.icon==\'\')?\'fa\':PublicLinkSvc.item.icon}}"></i>\n' +
    '            </button>\n' +
    '        </span>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="PublicLinkPosition" translate>Position</label>\n' +
    '    <input class="form-control" type="text" id="PublicLinkPosition" ng-model="PublicLinkSvc.item.position"/>\n' +
    '</div>\n' +
    '<div class="checkbox">\n' +
    '    <label>\n' +
    '        <input type="checkbox" ng-model="PublicLinkSvc.item.in_header" ng-true-value="1" ng-false-value="0"> <translate>In header</translate>\n' +
    '    </label>\n' +
    '</div>\n' +
    '<div class="checkbox">\n' +
    '    <label>\n' +
    '        <input type="checkbox" ng-model="PublicLinkSvc.item.in_contact" ng-true-value="1" ng-false-value="0"> <translate>In contact</translate>\n' +
    '    </label>\n' +
    '</div>\n' +
    '<div class="checkbox">\n' +
    '    <label>\n' +
    '        <input type="checkbox" ng-model="PublicLinkSvc.item.in_footer" ng-true-value="1" ng-false-value="0"> <translate>In footer</translate>\n' +
    '    </label>\n' +
    '</div>');
	a.put('views/manager/public_link/create.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="PublicLinkCtrl">\n' +
    '            <form name="public_linkForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/public_link/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="public_linkCreateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!public_linkForm.$valid" id="public_linkCreateConfirm">\n' +
    '                        <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/properties/update.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="PropertiesCtrl">\n' +
    '            <form name="propertiesForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/properties/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="propertiesUpdateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!propertiesForm.$valid" id="propertiesUpdateConfirm">\n' +
    '                        <i class="fa fa-floppy-o"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/properties/list.html', '<table class="table table-hover">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '        <th style="width:20px" translate>ID</th>\n' +
    '        <th translate>Name</th>\n' +
    '        <th translate>Value</th>\n' +
    '        <th class="text-right" style="width:200px" translate>Actions</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="item in PropertiesSvc.list"\n' +
    '        ng-class="(PropertiesSvc.item.id==item.id)?\'bold\':\'\'">\n' +
    '        <td ng-bind="item.id" ng-click="PropertiesSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="item.name" ng-click="PropertiesSvc.selectItem(item)"></td>\n' +
    '        <td class="break-word" ng-bind="item[\'value_\'+AppLang.getCurrent()]" ng-click="PropertiesSvc.selectItem(item)"></td>\n' +
    '        <td class="text-right">\n' +
    '            <button ng-click="PropertiesSvc.showUpdate(item)" class="btn btn-cta-default btn-xs" type="button"\n' +
    '                    id="{{\'properties\'+item.id+\'Update\'}}"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate>\n' +
    '            </button>\n' +
    '            <button ng-click="PropertiesSvc.doDelete(item)" class="btn btn-cta-red btn-xs" type="button"\n' +
    '                    id="{{\'properties\'+item.id+\'Delete\'}}" ng-if="item.only_update==0"><i class="fa fa-trash"></i> <translate>Delete</translate>\n' +
    '            </button>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>');
	a.put('views/manager/properties/list-header.html', '<span ng-bind="ManagerSvc.title"></span>\n' +
    '<div class="pull-right">\n' +
    '    <button ng-click="PropertiesSvc.applyOnSite.do()" class="btn btn-cta-primary btn-xs"\n' +
    '            type="button" id="PropertiesApply" ng-disabled="PropertiesSvc.applyOnSite.disabled" >\n' +
    '        <i class="fa fa-check"></i> <span ng-bind="PropertiesSvc.applyOnSite.title"></span>\n' +
    '    </button>\n' +
    '    <button ng-click="PropertiesSvc.showCreate()" class="btn btn-cta-secondary btn-xs"\n' +
    '            type="button" id="propertiesCreate">\n' +
    '        <i class="fa fa-plus"></i> <translate>Create</translate>\n' +
    '    </button>\n' +
    '</div>');
	a.put('views/manager/properties/inputs.html', '<div class="form-group">\n' +
    '    <label for="PropertiesName" translate>Name</label>\n' +
    '    <input class="form-control" type="text" id="PropertiesName" ng-model="PropertiesSvc.item.name" ng-disabled="PropertiesSvc.item.only_update==1"/>\n' +
    '</div>\n' +
    '\n' +
    '<div data-nq-tabset="" data-tabset-model="PropertiesCommentTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group">\n' +
    '        <label for="PropertiesValue_{{lang}}" translate>Value</label>\n' +
    '        <textarea class="form-control" id="PropertiesValue_{{lang}}"\n' +
    '                  ng-model="PropertiesSvc.item[\'value_\'+lang]"></textarea>\n' +
    '    </div>\n' +
    '    <button ng-click="FileSvc.showList(PropertiesSvc.item[\'value_\'+lang])" class="btn btn-cta-default btn-block"\n' +
    '            type="button">\n' +
    '        <i class="fa fa-check"></i> <translate>Select file</translate>\n' +
    '    </button>\n' +
    '    <div class="form-group">\n' +
    '        <label for="PropertiesComment_{{lang}}" translate>Comment</label>\n' +
    '        <textarea class="form-control" id="PropertiesComment_{{lang}}"\n' +
    '                  ng-model="PropertiesSvc.item[\'comment_\'+lang]" ng-disabled="PropertiesSvc.item.only_update==1"></textarea>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
	a.put('views/manager/properties/create.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="PropertiesCtrl">\n' +
    '            <form name="propertiesForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/properties/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="propertiesCreateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!propertiesForm.$valid" id="propertiesCreateConfirm">\n' +
    '                        <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/meta_tag/update.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="MetaTagCtrl">\n' +
    '            <form name="meta_tagForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/meta_tag/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="meta_tagUpdateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!meta_tagForm.$valid" id="meta_tagUpdateConfirm">\n' +
    '                        <i class="fa fa-floppy-o"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/meta_tag/list.html', '<table class="table table-hover">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '        <th style="width:20px" translate>ID</th>\n' +
    '        <th translate>Name</th>\n' +
    '        <th translate>Content</th>\n' +
    '        <th class="text-right" style="width:200px" translate>Actions</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="item in MetaTagSvc.list | orderBy:\'position\'"\n' +
    '        ng-class="(MetaTagSvc.item.id==item.id)?\'bold\':\'\'">\n' +
    '        <td ng-bind="item.id" ng-click="MetaTagSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="item.name" ng-click="MetaTagSvc.selectItem(item)"></td>\n' +
    '        <td class="break-word" ng-bind="item[\'content_\'+AppLang.getCurrent()]" ng-click="MetaTagSvc.selectItem(item)"></td>\n' +
    '        <td class="text-right">\n' +
    '            <button ng-click="MetaTagSvc.showUpdate(item)" class="btn btn-cta-default btn-xs" type="button"\n' +
    '                    id="{{\'meta_tag\'+item.id+\'Update\'}}"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate>\n' +
    '            </button>\n' +
    '            <button ng-click="MetaTagSvc.doDelete(item)" class="btn btn-cta-red btn-xs" type="button"\n' +
    '                    id="{{\'meta_tag\'+item.id+\'Delete\'}}"><i class="fa fa-trash"></i> <translate>Delete</translate>\n' +
    '            </button>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>');
	a.put('views/manager/meta_tag/list-header.html', '<span ng-bind="ManagerSvc.title"></span>\n' +
    '<button ng-click="MetaTagSvc.showCreate()" class="btn btn-cta-secondary pull-right btn-xs"\n' +
    '        type="button" id="meta_tagCreate">\n' +
    '    <i class="fa fa-plus"></i> <translate>Create</translate>\n' +
    '</button>');
	a.put('views/manager/meta_tag/inputs.html', '<div class="form-group">\n' +
    '    <label for="MetaTagName" translate>Name</label>\n' +
    '    <input class="form-control" type="text" id="MetaTagName" ng-model="MetaTagSvc.item.name"/>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="MetaTagPosition" translate>Position</label>\n' +
    '    <input class="form-control" type="text" id="MetaTagPosition" ng-model="MetaTagSvc.item.position"/>\n' +
    '</div>\n' +
    '<div data-nq-tabset="" data-tabset-model="MetaTagTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group">\n' +
    '        <label for="MetaTagContent_{{lang}}" translate>Content</label>\n' +
    '        <input type="text" class="form-control" id="MetaTagContent_{{lang}}"\n' +
    '               ng-model="MetaTagSvc.item[\'content_\'+lang]"/>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '        <label for="MetaTagAttributes_{{lang}}" translate>Attributes</label>\n' +
    '        <input type="text" class="form-control" id="MetaTagAttributes_{{lang}}"\n' +
    '               ng-model="MetaTagSvc.item[\'attributes_\'+lang]"/>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
	a.put('views/manager/meta_tag/create.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="MetaTagCtrl">\n' +
    '            <form name="meta_tagForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/meta_tag/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="meta_tagCreateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!meta_tagForm.$valid" id="meta_tagCreateConfirm">\n' +
    '                        <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/html_cache/update.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="HtmlCacheCtrl">\n' +
    '            <form name="html_cacheForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/html_cache/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="html_cacheUpdateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!html_cacheForm.$valid" id="html_cacheUpdateConfirm">\n' +
    '                        <i class="fa fa-floppy-o"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/html_cache/list.html', '<table class="table table-hover">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '        <td style="width:10px"><input type="checkbox" ng-model="CHECKED" ng-click="HtmlCacheSvc.doCheckAll(CHECKED)" ng-true-value="true" ng-false-value="false"></td>\n' +
    '        <th style="width:20px" translate>ID</th>\n' +
    '        <th style="width:200px" translate>Name</th>\n' +
    '        <th translate>Empty</th>\n' +
    '        <th class="text-right" style="width:200px" translate>Actions</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="item in HtmlCacheSvc.list | orderBy:\'position\'"\n' +
    '        ng-class="(HtmlCacheSvc.item.id==item.id)?\'bold\':\'\'">\n' +
    '        <td><input type="checkbox" ng-model="item.CHECKED" ng-click="HtmlCacheSvc.collectCheckedItems()" ng-true-value="true" ng-false-value="false"></td>\n' +
    '        <td ng-bind="item.id" ng-click="HtmlCacheSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="item.url" ng-click="HtmlCacheSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="item.content==\'\'?\'Yes\':\'No\'" ng-click="HtmlCacheSvc.selectItem(item)"></td>\n' +
    '        <td class="text-right">\n' +
    '            <button ng-click="HtmlCacheSvc.showUpdate(item)" class="btn btn-cta-default btn-xs" type="button"\n' +
    '                    id="{{\'html_cache\'+item.id+\'Update\'}}"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate>\n' +
    '            </button>\n' +
    '            <button ng-click="HtmlCacheSvc.doDelete(item)" class="btn btn-cta-red btn-xs" type="button"\n' +
    '                    id="{{\'html_cache\'+item.id+\'Delete\'}}"><i class="fa fa-trash"></i> <translate>Delete</translate>\n' +
    '            </button>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>');
	a.put('views/manager/html_cache/list-header.html', '<span ng-bind="ManagerSvc.title"></span>\n' +
    '<div class="pull-right">\n' +
    '    <button ng-click="HtmlCacheSvc.doDeleteChecked()" class="btn btn-cta-red btn-xs"\n' +
    '            type="button" id="doDeleteChecked" ng-disabled="HtmlCacheSvc.scanSitemap.disabled" ng-if="HtmlCacheSvc.checkeds.length>0">\n' +
    '        <i class="fa fa-trash"></i> <translate>Delete checked</translate>\n' +
    '    </button>\n' +
    '    <button ng-click="HtmlCacheSvc.doScanSitemap()" class="btn btn-cta-secondary btn-xs"\n' +
    '            type="button" id="html_cacheScanSitemap" ng-disabled="ScanSitemapSvc.disabled" >\n' +
    '        <i class="fa fa-globe"></i> <span ng-bind="ScanSitemapSvc.title"></span>\n' +
    '    </button>\n' +
    '</div>');
	a.put('views/manager/html_cache/inputs.html', '<div class="form-group">\n' +
    '    <label for="HtmlCacheUrl" translate>Name</label>\n' +
    '    <input class="form-control" type="text" id="HtmlCacheUrl" ng-model="HtmlCacheSvc.item.url"/>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="HtmlCacheContent" translate>Content</label>\n' +
    '    <textarea class="form-control" id="HtmlCacheContent"\n' +
    '              ng-model="HtmlCacheSvc.item.content"></textarea>\n' +
    '</div>');
	a.put('views/manager/html_cache/create.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="HtmlCacheCtrl">\n' +
    '            <form name="html_cacheForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/manager/html_cache/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="html_cacheCreateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!html_cacheForm.$valid" id="html_cacheCreateConfirm">\n' +
    '                        <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/account/user_app/update.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="UserAppCtrl">\n' +
    '            <form name="user_appForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/account/user_app/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="user_appUpdateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!user_appForm.$valid" id="user_appUpdateConfirm">\n' +
    '                        <i class="fa fa-floppy-o"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/account/user_app/list.html', '<table class="table table-hover">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '        <th style="width:20px" translate>ID</th>\n' +
    '        <th translate>Name</th>\n' +
    '        <th translate>Client ID</th>\n' +
    '        <th class="text-right" style="width:200px" translate>Actions</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="item in UserAppSvc.list | orderBy:\'position\'"\n' +
    '        ng-class="(UserAppSvc.item.id==item.id)?\'bold\':\'\'">\n' +
    '        <td ng-bind="item.id" ng-click="UserAppSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="item.name" ng-click="UserAppSvc.selectItem(item)"></td>\n' +
    '        <td class="break-word" ng-bind="item.client_id" ng-click="UserAppSvc.selectItem(item)"></td>\n' +
    '        <td class="text-right">\n' +
    '            <button ng-click="UserAppSvc.showUpdate(item)" class="btn btn-cta-default btn-xs" type="button"\n' +
    '                    id="{{\'user_app\'+item.id+\'Update\'}}"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate>\n' +
    '            </button>\n' +
    '            <button ng-click="UserAppSvc.doDelete(item)" class="btn btn-cta-red btn-xs" type="button"\n' +
    '                    id="{{\'user_app\'+item.id+\'Delete\'}}"><i class="fa fa-trash"></i> <translate>Delete</translate>\n' +
    '            </button>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>');
	a.put('views/account/user_app/list-header.html', '<span ng-bind="AccountSvc.title"></span>\n' +
    '<button ng-click="UserAppSvc.showCreate()" class="btn btn-cta-secondary pull-right btn-xs"\n' +
    '        type="button" id="user_appCreate">\n' +
    '    <i class="fa fa-plus"></i> <translate>Create</translate>\n' +
    '</button>');
	a.put('views/account/user_app/inputs.html', '<div class="form-group">\n' +
    '    <label for="UserAppName" translate>Name</label>\n' +
    '    <input class="form-control" type="text" id="UserAppName" ng-model="UserAppSvc.item.name"/>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="UserAppClientId" translate>Client ID</label>\n' +
    '    <input type="text" class="form-control" id="UserAppClientId"\n' +
    '           ng-model="UserAppSvc.item.client_id" disabled/>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="UserAppClientSecret" translate>Client secret</label>\n' +
    '    <input type="text" class="form-control" id="UserAppClientSecret"\n' +
    '           ng-model="UserAppSvc.item.client_secret" disabled/>\n' +
    '</div>\n' +
    '<div class="form-group">\n' +
    '    <label for="UserAppClientRedirectUris" translate>Redirect uris</label>\n' +
    '    <input type="text" class="form-control" id="UserAppClientRedirectUris"\n' +
    '           ng-model="UserAppSvc.item.redirect_uris" placeholder="{{ \'allowed URIs list, space separated\' | translate}}"/>\n' +
    '</div>');
	a.put('views/account/user_app/create.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="UserAppCtrl">\n' +
    '            <form name="user_appForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/account/user_app/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="user_appCreateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!user_appForm.$valid" id="user_appCreateConfirm">\n' +
    '                        <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/account/reset/inputs.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="code" translate>Code:</label>\n' +
    '    <input type="text" class="form-control" name="code" id="code"\n' +
    '           placeholder="{{ \'enter code from email\' | translate}}"\n' +
    '           ng-model="AccountSvc.item.code" required>\n' +
    '                                <span ng-show="accountForm.$submitted || accountForm.code.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!accountForm.code.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="password" translate>New password:</label>\n' +
    '    <input type="password" class="form-control" name="password" id="password"\n' +
    '           placeholder="{{ \'enter new password\' | translate}}"\n' +
    '           ng-model="AccountSvc.item.password" required>\n' +
    '                                <span ng-show="accountForm.$submitted || accountForm.password.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!accountForm.password.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '</div>');
	a.put('views/account/reg/inputs.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="email" translate>Email</label>\n' +
    '    <input type="email" class="form-control" name="email" id="email"\n' +
    '           ng-model="AccountSvc.item.email" required>\n' +
    '                                        <span ng-show="accountForm.$submitted || accountForm.email.$touched"\n' +
    '                                              class="form-control-feedback"\n' +
    '                                              ng-class="!accountForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                              aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="password" translate>Password</label>\n' +
    '    <input type="password" class="form-control" name="password" id="password"\n' +
    '           ng-model="AccountSvc.item.password" required>\n' +
    '                                        <span ng-show="accountForm.$submitted || accountForm.password.$touched"\n' +
    '                                              class="form-control-feedback"\n' +
    '                                              ng-class="!accountForm.password.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                              aria-hidden="true"></span>\n' +
    '</div>');
	a.put('views/account/recovery/inputs.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="email" translate>Email:</label>\n' +
    '    <input type="email" class="form-control" name="email" id="email" placeholder="{{ \'enter you email\' |  translate}}"\n' +
    '           ng-model="AccountSvc.item.email" required>\n' +
    '                            <span ng-show="accountForm.$submitted || accountForm.email.$touched"\n' +
    '                                  class="form-control-feedback"\n' +
    '                                  ng-class="!accountForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                  aria-hidden="true"></span>\n' +
    '</div>');
	a.put('views/account/profile/inputs.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="firstname" translate>First name</label>\n' +
    '    <input type="text" class="form-control" name="firstname" id="firstname"\n' +
    '           ng-model="ProfileSvc.item.firstname">\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.firstname.$touched"\n' +
    '                          class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.firstname.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="lastname" translate>Last name</label>\n' +
    '    <input type="text" class="form-control" name="lastname" id="lastname"\n' +
    '           ng-model="ProfileSvc.item.lastname">\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.lastname.$touched"\n' +
    '                          class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.lastname.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="username" translate>Username</label>\n' +
    '    <input type="text" class="form-control" name="username" id="username"\n' +
    '           ng-model="ProfileSvc.item.username" required>\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.username.$touched"\n' +
    '                          class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.username.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="email" translate>Email</label>\n' +
    '    <input type="email" class="form-control" name="email" id="email"\n' +
    '           ng-model="ProfileSvc.item.email" required>\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.email.$touched" class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="password" translate>Password</label>\n' +
    '    <input type="password" class="form-control" name="password" id="password"\n' +
    '           ng-model="ProfileSvc.item.password"\n' +
    '           placeholder="{{ \'if empty, the password will not be changed\' | translate}}">\n' +
    '                    <span ng-show="accountForm.$submitted || accountForm.password.$touched"\n' +
    '                          class="form-control-feedback"\n' +
    '                          ng-class="!accountForm.password.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                          aria-hidden="true"></span>\n' +
    '</div>');
	a.put('views/account/login/inputs.html', '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="email" translate>Email:</label>\n' +
    '    <input type="email" class="form-control" name="email" id="email" placeholder="{{\'enter you email\' | translate}}"\n' +
    '           ng-model="AccountSvc.item.email" required>\n' +
    '                                <span ng-show="accountForm.$submitted || accountForm.email.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!accountForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '</div>\n' +
    '<div class="form-group has-feedback" show-errors>\n' +
    '    <label for="password" translate>Password:</label>\n' +
    '    <input type="password" class="form-control" name="password" id="password"\n' +
    '           placeholder="{{ \'enter you password\' | translate}}"\n' +
    '           ng-model="AccountSvc.item.password" required>\n' +
    '                                <span ng-show="accountForm.$submitted || accountForm.password.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!accountForm.password.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '</div>');
	a.put('views/tag/list.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-bind-html="TagSvc.description | unsafe">\n' +
    '                    </h1>\n' +
    '                    <div class="content" ng-if="TagSvc.allListSumSize==0" ng-bind="TagSvc.status">\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '            <div ng-repeat="allItem in TagSvc.allList" ng-if="TagSvc.allListSumSize>0">\n' +
    '                <section class="latest section" ng-if="allItem.name==\'project\' && allItem.list.length>0">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading" ng-include="\'views/project/list-header.html\'">\n' +
    '                        </h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/tag/list-projects.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </section><!--//section-->\n' +
    '                <section class="latest section" ng-if="allItem.name==\'post\' && allItem.list.length>0">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading" ng-include="\'views/post/list-header.html\'">\n' +
    '                        </h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/tag/list-posts.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </section><!--//section-->\n' +
    '            </div>\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/home/sidebar.html\'" ng-controller="SidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/tag/list-projects.html', '<div class="item row" ng-repeat="item in allItem.list | limitTo:ProjectSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/project/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="{{AppLang.getUrlPrefix()+\'/project\'}}"><translate>All projects</translate> <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/tag/list-posts.html', '<div class="item row" ng-repeat="item in allItem.list | limitTo:PostSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/post/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="{{AppLang.getUrlPrefix()+\'/post\'}}"><translate>All posts</translate> <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/search/list.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-bind-html="SearchSvc.description | unsafe">\n' +
    '                    </h1>\n' +
    '                    <div class="content" ng-if="SearchSvc.allListSumSize==0" ng-bind="SearchSvc.status">\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '            <div ng-repeat="allItem in SearchSvc.allList" ng-if="SearchSvc.allListSumSize>0">\n' +
    '                <section class="latest section" ng-if="allItem.name==\'project\' && allItem.list.length>0">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading" ng-include="\'views/project/list-header.html\'">\n' +
    '                        </h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/tag/list-projects.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </section><!--//section-->\n' +
    '                <section class="latest section" ng-if="allItem.name==\'post\' && allItem.list.length>0">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading" ng-include="\'views/post/list-header.html\'">\n' +
    '                        </h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/tag/list-posts.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </section><!--//section-->\n' +
    '            </div>\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/home/sidebar.html\'" ng-controller="SidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/search/list-projects.html', '<div class="item row" ng-repeat="item in allItem.list | limitTo:ProjectSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/project/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="{{AppLang.getUrlPrefix()+\'/project\'}}"><translate>All projects</translate> <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/search/list-posts.html', '<div class="item row" ng-repeat="item in allItem.list | limitTo:PostSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/post/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="{{AppLang.getUrlPrefix()+\'/post\'}}"><translate>All posts</translate> <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/project/update.html', '<div ng-include="\'views/not-access.html\'" ng-if="!AccountSvc.isAdmin()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="AccountSvc.isAdmin()">\n' +
    '    <form name="projectForm">\n' +
    '        <div class="row">\n' +
    '            <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '                <section class="latest section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h1 class="heading">\n' +
    '                            <span translate>Edit project</span>\n' +
    '                            <a ng-href="{{AppLang.getUrlPrefix()+\'/project/\'+ProjectSvc.item.name}}"\n' +
    '                               class="btn btn-cta-default pull-right btn-xs"\n' +
    '                               id="projectUpdate"><i class="fa fa-eye"></i> <translate>View</translate></a>\n' +
    '                        </h1>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/project/inputs/central.html\'"></div>\n' +
    '                            <div>\n' +
    '                                <button ng-click="ProjectSvc.doUpdate(ProjectSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                        ng-disabled="!projectForm.$valid" id="projectSave">\n' +
    '                                    <i class="fa fa-floppy-o"></i> <translate>Save</translate>\n' +
    '                                </button>\n' +
    '                                <button ng-click="ProjectSvc.doDelete(ProjectSvc.item)" class="btn btn-cta-red"\n' +
    '                                        id="projectDelete">\n' +
    '                                    <i class="fa fa-trash"></i> <translate>Delete project</translate>\n' +
    '                                </button>\n' +
    '                                <button ng-click="ProjectSvc.doAddImage()" class="btn btn-cta-default pull-right"\n' +
    '                                        id="projectAddImage">\n' +
    '                                    <i class="fa fa-plus"></i> <translate>Add image</translate>\n' +
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
    '                        <h2 class="heading" translate>Additionally</h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/project/inputs/right.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </aside><!--//section-->\n' +
    '\n' +
    '                <aside class="info aside section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading sr-only" translate>Search</h2>\n' +
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
	a.put('views/project/sidebar.html', '<aside class="info aside section">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading sr-only" translate>Search</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/search.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//aside-->\n' +
    '\n' +
    '<aside class="list tags aside section">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading" translate>Tags</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//section-->');
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
    '            <div ng-include="\'views/project/sidebar.html\'"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/project/list-item.html', '<a class="col-md-4 col-sm-4 col-xs-12" ng-href="{{AppLang.getUrlPrefix()+\'/project/\'+item.name}}" ng-if="item.images.length>0">\n' +
    '    <img class="img-responsive project-image" ng-src="{{item.images[0].src_thumbnail_url}}"\n' +
    '         ng-if="item.images.length>0"\n' +
    '         alt="{{item[\'title_\'+AppLang.getCurrent()]}}"/>\n' +
    '</a>\n' +
    '<div class="desc col-xs-12" ng-class="item.images.length>0?\'col-md-8 col-sm-8\':\'col-md-12 col-sm-12\'">\n' +
    '    <div class="pull-right">\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/project/update/\'+item.name}}"\n' +
    '           class="btn btn-cta-default btn-xs" ng-if="AccountSvc.isAdmin()"\n' +
    '           id="{{\'project\'+$index+\'Update\'}}">\n' +
    '            <i class="fa fa-pencil-square-o"></i>\n' +
    '            <span class="hidden-xs" translate>Edit</span>\n' +
    '        </a>\n' +
    '        <a ng-click="ProjectSvc.doDelete(item)" class="btn btn-cta-red btn-xs"\n' +
    '           id="projectDelete" ng-if="AccountSvc.isAdmin()">\n' +
    '            <i class="fa fa-trash"></i>\n' +
    '            <span class="hidden-xs" translate>Delete</span>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '    <h3 class="title">\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/project/\'+item.name}}" ng-bind-html="item[\'title_\'+AppLang.getCurrent()] | unsafe"></a>\n' +
    '    </h3>\n' +
    '    <p ng-bind-html="item[\'description_\'+AppLang.getCurrent()] | unsafe"></p>\n' +
    '    <p ng-if="item.tags.length>0">\n' +
    '        <span ng-repeat="tag in item.tags">\n' +
    '            <i class="fa fa-tag"></i>\n' +
    '            <a class="list-link" ng-href="{{\'/tag/\'+tag.text}}"\n' +
    '               ng-bind="tag.text"></a>\n' +
    '        </span>\n' +
    '    </p>\n' +
    '    <p>\n' +
    '        <a class="more-link" ng-href="{{AppLang.getUrlPrefix()+\'/project/\'+item.name}}" id="{{\'project\'+$index+\'Detail\'}}"><i\n' +
    '                class="fa fa-link"></i> <translate>Detail...</translate></a>\n' +
    '    </p>\n' +
    '</div><!--//desc-->\n' +
    '<div class="desc col-md-12 col-sm-12 col-xs-12">\n' +
    '    <hr class="divider" ng-if="!$last"/>\n' +
    '</div><!--//desc-->');
	a.put('views/project/list-header.html', '<span ng-bind-html="ProjectSvc.title | unsafe"></span>\n' +
    '<a ng-href="{{AppLang.getUrlPrefix()+\'/project/create\'}}"\n' +
    '   class="btn btn-cta-secondary pull-right btn-xs" ng-if="AccountSvc.isAdmin()" id="projectCreate"><i class="fa fa-plus"></i>  <translate>Create</translate></a>');
	a.put('views/project/item.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        <span ng-bind-html="ProjectSvc.item[\'title_\'+AppLang.getCurrent()] | unsafe"></span>\n' +
    '                        <a ng-href="{{AppLang.getUrlPrefix()+\'/project/update/\'+ProjectSvc.item.name}}"\n' +
    '                           class="btn btn-cta-secondary pull-right btn-xs" ng-if="AccountSvc.isAdmin()" id="projectUpdate"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate></a>\n' +
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
    '                    <h2 class="heading" translate>Description</h2>\n' +
    '                    <div class="content">\n' +
    '                        <span ng-bind-html="ProjectSvc.item[\'description_\'+AppLang.getCurrent()] | unsafe"></span>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="list tags aside section" ng-if="ProjectSvc.item.tags.length>0">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading" translate>Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/project/item-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only" translate>Search</h2>\n' +
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
    '    <li ng-repeat="tag in ProjectSvc.item.tags"><i class="fa fa-tag"></i> <a ng-href="{{AppLang.getUrlPrefix()+\'/tag/\'+tag.text}}"\n' +
    '                                                                             ng-bind="tag.text"></a></li>\n' +
    '</ul>');
	a.put('views/project/item-content.html', '<div ng-if="ProjectSvc.item.images.length>0">\n' +
    '    <div class="desc col-md-12 col-sm-12 col-xs-12">\n' +
    '        <div ng-if="ProjectSvc.item.images.length==1">\n' +
    '            <img ng-src="{{ProjectSvc.item.images[0].src_url}}"\n' +
    '                 class="img-responsive"/>\n' +
    '        </div>\n' +
    '        <div ng-if="ProjectSvc.item.images.length>1">\n' +
    '            <div data-nq-carousel="">\n' +
    '                <div data-carousel-item="" ng-repeat="image in ProjectSvc.item.images">\n' +
    '                    <!--h3 class="carousel-title" nf-if="image.title!=\'\'"\n' +
    '                        ng-bind-html="image.title | unsafe"></h3-->\n' +
    '                    <img ng-src="{{image.src_url}}">\n' +
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
    '    <div ng-if="ProjectSvc.item.type==1 && ProjectSvc.item[\'text_\'+AppLang.getCurrent()]">\n' +
    '        <p ng-bind-html="ProjectSvc.item[\'text_\'+AppLang.getCurrent()] | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="ProjectSvc.item.type==2 && ProjectSvc.item[\'html_\'+AppLang.getCurrent()]">\n' +
    '        <p ng-bind-html="ProjectSvc.item[\'html_\'+AppLang.getCurrent()] | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="ProjectSvc.item.type==3 && ProjectSvc.item.url">\n' +
    '        <p ng-bind-html="ProjectSvc.item.url | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="ProjectSvc.item.type==4 && ProjectSvc.item[\'markdown_\'+AppLang.getCurrent()]">\n' +
    '        <p markdown-to-html="ProjectSvc.item[\'markdown_\'+AppLang.getCurrent()]">\n' +
    '        </p>\n' +
    '    </div>\n' +
    '</div><!--//desc-->');
	a.put('views/project/create.html', '<div class="container sections-wrapper" ng-init="ProjectSvc.initEmptyItem()">\n' +
    '    <form name="projectForm">\n' +
    '        <div class="row">\n' +
    '            <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '                <section class="latest section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h1 class="heading">\n' +
    '                            <span translate>Create project</span>\n' +
    '                        </h1>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/project/inputs/central.html\'"></div>\n' +
    '                            <div>\n' +
    '                                <button ng-click="ProjectSvc.doCreate(ProjectSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                        ng-disabled="!projectForm.$valid" id="projectCreate">\n' +
    '                                    <i class="fa fa-check"></i> <translate>Create</translate>\n' +
    '                                </button>\n' +
    '                                <button ng-click="ProjectSvc.doDelete(ProjectSvc.item)" class="btn btn-cta-red"\n' +
    '                                        id="projectDelete">\n' +
    '                                    <i class="fa fa-trash"></i> <translate>Delete project</translate>\n' +
    '                                </button>\n' +
    '                                <button ng-click="ProjectSvc.doAddImage()" class="btn btn-cta-default pull-right"\n' +
    '                                        id="projectAddImage">\n' +
    '                                    <i class="fa fa-plus"></i> <translate>Add image</translate>\n' +
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
    '                        <h2 class="heading" translate>Additionally</h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/project/inputs/right.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </aside><!--//section-->\n' +
    '\n' +
    '                <aside class="info aside section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading sr-only" translate>Search</h2>\n' +
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
	a.put('views/post/update.html', '<div class="container sections-wrapper">\n' +
    '    <form name="postForm">\n' +
    '        <div class="row">\n' +
    '            <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '                <section class="latest section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h1 class="heading">\n' +
    '                            <span translate>Edit post</span>\n' +
    '                            <a ng-href="{{AppLang.getUrlPrefix()+\'/post/\'+PostSvc.item.name}}"\n' +
    '                               class="btn btn-cta-default pull-right btn-xs" ng-if="AccountSvc.isAdmin()"\n' +
    '                               id="postUpdate"><i class="fa fa-eye"></i> <translate>View</translate></a>\n' +
    '                        </h1>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/post/inputs/central.html\'"></div>\n' +
    '                            <div>\n' +
    '                                <button ng-click="PostSvc.doUpdate(PostSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                        ng-disabled="!postForm.$valid" id="postSave">\n' +
    '                                    <i class="fa fa-floppy-o"></i> <translate>Save</translate>\n' +
    '                                </button>\n' +
    '                                <button ng-click="PostSvc.doDelete(PostSvc.item)" class="btn btn-cta-red"\n' +
    '                                        id="postDelete">\n' +
    '                                    <i class="fa fa-trash"></i> <translate>Delete post</translate>\n' +
    '                                </button>\n' +
    '                                <button ng-click="PostSvc.doAddImage()" class="btn btn-cta-default pull-right"\n' +
    '                                        id="postAddImage">\n' +
    '                                    <i class="fa fa-plus"></i> <translate>Add image</translate>\n' +
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
    '                        <h2 class="heading" translate>Additionally</h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/post/inputs/right.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </aside><!--//section-->\n' +
    '\n' +
    '                <aside class="info aside section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading sr-only" translate>Search</h2>\n' +
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
	a.put('views/post/sidebar.html', '<aside class="info aside section">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading sr-only" translate>Search</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/search.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//aside-->\n' +
    '\n' +
    '<aside class="list tags aside section">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading" translate>Tags</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//section-->');
	a.put('views/post/list.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-include="\'views/post/list-header.html\'">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div class="item row"\n' +
    '                             ng-repeat="item in PostSvc.list | limitTo:PostSvc.limit:PostSvc.begin">\n' +
    '                            <div ng-include="\'views/post/list-item.html\'"></div>\n' +
    '                        </div><!--//item-->\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/post/sidebar.html\'"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/post/list-item.html', '<a class="col-md-4 col-sm-4 col-xs-12" ng-href="{{AppLang.getUrlPrefix()+\'/post/\'+item.name}}" ng-if="item.images.length>0">\n' +
    '    <img class="img-responsive post-image" ng-src="{{item.images[0].src_thumbnail_url}}"\n' +
    '         ng-if="item.images.length>0"\n' +
    '         alt="{{item[\'title_\'+AppLang.getCurrent()]}}"/>\n' +
    '</a>\n' +
    '<div class="desc col-xs-12" ng-class="item.images.length>0?\'col-md-8 col-sm-8\':\'col-md-12 col-sm-12\'">\n' +
    '    <div class="pull-right">\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/post/update/\'+item.name}}"\n' +
    '           class="btn btn-cta-default btn-xs" ng-if="AccountSvc.isAdmin()"\n' +
    '           id="{{\'post\'+$index+\'Update\'}}">\n' +
    '            <i class="fa fa-pencil-square-o"></i>\n' +
    '            <span class="hidden-xs" translate>Edit</span>\n' +
    '        </a>\n' +
    '        <a ng-click="PostSvc.doDelete(item)" class="btn btn-cta-red btn-xs"\n' +
    '           id="postDelete" ng-if="AccountSvc.isAdmin()">\n' +
    '            <i class="fa fa-trash"></i>\n' +
    '            <span class="hidden-xs" translate>Delete</span>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '    <h3 class="title">\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/post/\'+item.name}}" ng-bind-html="item[\'title_\'+AppLang.getCurrent()] | unsafe"></a>\n' +
    '    </h3>\n' +
    '    <p ng-bind-html="item[\'description_\'+AppLang.getCurrent()] | unsafe"></p>\n' +
    '    <p ng-if="item.tags.length>0">\n' +
    '        <span ng-repeat="tag in item.tags">\n' +
    '            <i class="fa fa-tag"></i>\n' +
    '            <a class="list-link" ng-href="{{AppLang.getUrlPrefix()+\'/tag/\'+tag.text}}"\n' +
    '               ng-bind="tag.text"></a>\n' +
    '        </span>\n' +
    '    </p>\n' +
    '    <p>\n' +
    '        <a class="more-link" ng-href="{{AppLang.getUrlPrefix()+\'/post/\'+item.name}}" id="{{\'post\'+$index+\'Detail\'}}"><i\n' +
    '                class="fa fa-link"></i> <translate>Detail...</translate></a>\n' +
    '    </p>\n' +
    '</div><!--//desc-->\n' +
    '<div class="desc col-md-12 col-sm-12 col-xs-12">\n' +
    '    <hr class="divider" ng-if="!$last"/>\n' +
    '</div><!--//desc-->');
	a.put('views/post/list-header.html', '<span ng-bind-html="PostSvc.title | unsafe"></span>\n' +
    '<a ng-href="{{AppLang.getUrlPrefix()+\'/post/create\'}}"\n' +
    '   class="btn btn-cta-secondary pull-right btn-xs" ng-if="AccountSvc.isAdmin()" id="postCreate"><i class="fa fa-plus"></i>  <translate>Create</translate></a>');
	a.put('views/post/item.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading">\n' +
    '                        <span ng-bind-html="PostSvc.item[\'title_\'+AppLang.getCurrent()] | unsafe"></span>\n' +
    '                        <a ng-href="{{AppLang.getUrlPrefix()+\'/post/update/\'+PostSvc.item.name}}"\n' +
    '                           class="btn btn-cta-secondary pull-right btn-xs" ng-if="AccountSvc.isAdmin()" id="postUpdate"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate></a>\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div class="item row">\n' +
    '                            <div ng-include="\'views/post/item-content.html\'"></div>\n' +
    '                        </div><!--//item-->\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <aside class="list description aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading" translate>Description</h2>\n' +
    '                    <div class="content">\n' +
    '                        <span ng-bind-html="PostSvc.item[\'description_\'+AppLang.getCurrent()] | unsafe"></span>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="list tags aside section" ng-if="PostSvc.item.tags.length>0">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading" translate>Tags</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/post/item-tags.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//section-->\n' +
    '\n' +
    '            <aside class="info aside section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading sr-only" translate>Search</h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/search.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </aside><!--//aside-->\n' +
    '\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/post/item-tags.html', '<ul class="list-unstyled">\n' +
    '    <li ng-repeat="tag in PostSvc.item.tags"><i class="fa fa-tag"></i> <a ng-href="{{AppLang.getUrlPrefix()+\'/tag/\'+tag.text}}"\n' +
    '                                                                             ng-bind="tag.text"></a></li>\n' +
    '</ul>');
	a.put('views/post/item-content.html', '<div ng-if="PostSvc.item.images.length>0">\n' +
    '    <div class="desc col-md-12 col-sm-12 col-xs-12">\n' +
    '        <div ng-if="PostSvc.item.images.length==1">\n' +
    '            <img ng-src="{{PostSvc.item.images[0].src_url}}"\n' +
    '                 class="img-responsive"/>\n' +
    '        </div>\n' +
    '        <div ng-if="PostSvc.item.images.length>1">\n' +
    '            <div data-nq-carousel="">\n' +
    '                <div data-carousel-item="" ng-repeat="image in PostSvc.item.images">\n' +
    '                    <!--h3 class="carousel-title" nf-if="image.title!=\'\'"\n' +
    '                        ng-bind-html="image.title | unsafe"></h3-->\n' +
    '                    <img ng-src="{{image.src_url}}">\n' +
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
    '    <div ng-if="PostSvc.item.type==1 && PostSvc.item[\'text_\'+AppLang.getCurrent()]">\n' +
    '        <p ng-bind-html="PostSvc.item[\'text_\'+AppLang.getCurrent()] | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="PostSvc.item.type==2 && PostSvc.item[\'html_\'++AppLang.getCurrent()]">\n' +
    '        <p ng-bind-html="PostSvc.item[\'html_\'++AppLang.getCurrent()] | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="PostSvc.item.type==3 && PostSvc.item.url">\n' +
    '        <p ng-bind-html="PostSvc.item.url | unsafe"></p>\n' +
    '    </div>\n' +
    '    <div ng-if="PostSvc.item.type==4 && PostSvc.item[\'markdown_\'+AppLang.getCurrent()]">\n' +
    '        <p markdown-to-html="PostSvc.item[\'markdown_\'+AppLang.getCurrent()]">\n' +
    '        </p>\n' +
    '    </div>\n' +
    '</div><!--//desc-->');
	a.put('views/post/create.html', '<div class="container sections-wrapper" ng-init="PostSvc.initEmptyItem()">\n' +
    '    <form name="postForm">\n' +
    '        <div class="row">\n' +
    '            <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '                <section class="latest section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h1 class="heading">\n' +
    '                            <span translate>Create post</span>\n' +
    '                        </h1>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/post/inputs/central.html\'"></div>\n' +
    '                            <div>\n' +
    '                                <button ng-click="PostSvc.doCreate(PostSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                        ng-disabled="!postForm.$valid" id="postCreate">\n' +
    '                                    <i class="fa fa-check"></i> <translate>Create</translate>\n' +
    '                                </button>\n' +
    '                                <button ng-click="PostSvc.doDelete(PostSvc.item)" class="btn btn-cta-red"\n' +
    '                                        id="postDelete">\n' +
    '                                    <i class="fa fa-trash"></i> <translate>Delete post</translate>\n' +
    '                                </button>\n' +
    '                                <button ng-click="PostSvc.doAddImage()" class="btn btn-cta-default pull-right"\n' +
    '                                        id="postAddImage">\n' +
    '                                    <i class="fa fa-plus"></i> <translate>Add image</translate>\n' +
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
    '                        <h2 class="heading" translate>Additionally</h2>\n' +
    '                        <div class="content">\n' +
    '                            <div ng-include="\'views/post/inputs/right.html\'"></div>\n' +
    '                        </div><!--//content-->\n' +
    '                    </div><!--//section-inner-->\n' +
    '                </aside><!--//section-->\n' +
    '\n' +
    '                <aside class="info aside section">\n' +
    '                    <div class="section-inner">\n' +
    '                        <h2 class="heading sr-only" translate>Search</h2>\n' +
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
    '                <div class="margin-t form-group"><label for="promptModel">{{promptLabel | translate}}</label><input type="text"\n' +
    '                                                                                                        class="form-control"\n' +
    '                                                                                                        name="promptModel"\n' +
    '                                                                                                        ng-model="promptModel">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-cta-default" ng-click="$cancel()">\n' +
    '                    <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()">\n' +
    '                    <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
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
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$hide()">{{closeText | translate}}</button>\n' +
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
    '                    <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()">\n' +
    '                    <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
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
    '                    <i class="fa fa-check"></i> {{okText | translate}}\n' +
    '                </button>\n' +
    '            </div>\n' +
    '            <button type="button" class="close" ng-click="$hide()" ng-bind-html="closeIcon">\n' +
    '                <i class="fa fa-times"></i>\n' +
    '            </button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/manager/tag.html', '<div ng-include="\'views/not-access.html\'" ng-if="!AccountSvc.isAdmin()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="AccountSvc.isAdmin()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-include="\'views/manager/tag/list-header.html\'">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/manager/tag/list.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/manager/sidebar.html\'" ng-controller="ManagerSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/manager/sidebar.html', '<aside class="list additionally aside section">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading" translate>Additionally</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/manager/menu.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//section-->\n' +
    '\n' +
    '<div ng-include="\'views/home/sidebar.html\'" ng-controller="SidebarCtrl"></div>');
	a.put('views/manager/public_link.html', '<div ng-include="\'views/not-access.html\'" ng-if="!AccountSvc.isAdmin()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="AccountSvc.isAdmin()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-include="\'views/manager/public_link/list-header.html\'">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/manager/public_link/list.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/manager/sidebar.html\'" ng-controller="ManagerSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/manager/properties.html', '<div ng-include="\'views/not-access.html\'" ng-if="!AccountSvc.isAdmin()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="AccountSvc.isAdmin()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-include="\'views/manager/properties/list-header.html\'">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/manager/properties/list.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/manager/sidebar.html\'" ng-controller="ManagerSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/manager/meta_tag.html', '<div ng-include="\'views/not-access.html\'" ng-if="!AccountSvc.isAdmin()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="AccountSvc.isAdmin()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-include="\'views/manager/meta_tag/list-header.html\'">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/manager/meta_tag/list.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/manager/sidebar.html\'" ng-controller="ManagerSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/manager/menu.html', '<ul class="list-unstyled">\n' +
    '    <li ng-if="$routeParams.subNavId!=\'meta_tag\'">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/manager/meta_tag\'}}"\n' +
    '           ng-bind="AppConst.manager.meta_tag.title | translate"></a>\n' +
    '    </li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'tag\'">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/manager/tag\'}}"\n' +
    '           ng-bind="AppConst.manager.tag.title | translate"></a>\n' +
    '    </li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'public_link\'">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="/manager/public_link"\n' +
    '           ng-bind="AppConst.manager.public_link.title | translate"></a></li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'properties\'">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/manager/properties\'}}"\n' +
    '           ng-bind="AppConst.manager.properties.title | translate"></a>\n' +
    '    </li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'users\'">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/manager/users\'}}"\n' +
    '           ng-bind="AppConst.manager.users.title | translate"></a>\n' +
    '    </li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'html_cache\'">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/manager/html_cache\'}}"\n' +
    '           ng-bind="AppConst.manager.html_cache.title | translate"></a>\n' +
    '    </li>\n' +
    '</ul>');
	a.put('views/manager/html_cache.html', '<div ng-include="\'views/not-access.html\'" ng-if="!AccountSvc.isAdmin()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="AccountSvc.isAdmin()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-include="\'views/manager/html_cache/list-header.html\'">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/manager/html_cache/list.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/manager/sidebar.html\'" ng-controller="ManagerSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/home/sidebar.html', '<aside class="info aside section">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading sr-only" translate>Search</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/search.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//aside-->\n' +
    '\n' +
    '<aside class="list tags aside section">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading" translate>Tags</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/home/list-tags.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//section-->');
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
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h2 class="heading" ng-include="\'views/post/list-header.html\'">\n' +
    '                    </h2>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/home/list-posts.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/home/sidebar.html\'" ng-controller="SidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/home/list-tags.html', '<ul class="list-unstyled">\n' +
    '    <li ng-repeat="tag in TagSvc.list | limitTo:TagSvc.limitOnHome">\n' +
    '        <i class="fa fa-tag"></i> <a ng-href="{{AppLang.getUrlPrefix()+\'/tag/\'+tag.text}}" ng-class="tag.text==TagSvc.tagText?\'active\':\'\'"\n' +
    '                                     ng-bind="tag.text"></a></li>\n' +
    '</ul>\n' +
    '<a class="btn btn-default btn-block" ng-click="TagSvc.limitOnHome=10000" ng-if="TagSvc.limitOnHome<10000"><translate>Show all</translate> <i\n' +
    '        class="fa fa-chevron-down"></i></a>\n' +
    '');
	a.put('views/home/list-projects.html', '<div class="item row" ng-repeat="item in ProjectSvc.list | limitTo:ProjectSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/project/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="{{AppLang.getUrlPrefix()+\'/project\'}}"><translate>All projects</translate> <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/home/list-posts.html', '<div class="item row" ng-repeat="item in PostSvc.list | limitTo:PostSvc.limitOnHome">\n' +
    '    <div ng-include="\'views/post/list-item.html\'"></div>\n' +
    '</div><!--//item-->\n' +
    '<a class="btn btn-cta-secondary" ng-href="{{AppLang.getUrlPrefix()+\'/post\'}}"><translate>All posts</translate> <i\n' +
    '        class="fa fa-chevron-right"></i></a>');
	a.put('views/file/update.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="FileCtrl">\n' +
    '            <form name="fileForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/file/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="fileUpdateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!fileForm.$valid" id="fileUpdateConfirm">\n' +
    '                        <i class="fa fa-floppy-o"></i> {{confirmText | translate}}\n' +
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
    '            <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '            <div class="modal-body">\n' +
    '                <div class="modal-body-inner">\n' +
    '                    <div ng-controller="FileCtrl">\n' +
    '                        <div ng-include="\'views/file/list.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="modal-footer">\n' +
    '                <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="fileListCancel"><i\n' +
    '                        class="fa fa-undo"></i> {{cancelText |  translate}}\n' +
    '                </button>\n' +
    '                <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()" id="fileListConfirm"><i\n' +
    '                        class="fa fa-check"></i> {{confirmText | translate}}\n' +
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
    '            <i class="fa fa-plus"></i> <translate>Add file</translate>\n' +
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
    '                                                    type="button" id="fileSearch" translate>\n' +
    '                                                Search\n' +
    '                                            </button>\n' +
    '                                        </span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<table class="table table-hover">\n' +
    '    <thead>\n' +
    '    <tr>\n' +
    '        <th style="width:20px" translate>ID</th>\n' +
    '        <th translate>Url</th>\n' +
    '        <th translate>Comment</th>\n' +
    '        <th class="text-right" translate>Actions</th>\n' +
    '    </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '    <tr ng-repeat="item in FileSvc.list"\n' +
    '        ng-class="(FileSvc.item.id==item.id)?\'bold\':\'\'">\n' +
    '        <td ng-bind="item.id" ng-click="FileSvc.selectItem(item)"></td>\n' +
    '        <td class="break-word" ng-bind="item.src" ng-click="FileSvc.selectItem(item)"></td>\n' +
    '        <td ng-bind="item[\'comment_\'+AppLang.getCurrent()]" ng-click="FileSvc.selectItem(item)"></td>\n' +
    '        <td class="text-right">\n' +
    '            <button ng-click="FileSvc.showUpdate(item)" class="btn btn-cta-default btn-xs" type="button"\n' +
    '                    id="{{\'file\'+item.id+\'Update\'}}"><i class="fa fa-pencil-square-o"></i> <translate>Edit</translate>\n' +
    '            </button>\n' +
    '            <button ng-click="FileSvc.doDelete(item)" class="btn btn-cta-red btn-xs" type="button"\n' +
    '                    id="{{\'file\'+item.id+\'Delete\'}}"><i class="fa fa-trash"></i> <translate>Delete</translate>\n' +
    '            </button>\n' +
    '        </td>\n' +
    '    </tr>\n' +
    '    </tbody>\n' +
    '</table>');
	a.put('views/file/inputs.html', '<div class="form-group" ng-if="FileSvc.mode==\'create\'">\n' +
    '    <label for="FileUpload" translate>File</label>\n' +
    '    <input class="form-control" type="file" id="FileUpload"/>\n' +
    '</div>\n' +
    '<div class="form-group" ng-if="FileSvc.mode==\'update\'">\n' +
    '    <label for="FileUpload" translate>File</label>\n' +
    '    <input class="form-control" type="text" id="FileUpload"\n' +
    '                  ng-model="FileSvc.item.src" disabled/>\n' +
    '</div>\n' +
    '<div data-nq-tabset="" data-tabset-model="FileCommentTabset">\n' +
    '  <div ng-repeat="(lang, title) in AppLang.langs" data-nq-tab="" data-heading="{{title | translate}}">\n' +
    '    <div class="form-group">\n' +
    '        <label for="FileComment_{{lang}}" translate>Comment</label>\n' +
    '            <textarea type="text" class="form-control" id="FileComment_{{lang}}"\n' +
    '                      ng-model="FileSvc.item[\'comment_\'+lang]"></textarea>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
	a.put('views/file/create.modal.html', '<div class="modal" tabindex="-1" role="dialog">\n' +
    '    <div class="modal-dialog">\n' +
    '        <div class="modal-content" ng-controller="FileCtrl">\n' +
    '            <form name="fileForm">\n' +
    '                <div class="modal-header" ng-show="title"><h4 class="modal-title" ng-bind="title | translate"></h4></div>\n' +
    '                <div class="modal-body">\n' +
    '                    <div class="modal-body-inner">\n' +
    '                        <div ng-include="\'views/file/inputs.html\'"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="modal-footer">\n' +
    '                    <button type="button" class="btn btn-cta-default" ng-click="$cancel()" id="fileCreateCancel">\n' +
    '                        <i class="fa fa-undo"></i> {{cancelText | translate}}\n' +
    '                    </button>\n' +
    '                    <button type="button" class="btn btn-cta-secondary" ng-click="$confirm()"\n' +
    '                            ng-disabled="!fileForm.$valid" id="fileCreateConfirm">\n' +
    '                        <i class="fa fa-check"></i> {{confirmText | translate}}\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '                <button type="button" class="close" ng-click="$cancel()" ng-bind-html="closeIcon">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/contact/sidebar.html', '<aside class="list manager-contact aside section" ng-if="PublicLinkSvc.list.length>0">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading" translate>Other</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/contact/links.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//section-->\n' +
    '\n' +
    '<div ng-include="\'views/home/sidebar.html\'" ng-controller="SidebarCtrl"></div>\n' +
    '');
	a.put('views/contact/list.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-bind="ContactSvc.title">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <form name="contactForm">\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="username" translate>You name</label>\n' +
    '                                <input type="text" class="form-control" name="username" id="username"\n' +
    '                                       ng-model="ContactSvc.item.username" required>\n' +
    '                                <span ng-show="contactForm.$submitted || contactForm.username.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!contactForm.username.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="email" translate>Email</label>\n' +
    '                                <input type="email" class="form-control" name="email" id="email"\n' +
    '                                       ng-model="ContactSvc.item.email" required>\n' +
    '                                <span ng-show="contactForm.$submitted || contactForm.email.$touched" class="form-control-feedback"\n' +
    '                                      ng-class="!contactForm.email.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group has-feedback" show-errors>\n' +
    '                                <label for="message" translate>Message</label>\n' +
    '                                <textarea class="form-control" name="message" id="message"\n' +
    '                                       ng-model="ContactSvc.item.message" required></textarea>\n' +
    '                                <span ng-show="contactForm.$submitted || contactForm.message.$touched"\n' +
    '                                      class="form-control-feedback"\n' +
    '                                      ng-class="!contactForm.message.$valid ? \'glyphicon glyphicon-remove\' : \'glyphicon glyphicon-ok\'"\n' +
    '                                      aria-hidden="true"></span>\n' +
    '                            </div>\n' +
    '                            <button ng-click="ContactSvc.doSend(ContactSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                    ng-disabled="!contactForm.$valid" id="contactSend">\n' +
    '                                <i class="fa fa-envelope-o"></i> <translate>Send message</translate>\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/contact/sidebar.html\'"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/contact/links.html', '<ul class="list-unstyled">\n' +
    '    <li ng-repeat="item in PublicLinkSvc.list | orderBy:\'position\'" ng-if="item.in_contact"><i ng-class="item.icon"></i> <a\n' +
    '            ng-href="{{item.src}}" target="_blank" ng-bind="item[\'title_\'+AppLang.getCurrent()]"></a></li>\n' +
    '</ul>');
	a.put('views/account/user_app.html', '<div ng-include="\'views/not-access.html\'" ng-if="!AccountSvc.isLogged()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="AccountSvc.isLogged()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-include="\'views/account/user_app/list-header.html\'">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <div ng-include="\'views/account/user_app/list.html\'"></div>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/account/sidebar.html\'" ng-controller="AccountSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-');
	a.put('views/account/sidebar.html', '<aside class="list additionally aside section">\n' +
    '    <div class="section-inner">\n' +
    '        <h2 class="heading" translate>Additionally</h2>\n' +
    '        <div class="content">\n' +
    '            <div ng-include="\'views/account/menu.html\'"></div>\n' +
    '        </div><!--//content-->\n' +
    '    </div><!--//section-inner-->\n' +
    '</aside><!--//section-->\n' +
    '\n' +
    '<div ng-include="\'views/home/sidebar.html\'" ng-controller="SidebarCtrl"></div>');
	a.put('views/account/reset.html', '<div ng-include="\'views/not-access.html\'" ng-if="AccountSvc.isLogged()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="!AccountSvc.isLogged()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-bind="AccountSvc.title">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <p translate>Please enter code from email and new password for you account</p>\n' +
    '                        <form ng-submit="AccountSvc.doReset()" name="accountForm">\n' +
    '                            <div ng-include="\'views/account/reset/inputs.html\'"></div>\n' +
    '                            <button type="submit" class="btn btn btn-cta-secondary" ng-disabled="!accountForm.$valid"\n' +
    '                                    id="accountReset" translate>Change password\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/account/sidebar.html\'" ng-controller="AccountSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/reg.html', '<div ng-include="\'views/not-access.html\'" ng-if="AccountSvc.isLogged()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="!AccountSvc.isLogged()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-bind="AccountSvc.title">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <form name="accountForm">\n' +
    '                            <div ng-include="\'views/account/reg/inputs.html\'"></div>\n' +
    '                            <button ng-click="AccountSvc.doReg()" class="btn btn-cta-secondary"\n' +
    '                                    ng-disabled="!accountForm.$valid" id="accountReg" translate>Create\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/account/sidebar.html\'" ng-controller="AccountSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/recovery.html', '<div ng-include="\'views/not-access.html\'" ng-if="AccountSvc.isLogged()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="!AccountSvc.isLogged()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-bind="AccountSvc.title">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <p translate>Please enter you email address used on registration</p>\n' +
    '                        <form ng-submit="AccountSvc.doRecovery()" name="accountForm">\n' +
    '                            <div ng-include="\'views/account/recovery/inputs.html\'"></div>\n' +
    '                            <button type="submit" class="btn btn btn-cta-secondary" ng-disabled="!accountForm.$valid"\n' +
    '                                    id="accountRecovery"><i class="fa fa-envelope-o"></i> <translate>Sent link to reset password</translate>\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/account/sidebar.html\'" ng-controller="AccountSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/profile.html', '<div ng-include="\'views/not-access.html\'" ng-if="!AccountSvc.isLogged()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="AccountSvc.isLogged()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-bind="AccountSvc.title">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <form name="accountForm">\n' +
    '                            <div ng-include="\'views/account/profile/inputs.html\'"></div>\n' +
    '                            <button ng-click="ProfileSvc.doUpdate(ProfileSvc.item)" class="btn btn-cta-secondary"\n' +
    '                                    ng-disabled="!accountForm.$valid" id="accountSave">\n' +
    '                                <i class="fa fa-floppy-o"></i> <translate>Save</translate>\n' +
    '                            </button>\n' +
    '                            <button ng-click="ProfileSvc.doDelete()" class="btn btn-cta-red" id="accountDelete"><i\n' +
    '                                    class="fa fa-trash"></i> <translate>Delete account</translate>\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/account/sidebar.html\'" ng-controller="AccountSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/account/menu.html', '<ul class="list-unstyled">\n' +
    '    <li ng-if="$routeParams.subNavId!=\'profile\' && AccountSvc.isLogged()">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/account/profile\'}}" ng-bind="AppConst.account.profile.title |  translate"></a>\n' +
    '    </li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'user_app\' && AccountSvc.isLogged()">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/account/user_app\'}}" ng-bind="AppConst.account.user_app.title |  translate"></a>\n' +
    '    </li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'login\' && !AccountSvc.isLogged()">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/account/login\'}}" ng-bind="AppConst.account.login.title |  translate"></a>\n' +
    '    </li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'reg\' && !AccountSvc.isLogged()">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/account/reg\'}}" ng-bind="AppConst.account.reg.title | translate"></a>\n' +
    '    </li>\n' +
    '    <li ng-if="$routeParams.subNavId!=\'recovery\' && !AccountSvc.isLogged()">\n' +
    '        <i class="fa fa-link"></i>\n' +
    '        <a ng-href="{{AppLang.getUrlPrefix()+\'/account/recovery\'}}" ng-bind="AppConst.account.recovery.title | translate"></a></li>\n' +
    '</ul>');
	a.put('views/account/login.html', '<div ng-include="\'views/not-access.html\'" ng-if="AccountSvc.isLogged()"></div>\n' +
    '<div class="container sections-wrapper" ng-if="!AccountSvc.isLogged()">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 class="heading" ng-bind="AccountSvc.title">\n' +
    '                    </h1>\n' +
    '                    <div class="content">\n' +
    '                        <p translate>Please enter you email address and password for login on site</p>\n' +
    '                        <form ng-submit="AccountSvc.doLogin()" name="accountForm">\n' +
    '                            <div ng-include="\'views/account/login/inputs.html\'"></div>\n' +
    '                            <button type="submit" class="btn btn-cta-secondary" ng-disabled="!accountForm.$valid"\n' +
    '                                    id="accountLogin" translate>\n' +
    '                                Login\n' +
    '                            </button>\n' +
    '                        </form>\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/account/sidebar.html\'" ng-controller="AccountSidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/search.html', '<div class="form-search search-only" ng-controller="NavbarCtrl" ng-if="!NavbarSvc.items.search.hidden">\n' +
    '    <div class="input-group">\n' +
    '        <input type="text" class="form-control search-query"\n' +
    '               placeholder="{{NavbarSvc.items.search.placeholder | translate }}" ng-model="SearchSvc.searchText"\n' +
    '               ng-enter="SearchSvc.doSearch(SearchSvc.searchText)"/>\n' +
    '                                    <span class="input-group-btn">\n' +
    '                                        <button ng-click="SearchSvc.doSearch(SearchSvc.searchText)"\n' +
    '                                                class="btn btn-cta-secondary" type="button" id="searchNav" translate>\n' +
    '                                            Search\n' +
    '                                        </button>\n' +
    '                                    </span>\n' +
    '    </div>\n' +
    '</div>');
	a.put('views/not-founded.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 translate>Error</h1>\n' +
    '                    <div class="content" translate>\n' +
    '                        Not founded!\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/home/sidebar.html\'" ng-controller="SidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/not-access.html', '<div class="container sections-wrapper">\n' +
    '    <div class="row">\n' +
    '        <div class="primary col-md-8 col-sm-12 col-xs-12">\n' +
    '            <section class="latest section">\n' +
    '                <div class="section-inner">\n' +
    '                    <h1 translate>Error</h1>\n' +
    '                    <div class="content" translate>\n' +
    '                        Not access!\n' +
    '                    </div><!--//content-->\n' +
    '                </div><!--//section-inner-->\n' +
    '            </section><!--//section-->\n' +
    '\n' +
    '        </div><!--//primary-->\n' +
    '        <div class="secondary col-md-4 col-sm-12 col-xs-12">\n' +
    '            <div ng-include="\'views/home/sidebar.html\'" ng-controller="SidebarCtrl"></div>\n' +
    '        </div><!--//secondary-->\n' +
    '    </div><!--//row-->\n' +
    '</div><!--//masonry-->');
	a.put('views/header.html', '<!-- ******HEADER****** -->\n' +
    '<header class="header" ng-controller="NavbarCtrl">\n' +
    '    <div class="container">\n' +
    '        <img class="profile-image cursor-pointer img-responsive img-circle pull-left"\n' +
    '             ng-src="{{AppProperties.get(\'SITE_LOGO\')}}"\n' +
    '             alt="{{AppProperties.get(\'SITE_TITLE\')}}" ng-if="AppProperties.get(\'SITE_LOGO\')"\n' +
    '             ng-click="NavbarSvc.goHome()"/>\n' +
    '        <div class="profile-content pull-left">\n' +
    '            <h1 class="name cursor-pointer" ng-bind-html="AppProperties.get(\'SITE_TITLE\') | unsafe"\n' +
    '                ng-click="NavbarSvc.goHome()"></h1>\n' +
    '            <h2 class="desc cursor-pointer" ng-bind-html="AppProperties.get(\'SITE_DESCRIPTION\') | unsafe"\n' +
    '                ng-click="NavbarSvc.goHome()"></h2>\n' +
    '            <ul class="social list-inline" ng-if="PublicLinkSvc.list.length>0">\n' +
    '                <li ng-class="$last ? \'last-item\' : \'\'"\n' +
    '                    ng-repeat="item in PublicLinkSvc.list | orderBy:\'position\'" ng-if="item.in_header">\n' +
    '                    <a ng-href="{{item.src}}" target="_blank"><i class="" ng-class="item.icon"></i></a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div><!--//profile-->\n' +
    '\n' +
    '        <div ng-repeat="(lang, title) in AppLang.langs" ng-if="AppLang.getCurrent()!=lang">\n' +
    '            <a class="btn btn-cta-secondary pull-right"\n' +
    '               ng-click="AppLang.setCurrent(lang)"\n' +
    '               ng-bind-html="title | translate"\n' +
    '               id="{{lang+\'LangNav\'}}"></a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-repeat="item in NavbarSvc.items.right | orderBy:\'$index\':true" ng-if="!item.hiddenHandler()">\n' +
    '            <a class="btn btn-cta-primary pull-right"\n' +
    '               ng-click="item.click()"\n' +
    '               ng-bind-html="(AppConst[item.name].strings.title || AppConst[item.parent][item.name].title) | unsafe | translate"\n' +
    '               ng-if="item.click" id="{{item.name+\'Nav\'}}"\n' +
    '               ng-class="[$routeParams.navId, $routeParams.subNavId].indexOf(item.name)!==-1 ? \'active\' : \'\'"></a>\n' +
    '            <a class="btn btn-cta-primary pull-right"\n' +
    '               ng-href="{{AppLang.getUrlPrefix()+\'/\'+(AppConst[item.name].strings.url || AppConst[item.parent][item.name].url || item.name)}}"\n' +
    '               ng-bind-html="(AppConst[item.name].strings.title || AppConst[item.parent][item.name].title) | unsafe | translate"\n' +
    '               ng-if="!item.click" id="{{item.name+\'Nav\'}}"\n' +
    '               ng-class="[$routeParams.navId, $routeParams.subNavId].indexOf(item.name)!==-1 ? \'active\' : \'\'"></a>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-repeat="item in NavbarSvc.items.left | orderBy:\'$index\':true" ng-if="!item.hiddenHandler()">\n' +
    '            <a class="btn btn-cta-primary pull-right"\n' +
    '               ng-click="item.click()"\n' +
    '               ng-bind-html="(AppConst[item.name].strings.title || AppConst[item.parent][item.name].title) | unsafe | translate"\n' +
    '               ng-if="item.click" id="{{item.name+\'Nav\'}}"\n' +
    '               ng-class="[$routeParams.navId, $routeParams.subNavId].indexOf(item.name)!==-1 ? \'active\' : \'\'"></a>\n' +
    '            <a class="btn btn-cta-primary pull-right"\n' +
    '               ng-href="{{AppLang.getUrlPrefix()+\'/\'+(AppConst[item.name].strings.url || AppConst[item.parent][item.name].url || item.name)}}"\n' +
    '               ng-bind-html="(AppConst[item.name].strings.title || AppConst[item.parent][item.name].title) | unsafe | translate"\n' +
    '               ng-if="!item.click" id="{{item.name+\'Nav\'}}"\n' +
    '               ng-class="[$routeParams.navId, $routeParams.subNavId].indexOf(item.name)!==-1 ? \'active\' : \'\'"></a>\n' +
    '        </div>\n' +
    '    </div><!--//container-->\n' +
    '</header><!--//header-->');
	a.put('views/footer.html', '<!-- ******FOOTER****** -->\n' +
    '<footer class="footer" ng-controller="NavbarCtrl">\n' +
    '    <div class="container text-center">\n' +
    '        <small>\n' +
    '            <ul class="list-inline" ng-if="PublicLinkSvc.list.length>0">\n' +
    '                <li ng-repeat="item in PublicLinkSvc.list | orderBy:\'position\'" ng-if="item.in_footer">\n' +
    '                    <a ng-href="{{item.src}}" target="_blank">\n' +
    '                        <i class="" ng-class="item.icon"></i>\n' +
    '                        <span ng-bind="item[\'title_\'+AppLang.getCurrent()]"></span>\n' +
    '                    </a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </small>\n' +
    '        <small class="copyright"><i class="fa fa-copyright"></i> {{AppProperties.get(\'SITE_TITLE\')}}\n' +
    '        </small>\n' +
    '    </div><!--//container-->\n' +
    '</footer><!--//footer-->\n' +
    '');
	a.put('views/empty.html', '');
	 }]);