/* 
 * System Designer
 * 
 * https://system-designer.github.io
 *
 * Copyright 2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

runtime.on('ready', function () {

    var system = this.system('design');

    // DIALOG IMPORT
    var DialogImport = this.require('DialogImport');
    DialogImport.on('init', function (config) {
        var html = '',
            dom = null;

        $('.modal-backdrop').remove();
        $('#designer-dialog-import').empty();

        html = this.require('dialog-modal-import.html');
        document.querySelector('#designer-dialog-import').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, this.message())
        );

        // events
        dom = document.getElementById('designer-dialog-import-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogImport.on('show', function () {
        $('#designer-dialog-import-modal').modal('show');
    });

    DialogImport.on('hide', function () {
        $('#designer-dialog-import-modal').modal('hide');
    });

    // DIALOG CHECK
    var DialogCheck = this.require('DialogCheck');
    DialogCheck.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-check').empty();

        html = this.require('dialog-modal-check.html');
        document.querySelector('#designer-dialog-check').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, this.message())
        );

        dom = document.getElementById('designer-dialog-check-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogCheck.on('show', function () {
        $('#designer-dialog-check-modal').modal('show');
    });

    DialogCheck.on('hide', function () {
        $('#designer-dialog-check-modal').modal('hide');
    });

    DialogCheck.on('ok', function () {
        this.hide();
    });

    // DIALOG WELCOME
    var DialogWelcome = this.require('DialogWelcome');
    DialogWelcome.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-welcome').empty();

        html = this.require('dialog-modal-welcome.html');
        document.querySelector('#designer-dialog-welcome').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        // events
        dom = document.getElementById('designer-dialog-welcome-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogWelcome.on('show', function () {
        $('#designer-dialog-welcome-modal').modal('show');
    });

    DialogWelcome.on('hide', function () {
        $('#designer-dialog-welcome-modal').modal('hide');
    });

    // DIALOG SYNC
    var DialogSync = this.require('DialogSync');
    DialogSync.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-sync').empty();

        html = this.require('dialog-modal-sync.html');
        document.querySelector('#designer-dialog-sync').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        // events
        dom = document.getElementById('designer-dialog-sync-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

        dom = document.getElementById('designer-dialog-type-creation-hasHTML');
        dom.addEventListener('click', function (event) {
            if ($('#designer-dialog-type-creation-hasHTML')[0].checked) {
                $('#designer-dialog-sync-options-log-level').show();
            } else {
                $('#designer-dialog-sync-options-log-level').hide();
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-type-creation-hasNode');
        dom.addEventListener('click', function (event) {
            if ($('#designer-dialog-type-creation-hasNode')[0].checked) {
                $('#designer-dialog-sync-options-log-level').show();
            } else {
                $('#designer-dialog-sync-options-log-level').hide();
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-sync-commit');
        dom.addEventListener('click', function (event) {
            $('#designer-dialog-sync-comments-area').show();
            $('#designer-dialog-sync-options-area').show();
        }.bind(this));

        dom = document.getElementById('designer-dialog-sync-refresh');
        dom.addEventListener('click', function (event) {
            $('#designer-dialog-sync-comments-area').hide();
            $('#designer-dialog-sync-options-area').hide();
        }.bind(this));

    });

    DialogSync.on('show', function () {
        $('#designer-dialog-sync-modal').modal('show');
    });

    DialogSync.on('hide', function () {
        $('#designer-dialog-sync-modal').modal('hide');
    });

    // DIALOG SHARE
    var DialogShare = this.require('DialogShare');
    DialogShare.on('init', function (config) {
        var html = null,
            dom = null,
            sys = '';

        $('#designer-dialog-share').empty();

        sys = this.require('db').collections().System.find({
            '_id': this.require('designer').system().id()
        })[0];

        html = this.require('dialog-modal-share.html');
        document.querySelector('#designer-dialog-share').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, window.location.toString().split('#')[0] + '?system=' + encodeURIComponent(JSON.stringify(sys)))
        );

        // events
        dom = document.getElementById('designer-dialog-share-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-share-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogShare.on('show', function () {
        $('#designer-dialog-share-modal').modal('show');
    });

    DialogShare.on('hide', function () {
        $('#designer-dialog-share-modal').modal('hide');
    });

    // DIALOG COPYRIGHT
    var DialogCopyright = this.require('DialogCopyright');
    DialogCopyright.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-copyright').empty();

        html = this.require('dialog-modal-copyright.html');
        document.querySelector('#designer-dialog-copyright').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, this.message())
        );

        // events
        dom = document.getElementById('designer-dialog-copyright-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    DialogCopyright.on('show', function () {
        $('#designer-dialog-copyright-modal').modal('show');
    });

    DialogCopyright.on('hide', function () {
        $('#designer-dialog-copyright-modal').modal('hide');
    });

    // DIALOG CONFIG
    var DialogConfig = this.require('DialogConfig');
    DialogConfig.on('init', function (config) {
        var html = '',
            dom = null,
            that = this,
            storeConfig = null,
            designer = that.require('designer');

        $('#designer-dialog-config').empty();

        html = this.require('dialog-modal-config.html');
        document.querySelector('#designer-dialog-config').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        // default config value
        storeConfig = this.require('storage').get('system-designer-config');

        if (!storeConfig) {
            storeConfig = {};
        }

        if (typeof storeConfig.debugType === 'undefined') {
            storeConfig.debugType = 'client';
            this.require('storage').set('system-designer-config', storeConfig);
        }
        if (storeConfig.debugType === 'client') {
            $('#designer-dialog-config-radio-client').attr('checked', true);
            $('#designer-dialog-config-server-form').hide();
        } else {
            $('#designer-dialog-config-radio-server').attr('checked', true);
            $('#designer-dialog-config-client-form').hide();
        }
        if (storeConfig.urlClient) {
            $('#designer-dialog-config-url-client')[0].value = storeConfig.urlClient;
        }
        if (storeConfig.urlServer) {
            $('#designer-dialog-config-url-server')[0].value = storeConfig.urlServer;
        }
        if (storeConfig.githubToken) {
            $('#designer-dialog-config-github-token')[0].value = atob(storeConfig.githubToken);
        }
        if (storeConfig.githubRepository) {
            $('#designer-dialog-config-github-repository')[0].value = storeConfig.githubRepository;
        }
        if (storeConfig.advancedMode) {
            $('#designer-dialog-config-advanced-mode-isAdvanced').attr('checked', true);
        }

        // events
        dom = document.getElementById('designer-dialog-config-radio-client');
        dom.addEventListener('click', function (event) {
            var config = this.require('storage').get('system-designer-config');

            if (!config) {
                config = {};
            }

            config.debugType = 'client';
            this.require('storage').set('system-designer-config', config);

            $('#designer-dialog-config-client-form').show();
            $('#designer-dialog-config-server-form').hide();
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-radio-server');
        dom.addEventListener('click', function (event) {
            var config = this.require('storage').get('system-designer-config');

            if (!config) {
                config = {};
            }

            config.debugType = 'server';
            this.require('storage').set('system-designer-config', config);

            $('#designer-dialog-config-client-form').hide();
            $('#designer-dialog-config-server-form').show();
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-url-client');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-config-url-client').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-github-token');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-config-github-token').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-github-repository');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-config-github-repository').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-url-server');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-config-url-server').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-advanced-mode-isAdvanced');
        dom.addEventListener('click', function (event) {
            var config = this.require('storage').get('system-designer-config');

            if (!config) {
                config = {};
            }

            config.advancedMode = $('#designer-dialog-config-advanced-mode-isAdvanced').prop('checked');
            this.require('storage').set('system-designer-config', config);
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-config-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));
    });

    DialogConfig.on('show', function () {
        $('#designer-dialog-config-modal').modal('show');
    });

    DialogConfig.on('hide', function () {
        $('#designer-dialog-config-modal').modal('hide');
    });

    DialogConfig.on('ok', function () {
        var config = this.require('storage').get('system-designer-config');

        if (!config) {
            config = {};
        }

        config.urlClient = $('#designer-dialog-config-url-client')[0].value;
        config.urlServer = $('#designer-dialog-config-url-server')[0].value;
        config.githubToken = btoa($('#designer-dialog-config-github-token')[0].value);
        config.githubRepository = $('#designer-dialog-config-github-repository')[0].value;

        this.require('storage').set('system-designer-config', config);
    });

    // DIALOG IMPORT FILE
    var DialogImportFile = this.require('DialogImportFile');
    DialogImportFile.on('init', function (config) {
        var html = '',
            dom = null,
            that = this,
            libraries = [],
            library = '',
            systems = [],
            system = '',
            sys = '',
            systemIds = '',
            length = 0,
            i = 0,
            list = '';

        $('#designer-dialog-import-file').empty();

        libraries = this.require('db').collections().JSON.find();
        length = libraries.length;
        for (i = 0; i < length; i++) {
            library = this.require(libraries[i]._id);

            list = list + '<a class="list-group-item" id="designer-dialog-import-file-modal-library-' + library.id() + '">' +
                '<h4 class="list-group-item-heading">' + JSON.parse(decodeURIComponent(library.source())).description + '</h4>' +
                '<p class="list-group-item-text">v' + JSON.parse(decodeURIComponent(library.source())).version + '</p>' +
                '</a>';
        }

        systems = this.require('storage').get('system-designer-systems');

        if (systems) {
            systemIds = systems.systems;
        }
        length = systemIds.length;

        for (i = 0; i < length; i++) {
            system = this.require('storage').get(systemIds[i]);

            if (this.require('designer').system() && this.require('designer').system().id() === system._id) {
            } else {
                sys = sys + '<a class="list-group-item" id="designer-dialog-import-file-modal-systems-' + system._id + '">' +
                    '<h4 class="list-group-item-heading">' + system.name + '</h4>' +
                    '<p class="list-group-item-text">v' + system.version + '</p>' +
                    '</a>';
            }
        }

        html = this.require('dialog-modal-import-file.html');
        document.querySelector('#designer-dialog-import-file').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{library}}/gi, list)
                .replace(/{{systems}}/gi, sys)
        );

        // init
        if (sys === '') {
            $('#designer-dialog-import-modal-from-systems-input').hide();
            if (this.require('designer').isCordova()) {
                $('#designer-dialog-import-modal-from-library-form').show();
                $('#designer-dialog-import-modal-type-import').hide();
            }
        } else {
            if (this.require('designer').isCordova()) {
                $('#designer-dialog-import-modal-from-library-form').show();
                $('#designer-dialog-import-modal-type-import').show();
            }
        }
        if (this.require('designer').isCordova()) {
            $('#designer-dialog-import-modal-from-file').attr('checked', false);
            $('#designer-dialog-import-modal-from-library').attr('checked', true);
        }

        // systems events  
        var callbackSystemEvent = function (event) {
            var id = '',
                systems = null,
                length = 0,
                i = 0;

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                that.data(null);
            } else {
                id = this.getAttribute('id').replace('designer-dialog-import-file-modal-systems-', '');

                that.data(that.require('storage').get(id));

                // remove old active
                systems = document.getElementById('designer-dialog-import-file-modal-systems');

                length = systems.children.length;
                for (i = 0; i < length; i++) {
                    $(systems.children[i]).removeClass('active');
                }

                // add current active
                $(this).addClass('active');
            }
        };

        length = systemIds.length;
        for (i = 0; i < length; i++) {
            system = that.require('storage').get(systems.systems[i]);
            if (this.require('designer').system() && this.require('designer').system().id() === system._id) {
            } else {
                dom = document.getElementById('designer-dialog-import-file-modal-systems-' + system._id);
                dom.addEventListener('click', callbackSystemEvent);
            }
        }

        // library events  
        var callbackEvent = function (event) {
            var id = '',
                libraries = null,
                length = 0,
                i = 0;

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                that.data(null);
            } else {
                id = this.getAttribute('id').replace('designer-dialog-import-file-modal-library-', '');

                that.data(JSON.parse(decodeURIComponent(that.require(id).source())));

                // remove old active
                libraries = document.getElementById('designer-dialog-import-file-modal-library');

                length = libraries.children.length;
                for (i = 0; i < length; i++) {
                    $(libraries.children[i]).removeClass('active');
                }

                // add current active
                $(this).addClass('active');
            }
        };

        length = libraries.length;
        for (i = 0; i < length; i++) {
            library = this.require(libraries[i]._id);
            dom = document.getElementById('designer-dialog-import-file-modal-library-' + library.id());

            dom.addEventListener('click', callbackEvent);
        }

        dom = document.getElementById('designer-dialog-import-modal-from-file');
        dom.addEventListener('click', function (event) {
            $('#designer-dialog-import-modal-from-file-form').show();
            $('#designer-dialog-import-modal-from-systems-form').hide();
            $('#designer-dialog-import-modal-from-library-form').hide();
            $('#designer-dialog-import-file-modal-import').show();

        }.bind(this));

        dom = document.getElementById('designer-dialog-import-modal-from-library');
        dom.addEventListener('click', function (event) {
            $('#designer-dialog-import-modal-from-library-form').show();
            $('#designer-dialog-import-modal-from-systems-form').hide();
            $('#designer-dialog-import-modal-from-file-form').hide();
            $('#designer-dialog-import-file-modal-import').show();

        }.bind(this));

        dom = document.getElementById('designer-dialog-import-modal-from-systems');
        dom.addEventListener('click', function (event) {
            $('#designer-dialog-import-modal-from-library-form').hide();
            $('#designer-dialog-import-modal-from-systems-form').show();
            $('#designer-dialog-import-modal-from-file-form').hide();
            $('#designer-dialog-import-file-modal-import').hide();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-file-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-file-modal-merge');
        dom.addEventListener('click', function (event) {
            this.mergeSystem();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-file-modal-import');
        dom.addEventListener('click', function (event) {
            this.importSystem();
        }.bind(this));

        dom = document.getElementById('designer-dialog-import-file-modal-file');
        dom.addEventListener('change', function (e) {
            e.stopPropagation();
            e.preventDefault();

            var files = e.target.files,
                reader = new FileReader(),
                json = '',
                that = this;

            reader.onload = function (event) {
                json = json + event.target.result;
            };
            reader.onloadend = function () {
                try {
                    that.data(JSON.parse(json));
                } catch (e) {
                    that.data({});
                }
            };
            reader.readAsText(files[0], 'UTF-8');
        }.bind(this));
    });

    DialogImportFile.on('show', function () {
        $('#designer-dialog-import-file-modal').modal('show');
    });

    DialogImportFile.on('hide', function () {
        $('#designer-dialog-import-file-modal').modal('hide');
    });

    // DIALOG DROP FILE
    var DialogDropFile = this.require('DialogDropFile');
    DialogDropFile.on('init', function (config) {
        var html = null,
            dom = null;

        $('#designer-dialog-drop-file').empty();

        html = this.require('dialog-modal-drop-file.html');
        document.querySelector('#designer-dialog-drop-file').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{message}}/gi, this.message())
        );

        //events
        dom = document.getElementById('designer-dialog-drop-file-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-drop-file-modal-merge');
        dom.addEventListener('click', function (event) {
            this.mergeSystem();
        }.bind(this));

        dom = document.getElementById('designer-dialog-drop-file-modal-import');
        dom.addEventListener('click', function (event) {
            this.importSystem();
        }.bind(this));
    });

    DialogDropFile.on('mergeSystem', function () {
        var sys = null,
            name = '',
            modelName = '',
            propName = '',
            compId = '',
            modelId = '',
            schemaId = '',
            designer = this.require('designer'),
            schemas = {},
            models = {},
            types = {},
            components = {},
            behaviors = {},
            system = designer.system(),
            message = this.require('message');

        sys = this.data();

        function _getModelId(name) {
            var result = '',
                id = '';

            for (id in designer.system().models()) {
                if (designer.system().models()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getSchemaId(name) {
            var result = '',
                id = '';

            for (id in designer.system().schemas()) {
                if (designer.system().schemas()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _existBehavior(component, state, behaviors) {
            var behavior = {},
                id = '',
                result = false;

            for (id in behaviors) {
                behavior = behaviors[id];
                if (behavior.component === component && behavior.state === state) {
                    result = true;
                    break;
                }
            }

            return result;
        }

        function _canMerge(sysId, schemas, behaviors, behavior) {
            var def = {},
                id = '',
                result = true;

            id = _getSchemaId(behavior.component);
            def = schemas[id];

            if (def && (def[behavior.state] === 'method' || def[behavior.state] === 'event')) {
                result = !_existBehavior(behavior.component, behavior.state, behaviors);
            }

            if ((behavior.state === 'main' || behavior.state === 'start' || behavior.state === 'stop') && behavior.component === sysId) {
                result = false;
            }

            return result;
        }

        if (Object.keys(sys).length) {

            // behaviors
            behaviors = JSON.parse(JSON.stringify(designer.system().behaviors()));
            schemas = JSON.parse(JSON.stringify(designer.system().schemas()));

            for (name in sys.behaviors) {
                if (name !== sys._id && _canMerge(sys._id, schemas, behaviors, sys.behaviors[name])) {
                    behaviors[name] = sys.behaviors[name];
                }
            }
            designer.system().behaviors(behaviors);

            // schemas
            schemas = JSON.parse(JSON.stringify(designer.system().schemas()));
            for (name in sys.schemas) {
                if (schemas[name]) {
                    for (propName in sys.schemas[name]) {
                        schemas[name][propName] = sys.schemas[name][propName];
                    }
                } else {
                    if (!_getSchemaId(sys.schemas[name]._name)) {
                        schemas[name] = sys.schemas[name];
                    } else {
                        for (propName in sys.schemas[name]) {
                            if (propName.indexOf('_') !== 0) {
                                schemas[_getSchemaId(sys.schemas[name]._name)][propName] = sys.schemas[name][propName];
                            }
                        }
                    }
                }
            }
            // sync models
            for (schemaId in schemas) {
                designer.syncModel(schemas[schemaId]);
            }

            // models
            models = JSON.parse(JSON.stringify(designer.system().models()));
            for (name in sys.models) {
                if (models[name]) {
                    for (propName in sys.models[name]) {
                        models[name][propName] = sys.models[name][propName];
                    }
                } else {
                    if (!_getModelId(sys.models[name]._name)) {
                        models[name] = sys.models[name];
                    } else {
                        for (propName in sys.models[name]) {
                            if (propName.indexOf('_') !== 0) {
                                models[_getModelId(sys.models[name]._name)][propName] = sys.models[name][propName];
                            }
                        }
                    }
                }
            }
            // sync behaviors and components
            for (modelId in models) {
                designer.syncBehavior(models[modelId]);
            }

            // types
            types = JSON.parse(JSON.stringify(designer.system().types()));
            for (name in sys.types) {
                if (types[name]) {
                    for (propName in sys.types[name]) {
                        types[name][propName] = sys.types[name][propName];
                    }
                } else {
                    types[name] = sys.types[name];
                }
            }

            // components
            components = JSON.parse(JSON.stringify(designer.system().components()));
            for (modelName in sys.components) {
                if (!components[modelName]) {
                    components[modelName] = {};
                }
                for (compId in sys.components[modelName]) {
                    if (components[modelName][compId]) {
                        for (propName in sys.components[modelName][compId]) {
                            components[modelName][compId][propName] = sys.components[modelName][compId][propName];
                        }
                    } else {
                        components[modelName][compId] = sys.components[modelName][compId];
                    }
                }
            }
            designer.system().components(components);

            // sync components
            for (modelId in models) {
                designer.syncComponent(models[modelId]);
            }

            designer.system().schemas(schemas);
            designer.system().models(models);
            designer.system().types(types);
            designer.system().behaviors(behaviors);
            designer.system().components(components);

            designer.save();

            designer.spaces().render();
            designer.workspace().refresh();

            designer.updateRouter();

            this.hide();
            message.success('composition of the system is done.');
        } else {
            message.danger('the system you try to import is invalid.');
        }
    });

    DialogDropFile.on('importSystem', function () {
        var System = this.require('System'),
            sys = null,
            designer = this.require('designer'),
            message = this.require('message');

        if (designer.system()) {
            designer.system().destroy();
        }
        sys = new System(this.data());
        designer.system(sys);

        // empty log
        designer.logs().forEach(function (item) {
            this.logs().pop();
        }.bind(designer));

        designer.save();

        designer.space(sys.name());
        designer.spaces().render();
        designer.workspace().refresh();

        designer.updateRouter();

        this.hide();
        designer.save();

        message.success('importation of the system is done.');
    });

    DialogDropFile.on('show', function () {
        $('#designer-dialog-drop-file-modal').modal('show');
    });

    DialogDropFile.on('hide', function () {
        $('#designer-dialog-drop-file-modal').modal('hide');
    });

    // DIALOG TYPE CREATION
    var dialogTypeCreation = this.require('DialogTypeCreation');
    dialogTypeCreation.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-type-creation').empty();

        html = this.require('dialog-modal-type-creation.html');
        document.querySelector('#designer-dialog-type-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        //events
        dom = document.getElementById('designer-dialog-type-creation-name');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-type-creation-name').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-type-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-type-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

        // focus
        $('#designer-dialog-type-creation-modal').on('shown.bs.modal', function () {
            $('#designer-dialog-type-creation-name').focus();
        });
    });

    dialogTypeCreation.on('show', function () {
        $('#designer-dialog-type-creation-modal').modal('show');
    });

    dialogTypeCreation.on('hide', function () {
        $('#designer-dialog-type-creation-modal').modal('hide');
    });

    // DIALOG EXPORT
    var DialogExport = this.require('DialogExport');
    DialogExport.on('init', function (config) {
        var html = '',
            dom = null,
            system = this.require('designer').system();

        $('#designer-dialog-export').empty();

        html = this.require('dialog-modal-export.html');
        document.querySelector('#designer-dialog-export').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        // default value
        if (system.master() === true) {
            $('#designer-dialog-export-isMaster').attr('checked', true);
        }
        if (system.subsystem() === true) {
            $('#designer-dialog-export-isSubsystem').attr('checked', true);
        }

        //events
        dom = document.getElementById('designer-dialog-export-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-export-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

        dom = document.getElementById('designer-dialog-export-json');
        dom.addEventListener('click', function (event) {
            $('#designer-dialog-export-options').show();
            $('#designer-dialog-export-options-log-level').hide();
        }.bind(this));

        dom = document.getElementById('designer-dialog-export-html');
        dom.addEventListener('click', function (event) {
            $('#designer-dialog-export-options').hide();
            $('#designer-dialog-export-options-log-level').show();
        }.bind(this));

        dom = document.getElementById('designer-dialog-export-node');
        dom.addEventListener('click', function (event) {
            $('#designer-dialog-export-options').hide();
            $('#designer-dialog-export-options-log-level').show();
        }.bind(this));

        dom = document.getElementById('designer-dialog-export-modal');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                this.ok();
                return false;
            }
        }.bind(this));
    });

    DialogExport.on('show', function () {
        $('#designer-dialog-export-modal').modal('show');
    });

    DialogExport.on('hide', function () {
        $('#designer-dialog-export-modal').modal('hide');
    });

    // DIALOG SCHEMA CREATION
    var dialogSchemaCreation = this.require('DialogSchemaCreation');
    dialogSchemaCreation.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-schema-creation').empty();

        html = this.require('dialog-modal-schema-creation.html');
        document.querySelector('#designer-dialog-schema-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        //events
        dom = document.getElementById('designer-dialog-schema-creation-name');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-schema-creation-name').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-schema-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-schema-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

        // focus
        $('#designer-dialog-schema-creation-modal').on('shown.bs.modal', function () {
            $('#designer-dialog-schema-creation-name').focus();
        });
    });

    dialogSchemaCreation.on('show', function () {
        $('#designer-dialog-schema-creation-modal').modal('show');
    });

    dialogSchemaCreation.on('hide', function () {
        $('#designer-dialog-schema-creation-modal').modal('hide');
    });

    // DIALOG SYSTEM CREATION
    var dialogSystemCreation = this.require('DialogSystemCreation');
    dialogSystemCreation.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-system-creation').empty();

        html = this.require('dialog-modal-system-creation.html');
        document.querySelector('#designer-dialog-system-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        //events
        dom = document.getElementById('designer-dialog-system-creation-name');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-system-creation-name').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-system-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-system-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

        // focus
        $('#designer-dialog-system-creation-modal').on('shown.bs.modal', function () {
            $('#designer-dialog-system-creation-name').focus();
        });
    });

    dialogSystemCreation.on('show', function () {
        $('#designer-dialog-system-creation-modal').modal('show');
    });

    dialogSystemCreation.on('hide', function () {
        $('#designer-dialog-system-creation-modal').modal('hide');
    });

    // DIALOG MODEL CREATION
    var dialogModelCreation = this.require('DialogModelCreation');
    dialogModelCreation.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-model-creation').empty();

        html = this.require('dialog-modal-model-creation.html');
        document.querySelector('#designer-dialog-model-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        dom = document.getElementById('designer-dialog-model-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

    });

    dialogModelCreation.on('show', function () {
        $('#designer-dialog-model-creation-modal').modal('show');
    });

    dialogModelCreation.on('hide', function () {
        $('#designer-dialog-model-creation-modal').modal('hide');
    });

    // DIALOG BEHAVIOR CREATION
    var dialogBehaviorCreation = this.require('DialogBehaviorCreation');
    dialogBehaviorCreation.on('init', function (config) {
        var html = '',
            dom = null,
            selectStates = '',
            states = [],
            designer = this.require('designer'),
            space = this.require('designer').space(),
            schemas = designer.system().schemas(),
            models = designer.system().models(),
            schema = '',
            name = '';

        function _findSchemaId(compId) {
            var result = compId,
                modelName = '';

            for (modelName in designer.system().components()) {
                if (typeof designer.system().components()[modelName][compId] !== 'undefined') {
                    result = modelName;
                    break;
                }
            }
            return result;
        }

        function _getSchemaId(name) {
            var result = '',
                id = '';

            for (id in designer.system().schemas()) {
                if (designer.system().schemas()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        $('#designer-dialog-behavior-creation').empty();

        if (space !== designer.system().name()) {
            states = Object.keys(this.require('designer').getGeneratedSchema(_findSchemaId(space)));
        } else {
            states.push('start');
            states.push('stop');
        }

        states.sort();
        states.forEach(
            function (name) {
                selectStates = selectStates + '<option value="' + name + '">' + name + '</option>';
            });

        html = this.require('dialog-modal-behavior-creation.html');
        document.querySelector('#designer-dialog-behavior-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{states}}/gi, selectStates)
        );

        //events
        dom = document.getElementById('designer-dialog-behavior-creation-state');
        dom.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation();
                event.preventDefault();
                if ($('#designer-dialog-behavior-creation-state').val()) {
                    this.ok();
                }
                return false;
            }
        }.bind(this));

        dom = document.getElementById('designer-dialog-behavior-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-behavior-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));

        // focus
        $('#designer-dialog-behavior-creation-modal').on('shown.bs.modal', function () {
            $('#designer-dialog-behavior-creation-state')[0].focus();
        });
    });

    dialogBehaviorCreation.on('show', function () {
        $('#designer-dialog-behavior-creation-modal').modal('show');
    });

    dialogBehaviorCreation.on('hide', function () {
        $('#designer-dialog-behavior-creation-modal').modal('hide');
    });

    // DIALOG COMPONENT CREATION
    var dialogComponentCreation = this.require('DialogComponentCreation');
    dialogComponentCreation.on('init', function (config) {
        var html = '',
            name = '',
            dom = null,
            selectModels = '',
            designer = this.require('designer'),
            models = designer.system().models();

        $('#designer-dialog-component-creation').empty();

        for (name in models) {
            selectModels = selectModels + '<option value="' + name + '">' + name + '</option>';
        }

        html = this.require('dialog-modal-component-creation.html');
        document.querySelector('#designer-dialog-component-creation').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{models}}/gi, selectModels)
        );

        // events
        dom = document.getElementById('designer-dialog-component-creation-modal-cancel');
        dom.addEventListener('click', function (event) {
            this.cancel();
        }.bind(this));

        dom = document.getElementById('designer-dialog-component-creation-modal-ok');
        dom.addEventListener('click', function (event) {
            this.ok();
        }.bind(this));
    });

    dialogComponentCreation.on('show', function () {
        $('#designer-dialog-component-creation-modal').modal('show');
    });

    dialogComponentCreation.on('hide', function () {
        $('#designer-dialog-component-creation-modal').modal('hide');
    });

    // DIALOG RUNTIMECOMPONENT INFO
    var DialogRuntimeComponentInfo = this.require('DialogRuntimeComponentInfo');
    DialogRuntimeComponentInfo.on('init', function (config) {
        var html = '',
            dom = null;

        $('#designer-dialog-runtimecomponent-info').empty();

        html = this.require('dialog-modal-runtimecomponent-info.html');
        document.querySelector('#designer-dialog-runtimecomponent-info').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
        );

        // events
        dom = document.getElementById('designer-dialog-runtimecomponent-info-modal-ok');
        dom.addEventListener('click', function (event) {
            this.hide();
        }.bind(this));

    });

    DialogRuntimeComponentInfo.on('show', function () {
        $('#designer-dialog-runtimecomponent-info-modal').modal('show');
    });

    DialogRuntimeComponentInfo.on('hide', function () {
        $('#designer-dialog-runtimecomponent-info-modal').modal('hide');
    });

    // MODELSYSTEM
    var ModelSystem = this.require('ModelSystem');
    ModelSystem.on('render', function () {
        var html = null,
            that = this,
            doc = '',
            propName = '',
            propVal = '';

        // html 
        html = this.require('model-system.html');

        for (propName in this.document()) {
            if (['name', 'description', 'version'].indexOf(propName) !== -1) {
                propVal = this.document()[propName];
                propVal = propVal.replace(/\n/g, '<br>');
                doc = doc + '<tr><td>' + propName + '</td><td>' + propVal + '</td></tr>';
            }
        }

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{_id}}/gi, this.uuid())
                .replace(/{{content}}/gi, doc)
        );

        // events
        html = document.getElementById('designer-system-' + this.uuid()).children[0].children[1];
        if (html) {
            html.addEventListener('click', function (event) {
                this.require('designer').open('system.html#' + that.uuid() + '#description');
            }.bind(this));
        }

        html = document.getElementById('designer-system-' + this.uuid() + '-edit');
        if (html) {
            html.addEventListener('click', function (event) {
                this.require('designer').open('system.html#' + that.uuid() + '#description');
            }.bind(this));
        }

        html = document.getElementById('designer-system-' + this.uuid() + '-export');
        if (html) {
            html.addEventListener('click', function (event) {
                var name = this.document().name;
                var document = JSON.parse(JSON.stringify(this.document()));
                delete document.classInfo;
                this.require('designer').saveAs(document, this.document().name + '.json');
            }.bind(this));
        }

        html = document.getElementById('designer-system-' + this.uuid() + '-delete');
        if (html) {
            html.addEventListener('click', function (event) {
                var systems = this.require('storage').get('system-designer-systems'),
                    designer = this.require('designer'),
                    System = this.require('System'),
                    systemId = this.uuid();

                // remove from storage
                this.require('storage').remove(systemId);
                systems.systems.splice(systems.systems.indexOf(systemId), 1);
                this.require('storage').set('system-designer-systems', systems);

                designer.system().destroy();

                // remove log
                designer.logs().forEach(function (item) {
                    this.logs().pop();
                }.bind(designer));

                // set default system
                if (systems.systems.length) {
                    designer.system(new System(this.require('storage').get(systems.systems[0])));
                }

                $('#designer-system-' + this.uuid()).remove();
                this.destroy();

                //designer.save();

                designer.space('');
                designer.spaces().render();
                designer.workspace().refresh();
            }.bind(this));
        }
    });

    ModelSystem.on('hide', function () {
        $('#designer-system-' + this.uuid()).hide();
    });

    ModelSystem.on('show', function () {
        $('#designer-system-' + this.uuid()).show();
    });

    // MODELTYPE
    var ModelType = this.require('ModelType');
    ModelType.on('render', function () {
        var html = null,
            that = this,
            doc = '',
            propName = '',
            propVal = '',
            systemId = '';

        systemId = this.require('designer').system().id();


        function _getModelId(name) {
            var result = '',
                id = '';

            for (id in that.require('designer').system().models()) {
                if (that.require('designer').system().models()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getLink(propName, val) {
            var result = '';

            if (!Array.isArray(val)) {
                if (val.indexOf('@') !== -1) {
                    if (val !== '@RuntimeComponent') {
                        result = '<div class="list-group-item" style="text-align: left">' + propName + '<a href="#' + that.require('designer').system().id() + '#models#' + _getModelId(val.replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + val.replace('@', '') + '</a></div>';
                    } else {
                        result = '<div class="list-group-item" style="text-align: left">' + propName + val.replace('@', '') + '</div>';
                    }
                } else {
                    if (['any', 'boolean', 'string', 'number', 'object', 'function', 'array', 'html', 'javascript', 'css'].indexOf(val) === -1) {
                        result = '<div class="list-group-item" style="text-align: left">' + propName + '<a href="#' + that.require('designer').system().id() + '#types#' + val + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + val + '</a></div>';
                    } else {
                        result = '<div class="list-group-item" style="text-align: left">' + propName + val + '</div>';
                    }
                }
            } else {
                if (val[0].indexOf('@') !== -1) {
                    if (val[0] !== '@RuntimeComponent') {
                        result = '<div class="list-group-item" style="text-align: left">' + propName + '<a href="#' + that.require('designer').system().id() + '#models#' + _getModelId(val[0].replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + val[0].replace('@', '') + '</a> [ ]</div>';
                    } else {
                        result = '<div class="list-group-item" style="text-align: left">' + propName + val[0].replace('@', '') + ' [ ]</div>';
                    }
                } else {
                    if (['any', 'boolean', 'string', 'number', 'object', 'function', 'array', 'html', 'javascript', 'css'].indexOf(val[0]) === -1) {
                        result = '<div class="list-group-item" style="text-align: left">' + propName + '<a href="#' + that.require('designer').system().id() + '#types#' + val[0] + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + val[0].replace('@', '') + '</a> [ ]</div>';
                    } else {
                        result = '<div class="list-group-item" style="text-align: left">' + propName + val[0] + ' [ ]</div>';
                    }
                }
            }

            return result;
        }

        // html 
        html = this.require('model-type.html');

        if (this.document().schema) {
            for (propName in this.document().schema) {
                if (this.document().schema.hasOwnProperty(propName)) {
                    propVal = this.document().schema[propName].type;
                    doc = doc + _getLink(propName + ' : ', propVal);
                }
            }
        }

        if (this.document().value) {
            this.document().value.forEach(function (val) {
                doc = doc + '<div class="list-group-item" style="text-align: left">' + val + '</div>';
            });
        }


        if (!this.document().schema && !this.document().value) {
            propVal = this.document().type;
            doc = doc + '<div class="list-group-item" style="text-align: left"><i>alias</i> : ' + propVal + '</div>';
        }

        if (doc === '') {
            doc = doc + '<a class="list-group-item" style="text-align: left"><br/><br/></a>';
        }

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{id}}/gi, this.uuid())
                .replace(/{{content}}/gi, doc)
        );

        // events
        html = document.getElementById('designer-type-' + this.uuid()).children[0].children[1];
        if (html) {
            html.addEventListener('click', function (event) {
                this.require('designer').open('type.html#' + that.uuid() + '#' + systemId);
            }.bind(this));
        }

        html = document.getElementById('designer-type-' + this.uuid() + '-edit');
        if (html) {
            html.addEventListener('click', function (event) {
                this.require('designer').open('type.html#' + that.uuid() + '#' + systemId);
            }.bind(this));
        }

        html = document.getElementById('designer-type-' + this.uuid() + '-export');
        if (html) {
            html.addEventListener('click', function (event) {
                var document = {
                    "name": "type " + this.document().name,
                    "master": false,
                    "subsystem": true,
                    "version": "0.0.1",
                    "description": "Type " + this.document().name,
                    "schemas": {},
                    "models": {},
                    "behaviors": {},
                    "types": {},
                    "components": {}
                };

                // clean
                document.name = document.name.trim();
                document.name = document.name.replace(/ /gi, '-');
                document.name = document.name.toLocaleLowerCase();

                document.types[this.document().name] = this.document();

                this.require('designer').saveAs(document, this.document().name.replace(/ /gi, '-').toLowerCase() + '.json');
            }.bind(this));
        }

        html = document.getElementById('designer-type-' + this.uuid() + '-delete');
        if (html) {
            html.addEventListener('click', function (event) {
                var designer = this.require('designer');
                types = designer.system().types();


                delete types[this.title()];
                designer.system().types(types);

                $('#designer-type-' + this.title()).remove();

                this.require('channel').$designerDeleteType(this.uuid());

                this.destroy();
                designer.save();

                designer.space('');
                designer.spaces().render();
                designer.workspace().refresh();
            }.bind(this));
        }
    });

    ModelType.on('hide', function () {
        $('#designer-type-' + this.title()).hide();
    });

    ModelType.on('show', function () {
        $('#designer-type-' + this.title()).show();
    });

    // MODELSCHEMA
    var ModelSchema = this.require('ModelSchema');
    ModelSchema.on('render', function () {
        var html = null,
            doc = '',
            that = this,
            propName = '',
            propVal = '',
            htmlId = '';

        htmlId = this.uuid() || this.title();
        systemId = this.require('designer').system().id();

        // html 
        html = this.require('model-schema.html');
        for (propName in this.document()) {
            if (this.document().hasOwnProperty(propName) && propName.indexOf('_') !== 0) {
                propVal = this.document()[propName];
                doc = doc + '<tr><td>' + propName + '</td><td>' + propVal + '</td></tr>';
            }
        }

        if (doc === '') {
            doc = doc + '<tr><td><br/><br/><br/></td><td><br/><br/><br/></td></tr>';
        }

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            html.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{id}}/gi, htmlId)
                .replace(/{{content}}/gi, doc)
        );

        //events
        if (this.editable()) {
            html = document.getElementById('designer-schema-' + htmlId).children[0].children[1];

            if (html) {
                html.addEventListener('click', function (event) {
                    this.require('designer').open('schema.html#' + that.uuid() + '#' + systemId);
                }.bind(this));
            }

            html = document.getElementById('designer-schema-' + htmlId + '-edit');
            if (html) {
                html.addEventListener('click', function (event) {
                    this.require('designer').open('schema.html#' + that.uuid() + '#' + systemId);
                }.bind(this));
            }

            html = document.getElementById('designer-schema-' + htmlId + '-export');
            if (html) {
                html.addEventListener('click', function (event) {
                    var document = {
                        "name": "schema " + this.document()._name,
                        "master": false,
                        "subsystem": true,
                        "version": "0.0.1",
                        "description": "Schema " + this.document()._name,
                        "schemas": {},
                        "models": {},
                        "behaviors": {},
                        "types": {},
                        "components": {}
                    };

                    // clean
                    document.name = document.name.trim();
                    document.name = document.name.replace(/ /gi, '-');
                    document.name = document.name.toLocaleLowerCase();

                    document.schemas[this.document()._id] = this.document();

                    this.require('designer').saveAs(document, this.document()._name.replace(/ /gi, '-').toLowerCase() + '.json');
                }.bind(this));
            }

            html = document.getElementById('designer-schema-' + htmlId + '-delete');
            if (html) {
                html.addEventListener('click', function (event) {
                    var designer = this.require('designer');

                    designer.deleteSchema(this.uuid());

                    $('#designer-schema-' + this.uuid()).remove();

                    this.require('channel').$designerDeleteSchema(this.uuid());

                    this.destroy();

                    jsPlumb.deleteEveryEndpoint();

                    designer.save();

                    designer.space('');
                    designer.spaces().render();
                    designer.workspace().refresh();
                }.bind(this));
            }
        } else {
            $('#designer-schema-' + htmlId + ' > div > div > div > button').hide();

            html = document.getElementById('designer-schema-' + htmlId).children[0].children[1];
            if (html) {
                html.addEventListener('click', function (event) {
                    var DialogRuntimeComponentInfo = null;

                    if (this.title() !== 'RuntimeComponent') {
                        if (this.require('designer').system().schemas()[that.uuid()]) {
                            this.require('designer').open('index.html#' + this.require('designer').system().id() + '#schemas#' + that.uuid(), '_self');
                        } else {
                            this.require('message').warning('Your schema \‘' + that.title() + '\’ has not been yet created.');
                        }
                    } else {
                        DialogRuntimeComponentInfo = this.require('DialogRuntimeComponentInfo');
                        DialogRuntimeComponentInfo = new DialogRuntimeComponentInfo({
                            'title': 'RuntimeComponent schema'
                        });
                        DialogRuntimeComponentInfo.show();
                    }
                }.bind(this));
            }
        }
    });

    ModelSchema.on('hide', function () {
        $('#designer-schema-' + this.uuid()).hide();
    });

    ModelSchema.on('show', function () {
        $('#designer-schema-' + this.uuid()).show();
    });

    // MODELCLASS
    var ModelClass = this.require('ModelClass');
    ModelClass.on('render', function () {
        var html = null,
            that = this,
            propName = '',
            attributes = '',
            collections = '',
            methods = '',
            events = '',
            propVal = '',
            result = '',
            callbackProp = null,
            htmlId = '',
            htmlComp = null,
            systemId = '';

        htmlId = this.uuid() || this.title();
        systemId = this.require('designer').system().id();

        callbackProp = function (param) {
            if (param.type.indexOf('@') !== -1) {
                params = params + param.name + ' : <a href="#' + this.require('designer').system().id() + '#models#' + _getModelId(param.type.replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + param.type.replace('@', '') + '</a>' + ', ';
            } else {
                if (['any', 'boolean', 'string', 'number', 'object', 'function', 'array', 'html', 'javascript', 'css', 'errorParam'].indexOf(param.type) === -1) {
                    params = params + param.name + ' : <a href="#' + this.require('designer').system().id() + '#types#' + param.type + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + param.type.replace('@', '') + '</a>' + ', ';
                } else {
                    params = params + param.name + ' : ' + param.type + ', ';
                }
            }
        };

        function _getModelId(name) {
            var result = '',
                id = '';

            for (id in that.require('designer').system().models()) {
                if (that.require('designer').system().models()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        for (propName in this.document()) {
            if (this.document().hasOwnProperty(propName)) {
                propVal = this.document()[propName];

                switch (true) {
                    case typeof propVal.type !== 'undefined':
                        if (!Array.isArray(propVal.type)) {
                            if (propVal.type.indexOf('@') !== -1) {
                                if (htmlId !== '123751cb591de26' && propVal.type !== '@RuntimeComponent') {
                                    attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : <a href="#' + this.require('designer').system().id() + '#models#' + _getModelId(propVal.type.replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propVal.type.replace('@', '') + '</a></div>';
                                } else {
                                    attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : ' + propVal.type.replace('@', '') + '</div>';
                                }
                            } else {
                                if (['any', 'boolean', 'string', 'number', 'object', 'function', 'array', 'html', 'javascript', 'css'].indexOf(propVal.type) === -1) {
                                    if (htmlId !== '123751cb591de26') {
                                        attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : <a href="#' + this.require('designer').system().id() + '#types#' + propVal.type + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propVal.type + '</a></div>';
                                    } else {
                                        attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : ' + propVal.type + '</div>';
                                    }
                                } else {
                                    attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : ' + propVal.type + '</div>';
                                }
                            }
                        } else {
                            if (propVal.type[0].indexOf('@') !== -1) {
                                if (htmlId !== '123751cb591de26') {
                                    attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : <a href="#' + this.require('designer').system().id() + '#models#' + _getModelId(propVal.type[0].replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propVal.type[0].replace('@', '') + '</a> [ ]</div>';
                                } else {
                                    attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : ' + propVal.type[0].replace('@', '') + ' [ ]</div>';
                                }
                            } else {
                                if (['any', 'boolean', 'string', 'number', 'object', 'function', 'array', 'html', 'javascript', 'css'].indexOf(propVal.type[0]) === -1) {
                                    if (htmlId !== '123751cb591de26') {
                                        attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : <a href="#' + this.require('designer').system().id() + '#types#' + propVal.type[0] + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propVal.type[0].replace('@', '') + '</a> [ ]</div>';
                                    } else {
                                        attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : ' + propVal.type[0].replace('@', '') + ' [ ]</div>';
                                    }
                                } else {
                                    attributes = attributes + '<div class="list-group-item" style="text-align: left">+ ' + propName + ' : ' + propVal.type[0] + ' [ ]</div>';
                                }
                            }
                        }
                        break;
                    case typeof propVal.params !== 'undefined':
                        result = 'undefined';
                        var params = '(';
                        propVal.params.forEach(callbackProp.bind(this));
                        params = params + ')';
                        params = params.replace(', )', ')');

                        if (typeof propVal.result !== 'undefined') {
                            result = propVal.result;
                            if (htmlId !== '123751cb591de26') {
                                if (result.indexOf('@') !== -1) {
                                    result = '<a href="#' + this.require('designer').system().id() + '#models#' + _getModelId(result.replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + result.replace('@', '') + '</a>';
                                }
                                methods = methods + '<div class="list-group-item" style="text-align: left">+ <a href="#' + this.require('designer').system().id() + '#behaviors#' + this.document()._name + '#' + propName + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propName + '</a>' + params + ' : ' + result + '</div>';
                            } else {
                                methods = methods + '<div class="list-group-item" style="text-align: left">+ ' + propName + params + ' : ' + result + '</div>';
                            }
                        } else {
                            if (htmlId !== '123751cb591de26') {
                                if (result.indexOf('@') !== -1) {
                                    result = '<a href="#' + this.require('designer').system().id() + '#models#' + _getModelId(result.replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + result.replace('@', '') + '</a>';
                                }
                                methods = methods + '<div class="list-group-item" style="text-align: left">+ <a href="#' + this.require('designer').system().id() + '#behaviors#' + this.document()._name + '#' + propName + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propName + '</a>' + params + '</div>';
                            } else {
                                methods = methods + '<div class="list-group-item" style="text-align: left">+ ' + propName + params + '</div>';
                            }
                        }


                        break;
                    case propName.indexOf('_') !== -1:
                        if (propName !== '_id' && propName !== '_name') {
                            // doc = doc + '<a href="#" class="list-group-item" style="text-align: left">' + propName.replace('_', '') + ' ' + propVal + '</a>';
                        }
                        break;
                    default:
                        result = 'undefined';
                        if (typeof propVal.result !== 'undefined') {
                            result = propVal.result;

                            if (htmlId !== '123751cb591de26') {
                                if (result.indexOf('@') !== -1) {
                                    result = '<a href="#' + this.require('designer').system().id() + '#models#' + _getModelId(result.replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + result.replace('@', '') + '</a>';
                                }
                                methods = methods + '<div class="list-group-item" style="text-align: left">+ <a href="#' + this.require('designer').system().id() + '#behaviors#' + this.document()._name + '#' + propName + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propName + '</a>(): ' + result + '</div>';
                            } else {
                                methods = methods + '<div class="list-group-item" style="text-align: left">+ ' + propName + '(): ' + result + '</div>';
                            }
                        } else {
                            if (htmlId !== '123751cb591de26') {
                                if (result.indexOf('@') !== -1) {
                                    result = '<a href="#' + this.require('designer').system().id() + '#models#' + _getModelId(result.replace('@', '')) + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + result.replace('@', '') + '</a>';
                                }
                                methods = methods + '<div class="list-group-item" style="text-align: left">+ <a href="#' + this.require('designer').system().id() + '#behaviors#' + this.document()._name + '#' + propName + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propName + '</a>()</div>';
                            } else {
                                methods = methods + '<div class="list-group-item" style="text-align: left">+ ' + propName + '()</div>';
                            }
                        }
                        break;
                }
            }
        }


        if (attributes === '') {
            attributes = attributes + '<a class="list-group-item" style="text-align: left"><br/></a>';
        }
        if (methods === '') {
            methods = methods + '<a class="list-group-item" style="text-align: left"><br/></a>';
        }

        // html 
        htmlComp = this.require('model-class.html');

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            htmlComp.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{_id}}/gi, htmlId)
                .replace(/{{attributes}}/gi, attributes)
                .replace(/{{collections}}/gi, collections)
                .replace(/{{methods}}/gi, methods)
                .replace(/{{events}}/gi, events)
        );

        // events
        if (this.editable()) {
            html = document.getElementById('designer-model-' + htmlId).children[0].children[1];
            if (html) {
                html.addEventListener('click', function (event) {
                    this.require('designer').open('model.html#' + that.uuid() + '#' + systemId);
                }.bind(this));
            }

            html = document.getElementById('designer-model-' + htmlId + '-export');
            if (html) {
                html.addEventListener('click', function (event) {
                    var document = {
                        "name": "model " + this.document()._name,
                        "master": false,
                        "subsystem": true,
                        "version": "0.0.1",
                        "description": "Model " + this.document()._name,
                        "schemas": {},
                        "models": {},
                        "behaviors": {},
                        "types": {},
                        "components": {}
                    };

                    // clean
                    document.name = document.name.trim();
                    document.name = document.name.replace(/ /gi, '-');
                    document.name = document.name.toLocaleLowerCase();

                    document.models[this.document()._id] = this.document();

                    this.require('designer').saveAs(document, this.document()._name.replace(/ /gi, '-').toLowerCase() + '.json');
                }.bind(this));
            }

            html = document.getElementById('designer-model-' + htmlId + '-edit');
            if (html) {
                html.addEventListener('click', function (event) {
                    this.require('designer').open('model.html#' + that.uuid() + '#' + systemId);
                }.bind(this));
            }
        } else {
            $('#designer-model-' + htmlId + ' > div > div > div > button').hide();

            html = document.getElementById('designer-model-' + htmlId).children[0].children[1];
            if (html) {
                html.addEventListener('click', function (event) {
                    var DialogRuntimeComponentInfo = null;

                    if (this.title() !== 'RuntimeComponent') {
                        if (this.require('designer').system().models()[that.uuid()]) {
                            this.require('designer').open('index.html#' + this.require('designer').system().id() + '#models#' + that.uuid(), '_self');
                        } else {
                            this.require('message').warning('Your schema \‘' + that.title() + '\’ has not been yet created.');
                        }
                    } else {
                        DialogRuntimeComponentInfo = this.require('DialogRuntimeComponentInfo');
                        DialogRuntimeComponentInfo = new DialogRuntimeComponentInfo({
                            'title': 'RuntimeComponent model'
                        });
                        DialogRuntimeComponentInfo.show();
                    }
                }.bind(this));
            }
        }
    });

    ModelClass.on('hide', function () {
        $('#designer-class-' + this.uuid()).hide();
    });

    ModelClass.on('show', function () {
        $('#designer-class-' + this.uuid()).show();
    });

    // MODELBEHAVIOR
    var ModelBehavior = this.require('ModelBehavior');
    ModelBehavior.on('render', function () {
        var template = '',
            html = null,
            that = this,
            systemId = '';

        systemId = this.require('designer').system().id();

        // html 
        template = this.require('model-behavior.html');

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            template.source()
                .replace(/{{_id}}/gi, this.uuid())
                .replace(/{{title}}/gi, this.title())
                .replace(/{{content}}/gi, this.content())
        );

        //events
        html = document.getElementById('designer-behavior-' + this.uuid()).children[0].children[1];
        if (html) {
            html.addEventListener('click', function (event) {
                this.require('designer').open('behavior.html#' + that.uuid() + '#' + systemId + '#action');
            }.bind(this));
        }

        html = document.getElementById('designer-behavior-' + this.uuid() + '-edit');
        if (html) {
            html.addEventListener('click', function (event) {
                this.require('designer').open('behavior.html#' + that.uuid() + '#' + systemId + '#action');
            }.bind(this));
        }

        html = document.getElementById('designer-behavior-' + this.uuid() + '-export');
        if (html) {
            html.addEventListener('click', function (event) {
                var name = this.document().state;
                var document = {
                    "name": "behavior " + name,
                    "master": false,
                    "subsystem": true,
                    "version": "0.0.1",
                    "description": "Behavior " + name,
                    "schemas": {},
                    "models": {},
                    "behaviors": {},
                    "types": {},
                    "components": {}
                };

                // clean
                document.name = document.name.trim();
                document.name = document.name.replace(/ /gi, '-');
                document.name = document.name.toLocaleLowerCase();

                document.behaviors[this.document()._id] = this.document();

                this.require('designer').saveAs(document, name.replace(/ /gi, '-').toLowerCase() + '.json');
            }.bind(this));
        }

        html = document.getElementById('designer-behavior-' + this.uuid() + '-delete');
        if (html) {
            html.addEventListener('click', function (event) {
                var designer = this.require('designer');
                behaviors = designer.system().behaviors();

                delete behaviors[this.uuid()];
                designer.system().behaviors(behaviors);

                $('#designer-behavior-' + this.uuid()).fadeOut(400, function () {
                    $(this).remove();
                });

                this.require('channel').$designerDeleteBehavior(this.uuid());

                this.destroy();
                designer.save();
            }.bind(this));
        }
    });

    ModelBehavior.on('hide', function () {
        $('#designer-behavior-' + this.uuid()).hide();
    });

    ModelBehavior.on('show', function () {
        $('#designer-behavior-' + this.uuid()).show();
    });

    // MODELCOMPONENT
    var ModelComponent = this.require('ModelComponent');
    ModelComponent.on('render', function () {
        var htmlComp = null,
            html = null,
            doc = '',
            that = this,
            propName = '',
            propVal = '',
            value = '',
            systemId = '',
            links = '',
            modelName = '',
            schema = null;

        function _getSchema(name) {
            var result = '',
                id = '';

            for (id in that.require('designer').system().schemas()) {
                if (that.require('designer').system().schemas()[id]._name === name) {
                    result = that.require('designer').system().schemas()[id];
                    break;
                }
            }
            return result;
        }

        function _getModel(name) {
            var result = '',
                id = '';

            for (id in that.require('designer').system().models()) {
                if (that.require('designer').system().models()[id]._name === name) {
                    result = that.require('designer').system().models()[id];
                    break;
                }
            }
            return result;
        }

        function _getModelFromComponent(id) {
            var result = '',
                modelName = '',
                componentId = '';

            for (modelName in that.require('designer').system().components()) {
                for (componentId in that.require('designer').system().components()[modelName]) {
                    if (componentId === id) {
                        result = modelName;
                        break;
                    }
                }
            }
            return result;
        }

        function _createLink(id) {
            var modelName = model[propName].type[0].replace('@', ''),
                components = that.require('designer').system().components();

            if (modelName === 'RuntimeComponent') {
                modelName = _getModelFromComponent(id);
            }

            links = links + '<a href="#' + runtime.require('designer').system().id() + '#components#' + modelName + '#' + id + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + id + '</a>,<br>';
        }

        systemId = this.require('designer').system().id();
        schema = _getSchema(this.model());
        model = _getModel(this.model());

        for (propName in this.document()) {
            if (this.document().hasOwnProperty(propName) && propName !== '_id') {
                propVal = this.document()[propName];
                value = JSON.stringify(propVal);

                switch (true) {
                    case schema[propName] === 'link':
                        if (typeof propVal === 'string') {
                            modelName = model[propName].type.replace('@', '');
                            if (modelName === 'RuntimeComponent') {
                                modelName = _getModelFromComponent(propVal);
                            }

                            doc = doc + '<tr><td>' + propName + '</td><td><a href="#' + this.require('designer').system().id() + '#components#' + modelName + '#' + propVal + '" onclick="(function (e) {e.stopPropagation();})(arguments[0])">' + propVal + '</a></td></tr>';
                        } else {
                            doc = doc + '<tr><td>' + propName + '</td><td>' + value + '</td></tr>';
                        }
                        break;
                    case schema[propName] === 'collection':
                        if (Array.isArray(propVal) && model[propName].type[0].indexOf('@') !== -1) {
                            propVal.forEach(_createLink);
                            doc = doc + '<tr><td>' + propName + '</td><td>[' + links + ']</td></tr>';
                            doc = doc.replace(',<br>]', ']');
                        } else {
                            if (value.length < 25) {
                                doc = doc + '<tr><td>' + propName + '</td><td>' + value + '</td></tr>';
                            } else {
                                doc = doc + '<tr><td>' + propName + '</td><td>' + value.substring(0, 25) + ' ...</td></tr>';
                            }
                        }
                        break;
                    default:
                        if (value.length < 25) {
                            if (typeof propVal === 'string') {
                                doc = doc + '<tr><td>' + propName + '</td><td>' + propVal + '</td></tr>';
                            } else {
                                doc = doc + '<tr><td>' + propName + '</td><td>' + value + '</td></tr>';
                            }
                        } else {
                            if (typeof propVal === 'string') {
                                doc = doc + '<tr><td>' + propName + '</td><td>' + propVal.substring(0, 25) + ' ...</td></tr>';
                            } else {
                                doc = doc + '<tr><td>' + propName + '</td><td>' + value.substring(0, 25) + ' ...</td></tr>';
                            }
                        }
                        break;
                }
            }
        }

        if (doc === '') {
            doc = doc + '<tr><td><br/><br/></td><td><br/><br/></td></tr>';
        }

        // html 
        htmlComp = this.require('model-component.html');

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            htmlComp.source()
                .replace(/{{title}}/gi, this.title())
                .replace(/{{_id}}/gi, this.uuid().replace(/\./g, '-'))
                .replace(/{{content}}/gi, doc)
        );

        // events
        html = document.getElementById('designer-component-' + this.uuid().replace(/\./g, '-')).children[0].children[1];
        if (html) {
            html.addEventListener('click', function (event) {
                this.require('designer').open('component.html#' + encodeURIComponent(that.title()) + '#' + encodeURIComponent(that.model()) + '#' + systemId);
            }.bind(this));
        }

        html = document.getElementById('designer-component-' + this.uuid().replace(/\./g, '-') + '-edit');
        if (html) {
            html.addEventListener('click', function (event) {
                this.require('designer').open('component.html#' + encodeURIComponent(that.title()) + '#' + encodeURIComponent(that.model()) + '#' + systemId);
            }.bind(this));
        }

        html = document.getElementById('designer-component-' + this.uuid().replace(/\./g, '-') + '-export');
        if (html) {
            html.addEventListener('click', function (event) {
                var name = this.document()._id;
                var document = {
                    "name": "component " + name,
                    "master": false,
                    "subsystem": true,
                    "version": "0.0.1",
                    "description": "Component " + name,
                    "schemas": {},
                    "models": {},
                    "behaviors": {},
                    "types": {},
                    "components": {}
                };

                // clean
                document.name = document.name.trim();
                document.name = document.name.replace(/ /gi, '-');
                document.name = document.name.toLocaleLowerCase();

                if (typeof document.models[this.model()]) {
                    document.components[this.model()] = {};
                }

                document.components[this.model()][this.document()._id] = this.document();

                this.require('designer').saveAs(document, name.replace(/ /gi, '-').toLowerCase() + '.json');
            }.bind(this));
        }

        html = document.getElementById('designer-component-' + this.uuid().replace(/\./g, '-') + '-delete');
        if (html) {
            html.addEventListener('click', function (event) {
                var designer = this.require('designer'),
                    components = designer.system().components();

                delete components[this.model()][this.uuid()];
                designer.system().components(components);

                $('#designer-component-' + this.uuid().replace(/\./g, '-')).fadeOut(400, function () {
                    $(this).remove();
                });

                this.require('channel').$designerDeleteComponent(this.uuid(), this.model());

                this.destroy();
                designer.save();

            }.bind(this));
        }
    });

    ModelComponent.on('hide', function () {
        $('#designer-component-' + this.uuid()).hide();
    });

    ModelComponent.on('show', function () {
        $('#designer-component-' + this.uuid()).show();
    });

    // MODELLOG
    var ModelLog = this.require('ModelLog');
    ModelLog.on('render', function () {
        var html = null,
            that = this,
            doc = '',
            propName = '',
            propVal = '',
            logs = '';

        // html 
        htmlComp = this.require('model-log.html');

        // logs
        this.require('designer').logs().forEach(function (log) {
            switch (log.type()) {
                case 'debug':
                    logs = logs + '<p class="text-muted">' + log.log() + '</p>';
                    break;
                case 'info':
                    logs = logs + '<p class="text-info">' + log.log() + '</p>';
                    break;
                case 'warn':
                    logs = logs + '<p class="text-warning">' + log.log() + '</p>';
                    break;
                case 'error':
                    logs = logs + '<p class="text-danger">' + log.log() + '</p>';
                    break;
                default:
                    break;
            }
        });

        document.querySelector('#designer-workspace').insertAdjacentHTML('afterbegin',
            htmlComp.source()
                .replace('{{logs}}', logs)
        );

        // events       
        html = document.getElementById('designer-log-clean');

        html.addEventListener('click', function (event) {
            this.require('designer').logs().forEach(function (item) {
                this.logs().pop();
            }.bind(this.require('designer')));
            document.querySelector('#designer-loug-output').innerHTML = '';
        }.bind(this));
    });

    ModelLog.on('hide', function () {
        $('#designer-log').hide();
    });

    ModelLog.on('show', function () {
        $('#designer-log').show();
    });

    // MenuBar
    var MenuBar = this.require('MenuBar');
    MenuBar.on('init', function (conf) {
        var menuHeader = [],
            menuItems = [],
            menuActions = [],
            menuSearch = [],
            self = this;

        // menu header
        menuHeader = this.require('db').collections().MenuHeader.find({
            "type": "designer"
        });
        this.header(this.require(menuHeader[0]._id));

        // menu items
        menuItems = this.require('db').collections().MenuItem.find({
            "type": "designer"
        });

        menuItems.sort(function (itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        menuItems.forEach(function (menuItem) {
            var id = menuItem._id;
            self.items().push(self.require(id));
        });

        // menu actions
        menuActions = this.require('db').collections().MenuAction.find({
            "type": "designer"
        });
        /*
                menuSearch = this.require('db').collections().MenuSearch.find({
                    "type": "designer"
                })
                menuActions = menuActions.concat(menuSearch);
        */

        menuActions.sort(function (itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        menuActions.forEach(function (menuAction) {
            var id = menuAction._id;
            self.actions().push(self.require(id));
        });

    });

    MenuBar.on('render', function () {
        var length = 0,
            i = 0,
            item = null,
            domHeader = document.getElementById('designer-menubar-header'),
            domItems = document.getElementById('designer-menubar-items'),
            domAction = document.getElementById('designer-menubar-actions'),
            self = this,
            arr = window.location.href.split('#'),
            params = window.location.href.split('?messages='),
            messages = [],
            context = 'system',
            space = '',
            designer = this.require('designer');

        function _removeActive() {
            var length = 0,
                i = 0,
                item = null;

            length = domItems.children.length;
            for (i = 0; i < length; i++) {
                item = domItems.children[i];
                $(item).removeClass('active');
            }
        }

        // header
        domHeader.insertAdjacentHTML('afterbegin', this.header().html().source());

        // items
        this.items().forEach(function (item) {
            domItems.insertAdjacentHTML('beforeend', '<li>' + item.html().source() + '</>');
        });

        // events
        var callback = function () {
            _removeActive();
            $(this).addClass('active');
        };
        length = domItems.children.length;
        for (i = 0; i < length; i++) {
            item = domItems.children[i];
            item.addEventListener('click', callback);
            item.addEventListener('click', function () {
                this.click();
            }.bind(self.items(i)));
        }

        // actions
        this.actions().forEach(function (action) {
            domAction.insertAdjacentHTML('afterbegin', '<li>' + action.html().source() + '</>');
        });

        // focus on first element
        // or restore the context
        if (arr.length > 2 && arr[2].length !== 0) {
            context = arr[2];
            context = context.split('?')[0];
        }
        if (arr.length > 3) {
            space = arr[3];
            space = space.split('?')[0];
        }
        if (arr.length > 4) {
            designer.state().component(arr[4].split('?')[0]);
        }

        for (i = 0; i < length; i++) {
            if (this.items(i).name() === context) {
                item = domItems.children[i];
                $(item).addClass('active');
            }
        }
        if (space) {
            designer.space(space);
        }
        designer.context(context);

        var that = this;
        $('#designer-menu-action-search').on('keyup', function (event) {
            var value = $('#designer-menu-action-search').val();
            that.designer().filter(value);
        });

        designer.updateRouter();

        // run messages
        if (params[1]) {
            messages = JSON.parse(decodeURIComponent(params[1]));
            designer.messages(messages);
        }
    });

    // ToolBar
    var ToolBar = this.require('ToolBar');
    ToolBar.on('init', function (conf) {
        var toolBarItems = [],
            self = this;

        // items
        toolBarItems = this.require('db').collections().ToolBarItem.find({
            "type": "designer"
        });

        // sort items
        toolBarItems.sort(function (itemA, itemB) {
            if (itemA.position > itemB.position) {
                return 1;
            }
            if (itemA.position < itemB.position) {
                return -1;
            }
            return 0;
        });

        toolBarItems.forEach(function (toolBarItem) {
            var id = toolBarItem._id;
            self.items().push(self.require(id));
        });
    });

    ToolBar.on('render', function () {
        var domItems = document.getElementById('designer-toolbar-items'),
            i = 0,
            length = 0,
            item = null,
            self = this;

        // items
        this.items().forEach(function (item) {
            domItems.insertAdjacentHTML('beforeend', '<li>' + item.html().source() + '</>');
        });

        // events
        length = domItems.children.length;
        for (i = 0; i < length; i++) {
            item = domItems.children[i];
            item.addEventListener('click', function (e) {
                if (e.detail !== 2) {
                    this.click();
                }
            }.bind(self.items(i)));
        }
    });

    // Spaces
    var Spaces = this.require('Spaces');
    Spaces.on('init', function (conf) {
    });

    Spaces.on('clear', function () {
        this.require('designer').space('');
        $('#designer-spaces-items').empty();
    });

    Spaces.on('render', function () {
        var item = null,
            system = this.designer().system(),
            SpaceItem = this.require('SpaceItem'),
            spaceItem = null,
            space = '',
            id = '',
            domItems = document.getElementById('designer-spaces-items'),
            systemdomItems = document.getElementById('designer-spaces-system-items'),
            componentdomItems = document.getElementById('designer-spaces-components-items'),
            self = this,
            name = '',
            callback = null,
            modelsName = [],
            showComponents = false,
            modelName = '',
            componentId = '';

        function _removeActive() {
            var length = 0,
                i = 0,
                item = null;

            length = domItems.children.length;
            for (i = 0; i < length; i++) {
                item = domItems.children[i];
                $(item).removeClass('active');
            }
        }

        function _findModel(compId, components) {
            var result = '',
                modelName = '';

            for (modelName in components) {
                if (typeof components[modelName][compId] !== 'undefined') {
                    result = modelName;
                    break;
                }
            }
            return result;
        }

        $('#designer-spaces-help').empty();

        // update header and help
        switch (this.designer().context()) {
            case 'system':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Systems';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-system.html').source());
                break;
            case 'schemas':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Schemas';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-schemas.html').source());
                break;
            case 'models':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Models';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-models.html').source());
                break;
            case 'types':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Types';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-types.html').source());
                break;
            case 'behaviors':
                $('#designer-spaces-spaces-system').show();
                $('#designer-spaces-spaces-components').show();
                document.getElementById('designer-spaces-type').innerHTML = 'Models';
                document.getElementById('designer-spaces-system-header').innerHTML = 'System';
                document.getElementById('designer-spaces-components-header').innerHTML = 'Components';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-behaviors.html').source());
                break;
            case 'components':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Models';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-components.html').source());
                break;
            case 'logs':
                $('#designer-spaces-spaces-system').hide();
                $('#designer-spaces-spaces-components').hide();
                document.getElementById('designer-spaces-type').innerHTML = 'Logs';
                // help
                document.getElementById('designer-spaces-help').insertAdjacentHTML('beforeend', this.require('help-logs.html').source());
                break;
            default:
                break;
        }

        // update spaces
        // clear
        $('#designer-spaces-items').empty();
        $('#designer-spaces-system-items').empty();
        $('#designer-spaces-components-items').empty();
        if (system) {
            switch (this.designer().context()) {

                case 'system':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items                   
                    var systems = this.require('storage').get('system-designer-systems'),
                        systemIds = [],
                        length = 0,
                        i = 0;

                    if (systems) {
                        systemIds = systems.systems;
                    }
                    length = systemIds.length;

                    for (i = 0; i < length; i++) {
                        system = this.require('storage').get(systemIds[i]);

                        spaceItem = new SpaceItem({
                            'name': system.name,
                            'uuid': system._id
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + item.uuid() + '#system#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
                        _removeActive();
                        $(this).addClass('active');
                    };
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', callback);
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.items(i)));
                    }

                    this.items().forEach(function (item) {
                        item.on('click', function () {
                            var designer = this.require('designer'),
                                system = this.require('storage').get(this.uuid()),
                                System = this.require('System');
                            if (system) {
                                designer.system(new System(system));
                            }
                            // empty log
                            designer.logs().forEach(function (item) {
                                this.logs().pop();
                            }.bind(designer));
                        });
                    });

                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            if (this.require('designer').system()) {
                                if ($('#designer-space-' + this.require('designer').system().name()).length) {
                                    $('#designer-space-' + this.require('designer').system().name()).addClass('active');
                                    this.require('designer').space(this.require('designer').system().name());
                                }
                            } else {
                                item = domItems.children[0];
                                $(item).addClass('active');
                                this.require('designer').space(this.items(0).name());
                            }
                        }
                    }

                    break;

                case 'schemas':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items    
                    for (name in system.schemas()) {
                        spaceItem = new SpaceItem({
                            'name': system.schemas()[name]._name,
                            'uuid': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.uuid() + '" class=""><a href="#' + system.id() + '#schemas#' + item.uuid() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
                        _removeActive();
                        $(this).addClass('active');
                    };
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', callback);
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.items(i)));
                    }
                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            item = domItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.items(0).uuid());
                        }
                    } else {
                        this.require('designer').space('');
                    }
                    break;

                case 'models':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items    
                    for (name in system.models()) {
                        spaceItem = new SpaceItem({
                            'name': system.models()[name]._name,
                            'uuid': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.uuid() + '" class=""><a href="#' + system.id() + '#models#' + item.uuid() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
                        _removeActive();
                        $(this).addClass('active');
                    };
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', callback);
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.items(i)));
                    }
                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            item = domItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.items(0).uuid());
                        }
                    } else {
                        this.require('designer').space('');
                    }
                    break;
                case 'types':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items
                    for (name in system.types()) {
                        spaceItem = new SpaceItem({
                            'name': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + system.id() + '#types#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
                        _removeActive();
                        $(this).addClass('active');
                    };
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', callback);
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.items(i)));
                    }
                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            item = domItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.items(0).name());
                        }
                    }
                    break;

                case 'behaviors':
                    // models

                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items
                    for (name in system.models()) {
                        spaceItem = new SpaceItem({
                            'name': system.models()[name]._name,
                            'uuid': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() < b.name()) {
                            result = 1;
                        }
                        if (a.name() > b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().reverse();

                    this.items().forEach(function (item) {
                        modelsName.push(item.name());
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + system.id() + '#behaviors#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
                        _removeActive();
                        $(this).addClass('active');
                    };
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', callback);
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.items(i)));
                    }

                    // systems

                    this.systems().forEach(function (item) {
                        this.systems().pop();
                    }.bind(this));

                    // sort
                    this.systems().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() < b.name()) {
                            result = 1;
                        }
                        if (a.name() > b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    if (this.require('storage').get('system-designer-systems') && this.require('storage').get('system-designer-systems').systems.length) {
                        spaceItem = new SpaceItem({
                            'name': this.require('designer').system().name(),
                            'uuid': this.require('designer').system().id()
                        });
                        this.systems().push(spaceItem);
                    }

                    this.systems().reverse();

                    this.systems().forEach(function (item) {
                        systemdomItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + system.id() + '#behaviors#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
                        _removeActive();
                        $(this).addClass('active');
                    };
                    length = systemdomItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = systemdomItems.children[i];
                        item.addEventListener('click', callback);
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.systems(i)));
                    }

                    space = this.designer().space();
                    if (modelsName.indexOf(space) !== -1) {
                        showComponents = true;
                        modelName = space;
                    } else {
                        modelName = _findModel(space, this.designer().system().components());
                        if (modelName) {
                            showComponents = true;
                        }
                    }

                    if (showComponents) {

                        // components
                        this.components().forEach(function (item) {
                            this.components().pop();
                        }.bind(this));

                        // components
                        for (id in system.components()[modelName]) {
                            spaceItem = new SpaceItem({
                                'name': id,
                                'uuid': id
                            });
                            this.components().push(spaceItem);
                        }

                        // sort
                        this.components().sort(function (idA, idB) {
                            var a = runtime.require(idA),
                                b = runtime.require(idB);

                            var result = 0;
                            if (a.name() < b.name()) {
                                result = 1;
                            }
                            if (a.name() > b.name()) {
                                result = -1;
                            }
                            return result;
                        });

                        this.components().reverse();

                        this.components().forEach(function (item) {
                            modelsName.push(item.name());
                            componentdomItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name().replace(/\./g, '-') + '" class=""><a href="#' + system.id() + '#behaviors#' + item.name() + '">' + item.name() + '</a></li>');
                        });

                        // events
                        callback = function () {
                            _removeActive();
                            $(this).addClass('active');
                        };
                        length = componentdomItems.children.length;
                        for (i = 0; i < length; i++) {
                            item = componentdomItems.children[i];
                            item.addEventListener('click', callback);
                            item.addEventListener('click', function () {
                                this.click();
                            }.bind(self.components(i)));
                        }
                    }

                    // focus
                    if (this.items().length > 0) {
                        if ($('#designer-space-' + this.require('designer').space().replace(/\./g, '-')).length) {
                            $('#designer-space-' + this.require('designer').space().replace(/\./g, '-')).addClass('active');
                        } else {
                            item = systemdomItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.systems(0).name());
                        }
                    } else {
                        item = systemdomItems.children[0];
                        $(item).addClass('active');
                        this.require('designer').space(this.systems(0).name());
                    }

                    break;

                case 'components':
                    // TODO find better way
                    this.items().forEach(function (item) {
                        this.items().pop();
                    }.bind(this));

                    // items
                    for (name in system.models()) {
                        spaceItem = new SpaceItem({
                            'name': system.models()[name]._name,
                            'uuid': name
                        });
                        this.items().push(spaceItem);
                    }

                    // sort
                    this.items().sort(function (idA, idB) {
                        var a = runtime.require(idA),
                            b = runtime.require(idB);

                        var result = 0;
                        if (a.name() > b.name()) {
                            result = 1;
                        }
                        if (a.name() < b.name()) {
                            result = -1;
                        }
                        return result;
                    });

                    this.items().forEach(function (item) {
                        domItems.insertAdjacentHTML('beforeend', '<li id="designer-space-' + item.name() + '" class=""><a href="#' + system.id() + '#components#' + item.name() + '">' + item.name() + '</a></li>');
                    });

                    // events
                    callback = function () {
                        _removeActive();
                        $(this).addClass('active');
                    };
                    length = domItems.children.length;
                    for (i = 0; i < length; i++) {
                        item = domItems.children[i];
                        item.addEventListener('click', callback);
                        item.addEventListener('click', function () {
                            this.click();
                        }.bind(self.items(i)));
                    }
                    // focus
                    if (length > 0) {
                        if ($('#designer-space-' + this.require('designer').space()).length) {
                            $('#designer-space-' + this.require('designer').space()).addClass('active');
                        } else {
                            item = domItems.children[0];
                            $(item).addClass('active');
                            this.require('designer').space(this.items(0).name());
                        }
                    }

                    break;

                case 'logs':
                    domItems.insertAdjacentHTML('beforeend', '<li class="active"><a href="#' + system.id() + '#logs">Console output</a></li>');
                    break;
                default:
                    break;
            }
        }
    });

    // Workspace
    var Workspace = this.require('Workspace');
    Workspace.on('init', function (conf) {
        var that = this;

        $('html')
            .on('dragenter dragover', false)
            .on('drop', function (e) {

                e.stopPropagation();
                e.preventDefault();
                var files = e.originalEvent.dataTransfer.files;
                var reader = new FileReader();
                var json = '';
                reader.onload = function (event) {
                    json += event.target.result;
                };
                reader.onloadend = function () {
                    var sys = JSON.parse(json);

                    var DialogDropFile = that.require('DialogDropFile');

                    DialogDropFile = new DialogDropFile({
                        'title': 'A system has been found',
                        'message': 'What do you want to do ?'
                    });
                    DialogDropFile.data(sys);
                    DialogDropFile.show();
                };
                reader.readAsText(files[0], "UTF-8");

            });
    });

    Workspace.on('create', function () {
        var id = '',
            Dialog = null,
            dialog = null,
            system = this.require('designer').system();

        function _getModelId(name) {
            var result = '',
                id = '';

            for (id in designer.system().models()) {
                if (designer.system().models()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getSchemaDef(name) {
            var result = '',
                id = '';

            for (id in designer.system().schemas()) {
                if (designer.system().schemas()[id]._name === name) {
                    result = designer.system().schemas()[id];
                    break;
                }
            }
            return result;
        }

        function generateId() {
            function gen() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
            }
            return gen() + gen() + gen();
        }

        switch (this.designer().context()) {
            case 'system':
                Dialog = this.require('DialogSystemCreation');
                dialog = new Dialog({
                    'title': 'Create a new system',
                });
                dialog.show();
                dialog.on('ok', function () {
                    var designer = this.require('designer'),
                        name = null,
                        uuid = '',
                        mainUuid = '',
                        system = {},
                        System = this.require('System'),
                        ModelSystem = null,
                        modelSystem = null;

                    function generateId() {
                        function gen() {
                            return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                        }
                        return gen() + gen() + gen();
                    }

                    function canCreate(name) {
                        var systems = runtime.require('storage').get('system-designer-systems'),
                            systemIds = [],
                            regExp = /[\#\&\(\)\[\]\'\"\*\,\;\:\%]/i,
                            i = 0,
                            result = true;

                        if (systems) {
                            systemIds = systems.systems;
                        }
                        length = systemIds.length;

                        for (i = 0; i < length; i++) {
                            system = runtime.require('storage').get(systemIds[i]);
                            if (system.name === name) {
                                result = false;
                                break;
                            }
                        }

                        result = result && (name.match(regExp) === null);

                        return result;
                    }

                    // get value
                    name = $('#designer-dialog-system-creation-name').val();

                    // clean
                    name = name.trim();
                    name = name.replace(/ /gi, '-');

                    if (name && canCreate(name)) {

                        uuid = generateId();
                        mainUuid = generateId();

                        // set system
                        system = {
                            "name": name,
                            "master": true,
                            "subsystem": false,
                            "version": "0.0.1",
                            "description": "",
                            "schemas": {},
                            "models": {},
                            "behaviors": {},
                            "types": {},
                            "components": {},
                            "_id": uuid
                        };

                        // add main method
                        system.behaviors[mainUuid] = {
                            "_id": mainUuid,
                            "component": uuid,
                            "state": "start",
                            "action": "function start() { \n\t\n}",
                            "useCoreAPI": false,
                            "core": false
                        };

                        // add (TODO improve)
                        if (designer.system()) {
                            designer.system().destroy();
                        }

                        designer.system(new System(system));

                        ModelSystem = this.require('ModelSystem');
                        modelSystem = new ModelSystem({
                            'title': name
                        });
                        modelSystem.uuid = uuid;
                        modelSystem.document(JSON.parse(JSON.stringify(system)));
                        modelSystem.content(JSON.stringify(system));

                        designer.save();

                        this.hide();

                        designer.space(name);
                        designer.spaces().render();
                        designer.workspace().refresh();

                        this.require('message').success('system created. You can now begin to create schemas.');
                    }
                });
                break;
            case 'schemas':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogSchemaCreation');
                    dialog = new Dialog({
                        'title': 'Create a new schema',
                    });
                    dialog.show();
                    dialog.on('ok', function () {
                        var designer = this.require('designer'),
                            name = null,
                            schema = {},
                            schemas = {},
                            ModelSchema = null,
                            modelSchema = null;

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        function canCreate(name) {
                            var result = true,
                                regExp = /[\#\&\(\)\[\]\'\"\*\,\;\:\%]/i,
                                id = '';

                            for (id in runtime.require('designer').system().schemas()) {
                                if (runtime.require('designer').system().schemas()[id]._name === name) {
                                    result = false;
                                    break;
                                }
                            }

                            if (runtime.require('designer').system().name() === name) {
                                result = false;
                            }

                            result = result && (name.match(regExp) === null);

                            return result;
                        }

                        // get value
                        name = $('#designer-dialog-schema-creation-name').val();

                        // clean
                        name = name.trim();
                        name = name.replace(/ /gi, '_');

                        if (name && canCreate(name)) {

                            id = generateId().toString();

                            // set schema
                            schema = {
                                "_id": id,
                                "_name": name,
                                "_inherit": ["RuntimeComponent"]
                            };

                            schemas = designer.system().schemas();
                            schemas[id] = schema;
                            designer.system().schemas(schemas);

                            ModelSchema = this.require('ModelSchema');
                            modelSchema = new ModelSchema({
                                'title': name
                            });

                            modelSchema.document(JSON.parse(JSON.stringify(schema)));
                            modelSchema.content(JSON.stringify(schema));
                            modelSchema.uuid(id);

                            designer.save();

                            designer.createModel(schema);

                            this.require('channel').$designerCreateSchema(name, schema);

                            this.hide();

                            designer.space(id);
                            designer.spaces().render();
                            designer.workspace().refresh();

                            designer.updateRouter();

                            this.require('message').success('schema created. A model has been also generated.');
                        }
                    });
                }
                break;
            case 'models':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogModelCreation');
                    dialog = new Dialog({
                        'title': 'Create a new model',
                    });
                    dialog.show();
                    dialog.on('ok', function () {
                        this.hide();
                    });
                }
                break;
            case 'types':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogTypeCreation');
                    dialog = new Dialog({
                        'title': 'Create a new type',
                    });
                    dialog.show();
                    dialog.on('ok', function () {
                        var designer = this.require('designer'),
                            name = null,
                            isEnum = false,
                            type = {},
                            types = designer.system().types(),
                            ModelType = null,
                            modelType = null;

                        // get value
                        name = $('#designer-dialog-type-creation-name').val();
                        isEnum = $('#designer-dialog-type-creation-isEnum')[0].checked;

                        // clean
                        name = name.trim();
                        name = name.replace(/ /gi, '_');

                        if (name) {
                            // set system
                            if (isEnum) {
                                type = {
                                    "name": name,
                                    "type": "string",
                                    "value": ["value1", "value2"]
                                };
                            } else {
                                type = {
                                    "name": name,
                                    "type": "object",
                                    "schema": {
                                        "property1": {
                                            "type": "string",
                                            "mandatory": true
                                        },
                                        "property2": {
                                            "type": "string",
                                            "mandatory": true
                                        }
                                    }
                                };
                            }

                            types[name] = type;
                            designer.system().types(types);

                            ModelType = this.require('ModelType');
                            modelType = new ModelType({
                                'title': name
                            });
                            modelType.uuid = name;
                            modelType.document(JSON.parse(JSON.stringify(type)));
                            modelType.content(JSON.stringify(type));

                            designer.save();

                            this.require('channel').$designerCreateType(name, type);

                            this.hide();

                            designer.space(name);
                            designer.spaces().render();
                            designer.workspace().refresh();

                            this.require('message').success('type created. You can use it in your model.');
                        }
                    });
                }
                break;
            case 'components':
                if (system && Object.keys(system).length) {
                    var designer = this.require('designer'),
                        schemas = designer.system().schemas(),
                        models = designer.system().models(),
                        components = designer.system().components(),
                        component = {},
                        ModelComponent = null,
                        modelComponent = null,
                        modelId = '',
                        modelName = '',
                        schemaName = '',
                        uuid = '',
                        schemaDef = null;

                    // get value
                    modelId = _getModelId(designer.space());
                    modelName = designer.space();
                    schemaDef = designer.getGeneratedSchema(modelName);

                    if (Object.keys(schemaDef).length) {

                        uuid = generateId();

                        // set component
                        component = {
                            "_id": uuid,
                        };

                        // set properties default values
                        var propertyNames = [];
                        for (var att in schemaDef) {
                            if (schemaDef[att] === 'property') {
                                propertyNames.push(att);
                            }
                            if (schemaDef[att] === 'link') {
                                propertyNames.push(att);
                            }
                            if (schemaDef[att] === 'collection') {
                                propertyNames.push(att);
                            }
                        }
                        propertyNames.sort();
                        length = propertyNames.length;
                        for (var i = 0; i < length; i++) {
                            component[propertyNames[i]] = designer.getGeneratedModel(modelName)[propertyNames[i]].default;
                        }

                        if (!components[modelName]) {
                            components[modelName] = {};
                        }
                        components[modelName][uuid] = component;

                        designer.system().components(components);

                        ModelComponent = this.require('ModelComponent');

                        modelComponent = new ModelComponent({
                            title: uuid
                        });
                        modelComponent.model(modelName);
                        modelComponent.uuid(uuid.toString());
                        modelComponent.document(JSON.parse(JSON.stringify(component)));
                        modelComponent.content(JSON.stringify(component));

                        modelComponent.render();

                        // little effect
                        $('#designer-component-' + uuid.toString()).hide();
                        $('#designer-component-' + uuid.toString()).fadeIn(1000);

                        designer.save();

                        this.require('channel').$designerCreateComponent(modelName, component);
                    } else {
                        this.require('message').warning('there is no schema. Create a schema before creating a component.');
                    }
                }
                break;
            case 'behaviors':
                if (system && Object.keys(system).length) {
                    Dialog = this.require('DialogBehaviorCreation');
                    dialog = new Dialog({
                        'title': 'Create a new behavior',
                    });
                    dialog.show();
                    dialog.on('ok', function ok() {
                        var designer = this.require('designer'),
                            schemas = designer.system().schemas(),
                            models = designer.system().models(),
                            behaviors = designer.system().behaviors(),
                            message = this.require('message'),
                            schemaId = '',
                            modelId = '',
                            methodDef = null,
                            behavior = {},
                            result = '',
                            body = '\t\n',
                            ModelBehavior = null,
                            modelBehavior = null,
                            model = '',
                            state = '',
                            uuid = '',
                            params = '',
                            canCreate = true,
                            i = 0,
                            length = 0,
                            componentId = '';

                        function generateId() {
                            function gen() {
                                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
                            }
                            return gen() + gen() + gen();
                        }

                        function _getSchemaId(name) {
                            var result = '',
                                id = '';

                            for (id in designer.system().schemas()) {
                                if (designer.system().schemas()[id]._name === name) {
                                    result = id;
                                    break;
                                }
                            }
                            return result;
                        }

                        function _getModelId(name) {
                            var result = '',
                                id = '';

                            for (id in designer.system().models()) {
                                if (designer.system().models()[id]._name === name) {
                                    result = id;
                                    break;
                                }
                            }
                            return result;
                        }

                        function _existBehavior(state, space, model) {
                            var result = false;

                            if (_isModel(space)) {
                                for (id in designer.system().behaviors()) {
                                    if (designer.system().behaviors()[id].state === state && designer.system().behaviors()[id].component === model) {
                                        result = true;
                                        break;
                                    }
                                }
                            } else {
                                for (id in designer.system().behaviors()) {
                                    if (designer.system().behaviors()[id].state === state && designer.system().behaviors()[id].component === space) {
                                        result = true;
                                        break;
                                    }
                                }
                            }
                            return result;
                        }

                        function _findSchemaId(compId) {
                            var result = compId,
                                modelName = '';

                            for (modelName in designer.system().components()) {
                                if (typeof designer.system().components()[modelName][compId] !== 'undefined') {
                                    result = modelName;
                                    break;
                                }
                            }
                            return result;
                        }

                        function _isModel(name) {
                            var result = false;

                            if (Object.keys(designer.system().components()).indexOf(name) !== -1) {
                                result = true;
                            }

                            return result;
                        }

                        // get value
                        model = _findSchemaId(designer.space());
                        state = $('#designer-dialog-behavior-creation-state').val();
                        componentId = designer.space();

                        if (model && state) {

                            uuid = generateId();

                            if (model !== designer.system().name()) {

                                schemaId = _getSchemaId(model);
                                modelId = _getModelId(model);

                                // params
                                if (models[modelId][state]) {
                                    methodDef = this.require('designer').getGeneratedModel(model)[state].params;
                                }
                                if (methodDef && methodDef.length) {
                                    length = methodDef.length;
                                    for (i = 0; i < length; i++) {
                                        if (i === 0) {
                                            params = methodDef[i].name;
                                        } else {
                                            params = params + ', ' + methodDef[i].name;
                                        }
                                    }
                                }

                                if (schemas[schemaId][state] === 'property' || schemas[schemaId][state] === 'link') {
                                    params = 'value';
                                }

                                if (schemas[schemaId][state] === 'collection') {
                                    params = 'size, value, event';
                                }

                                if (schemas[schemaId][state] === 'method') {
                                    if (_existBehavior(state, designer.space(), model)) {
                                        canCreate = false;
                                    }
                                }

                                if (state === 'init') {
                                    params = 'conf';
                                    if (_existBehavior(state, designer.space(), model)) {
                                        canCreate = false;
                                    }
                                }

                                if (state === 'destroy') {
                                    if (_existBehavior(state, designer.space(), model)) {
                                        canCreate = false;
                                    }
                                }

                                if (state === 'error') {
                                    params = 'data';
                                    if (_existBehavior(state, designer.space(), model)) {
                                        canCreate = false;
                                    }
                                }

                                // body
                                if (models[modelId][state]) {
                                    result = models[modelId][state].result;
                                }
                                if (result) {
                                    switch (result) {
                                        case 'string':
                                            body = "\tvar result = '';\n\treturn result;\n";
                                            break;
                                        case 'array':
                                            body = "\tvar result = [];\n\treturn result;\n";
                                            break;
                                        case 'number':
                                            body = "\tvar result = 0;\n\treturn result;\n";
                                            break;
                                        case 'object':
                                            body = "\tvar result = {};\n\treturn result;\n";
                                            break;
                                        default:
                                            body = "\tvar result = {};\n\treturn result;\n";
                                            break;
                                    }
                                }
                            } else {
                                componentId = designer.system().id();
                                if (_existBehavior(state, designer.space(), model)) {
                                    canCreate = false;
                                }
                            }

                            if (canCreate) {
                                // set model
                                behavior = {
                                    "_id": uuid,
                                    "component": componentId,
                                    "state": state,
                                    "action": "function " + state + "(" + params + ") { \n" + body + "}",
                                    "useCoreAPI": false,
                                    "core": false
                                };

                                behaviors[uuid] = behavior;
                                designer.system().behaviors(behaviors);

                                ModelBehavior = this.require('ModelBehavior');

                                modelBehavior = new ModelBehavior({
                                    'uuid': uuid
                                });

                                modelBehavior.title(state);
                                modelBehavior.document(behavior);
                                modelBehavior.content(JSON.parse(JSON.stringify(behavior.action)));

                                this.hide();
                                modelBehavior.render();

                                Prism.highlightAll();

                                // little effect
                                $('#designer-behavior-' + uuid.toString()).hide();
                                $('#designer-behavior-' + uuid.toString()).fadeIn(1000);

                                designer.save();

                                this.require('channel').$designerCreateBehavior(behavior);
                            } else {
                                this.hide();
                                message.warning('Can not create two behaviors for a method.');
                            }
                        }
                    });
                }
                break;
            default:
                break;
        }
    });

    Workspace.on('refresh', function refresh() {
        var ModelSystem = null,
            ModelSchema = null,
            ModelClass = null,
            modelSchema = null,
            ModelLog = null,
            sys = null,
            name = '',
            id = '',
            schemaId = '',
            modelclass = null,
            modellog = null,
            ModelType = null,
            type = null,
            ModelComponent = null,
            component = null,
            ModelBehavior = null,
            behavior = null,
            system = this.designer().system(),
            space = this.designer().space(),
            parentId = '',
            parentsId = [],
            parents = null,
            systems = null,
            systemIds = [],
            i = 0;
        length = 0;

        function _getSchemaId(name) {
            var result = '',
                id = '';

            for (id in system.schemas()) {
                if (system.schemas()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getModelId(name) {
            var result = '',
                id = '';

            for (id in system.models()) {
                if (system.models()[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        if (system) {
            this.clear();

            document.title = system.name() + ' | System Designer';

            switch (this.designer().context()) {
                case 'system':
                    systems = this.require('storage').get('system-designer-systems');

                    if (systems) {
                        systemIds = systems.systems;
                    }
                    length = systemIds.length;

                    for (i = 0; i < length; i++) {
                        system = this.require('storage').get(systemIds[i]);
                        if (system.name === space) {
                            ModelSystem = this.require('ModelSystem');
                            sys = new ModelSystem({
                                'title': system.name
                            });
                            sys.uuid(system._id);
                            sys.document(JSON.parse(JSON.stringify(system)));
                            sys.content(JSON.stringify(system));
                            sys.render();
                        }
                    }

                    if (space === '' && length > 0) {
                        this.require('message').warning('system not found.');
                    }

                    break;
                case 'schemas':
                    if (space) {
                        for (id in system.schemas()) {
                            if (system.schemas()[id]._id === space) {
                                ModelSchema = this.require('ModelSchema');

                                // create parent if any
                                parentsId = [];
                                if (system.schemas()[id]._inherit) {
                                    parents = system.schemas()[id]._inherit.slice();
                                    parents.reverse();
                                }
                                length = 0;
                                if (parents) {
                                    length = parents.length;
                                }

                                for (i = 0; i < length; i++) {

                                    parentId = _getSchemaId(parents[i]);

                                    modelSchema = new ModelSchema({
                                        'title': parents[i]
                                    });

                                    if (parents[i] === 'RuntimeComponent') {
                                        parentId = "111df11e2b19fde";

                                        var schemaRuntime = {
                                            "_id": "RuntimeComponent",
                                            "_name": "RuntimeComponent",
                                            "_core": true,
                                            "classInfo": "property",
                                            "on": "method",
                                            "off": "method",
                                            "require": "method",
                                            "destroy": "method",
                                            "init": "method",
                                            "error": "event"
                                        };

                                        modelSchema.document(schemaRuntime);
                                        modelSchema.content(JSON.stringify(schemaRuntime));
                                        parentsId.push(parentId);
                                        modelSchema.uuid(parentId);
                                    } else {
                                        if (system.schemas()[_getSchemaId(parents[i])]) {
                                            modelSchema.document(JSON.parse(JSON.stringify(system.schemas()[_getSchemaId(parents[i])])));
                                            modelSchema.content(JSON.stringify(system.schemas()[_getSchemaId(parents[i])]));
                                            parentsId.push(_getSchemaId(parents[i]));
                                            modelSchema.uuid(_getSchemaId(parents[i]));
                                        } else {
                                            parentsId.push(parents[i]);
                                            modelSchema.uuid(parents[i]);
                                        }
                                    }
                                    modelSchema.render();
                                }

                                modelSchema = new ModelSchema({
                                    'title': system.schemas()[id]._name
                                });
                                modelSchema.uuid(id);
                                modelSchema.document(JSON.parse(JSON.stringify(system.schemas()[id])));
                                modelSchema.content(JSON.stringify(system.schemas()[id]));
                                modelSchema.editable(true);
                                modelSchema.render();

                                length = parentsId.length;
                                for (i = 0; i < length; i++) {
                                    this.designer().linkModel(id, parentsId[i]);
                                }
                            }
                        }
                    }
                    break;
                case 'models':
                    if (space) {
                        for (id in system.models()) {
                            if (system.models()[id]._id === space) {
                                ModelClass = this.require('ModelClass');

                                // create parent if any
                                // parents are search from the schema
                                schemaId = _getSchemaId(system.models()[id]._name);
                                parentsId = [];
                                if (schemaId && system.schemas()[schemaId]._inherit) {
                                    parents = system.schemas()[schemaId]._inherit.slice();
                                    parents.reverse();
                                }
                                length = 0;
                                if (parents) {
                                    length = parents.length;
                                }

                                for (i = 0; i < length; i++) {

                                    parentId = _getSchemaId(parents[i]);

                                    modelclass = new ModelClass({
                                        'title': parents[i]
                                    });

                                    if (parents[i] === 'RuntimeComponent') {
                                        parentId = '123751cb591de26';

                                        var modelRuntime = {
                                            "_name": "RuntimeComponent",
                                            "_core": true,
                                            "on": {
                                                "params": [{
                                                    "name": "state",
                                                    "type": "string"
                                                },
                                                {
                                                    "name": "handler",
                                                    "type": "function"
                                                },
                                                {
                                                    "name": "useCoreAPI",
                                                    "type": "boolean",
                                                    "mandatory": false
                                                },
                                                {
                                                    "name": "isCore",
                                                    "type": "boolean",
                                                    "mandatory": false
                                                }
                                                ],
                                                "result": "string"
                                            },
                                            "off": {
                                                "params": [{
                                                    "name": "state",
                                                    "type": "string"
                                                },
                                                {
                                                    "name": "behaviorId",
                                                    "type": "string",
                                                    "mandatory": false
                                                }
                                                ]
                                            },
                                            "require": {
                                                "params": [{
                                                    "name": "id",
                                                    "type": "string"
                                                }],
                                                "result": "RuntimeComponent"
                                            },
                                            "destroy": {
                                                "params": []
                                            },
                                            "classInfo": {
                                                "type": "@RuntimeClassInfo",
                                                "readOnly": false,
                                                "mandatory": false,
                                                "default": {}
                                            },
                                            "init": {
                                                "params": [{
                                                    "name": "conf",
                                                    "type": "object"
                                                }
                                                ]
                                            },
                                            "error": {
                                                "params": [{
                                                    "name": "data",
                                                    "type": "errorParam"
                                                }
                                                ]
                                            }
                                        };

                                        modelclass.document(modelRuntime);
                                        modelclass.content(JSON.stringify(modelRuntime));
                                        parentsId.push(parentId);
                                        modelclass.uuid(parentId);
                                    } else {
                                        if (system.models()[_getModelId(parents[i])]) {
                                            modelclass.document(JSON.parse(JSON.stringify(system.models()[_getModelId(parents[i])])));
                                            modelclass.content(JSON.stringify(system.models()[_getModelId(parents[i])]));
                                            parentsId.push(_getModelId(parents[i]));
                                            modelclass.uuid(_getModelId(parents[i]));
                                        } else {
                                            parentsId.push(parents[i]);
                                            modelclass.uuid(parentId);
                                        }
                                    }
                                    modelclass.render();
                                }

                                modelclass = new ModelClass({
                                    'title': system.models()[id]._name
                                });
                                modelclass.uuid(id);
                                modelclass.document(JSON.parse(JSON.stringify(system.models()[id])));
                                modelclass.content(JSON.stringify(system.models()[id]));
                                modelclass.editable(true);
                                modelclass.render();

                                length = parentsId.length;
                                for (i = 0; i < length; i++) {
                                    this.designer().linkModel(id, parentsId[i]);
                                }
                            }
                        }
                    }
                    break;
                case 'types':
                    if (space) {
                        for (name in system.types())
                            if (system.types()[name].name === space) {
                                ModelType = this.require('ModelType');
                                type = new ModelType({
                                    'title': name
                                });
                                type.uuid(name);
                                type.document(JSON.parse(JSON.stringify(system.types()[space])));
                                type.content(JSON.stringify(system.types()[space]));
                                type.render();
                            }
                    }
                    break;
                case 'components':
                    if (space) {
                        if (this.require('designer').state().component()) {
                            name = this.require('designer').state().component();
                            if (system.components()[space][name]) {
                                ModelComponent = this.require('ModelComponent');
                                component = new ModelComponent({
                                    'title': name
                                });
                                component.uuid(name);
                                component.model(space);
                                component.document(JSON.parse(JSON.stringify(system.components()[space][name])));
                                component.content(JSON.stringify(system.components()[space][name]));
                                component.render();
                            }
                        } else {
                            for (name in system.components()[space]) {
                                ModelComponent = this.require('ModelComponent');
                                component = new ModelComponent({
                                    'title': name
                                });
                                component.uuid(name);
                                component.model(space);
                                component.document(JSON.parse(JSON.stringify(system.components()[space][name])));
                                component.content(JSON.stringify(system.components()[space][name]));
                                component.render();
                            }
                        }
                    }
                    break;
                case 'behaviors':
                    if (space) {
                        name = this.require('designer').state().component();
                        for (id in system.behaviors()) {
                            if (system.behaviors()[id].component === space) {
                                if ((name && system.behaviors()[id].state === name) || name === '') {
                                    ModelBehavior = this.require('ModelBehavior');

                                    behavior = new ModelBehavior({
                                        'uuid': system.behaviors()[id]._id
                                    });
                                    behavior.title(system.behaviors()[id].state);
                                    behavior.document(system.behaviors()[id]);
                                    behavior.content(JSON.parse(JSON.stringify(system.behaviors()[id].action)));
                                    behavior.render();
                                }
                            }

                            // system
                            if (space === this.require('designer').system().name()) {
                                if (system.behaviors()[id].component === this.require('designer').system().id()) {
                                    ModelBehavior = this.require('ModelBehavior');

                                    behavior = new ModelBehavior({
                                        'uuid': system.behaviors()[id]._id
                                    });
                                    behavior.title(system.behaviors()[id].state);
                                    behavior.document(system.behaviors()[id]);
                                    behavior.content(JSON.parse(JSON.stringify(system.behaviors()[id].action)));
                                    behavior.render();
                                }
                            }
                        }

                        Prism.highlightAll();
                    }
                    break;
                case 'logs':
                    ModelLog = this.require('ModelLog');

                    modelLog = new ModelLog();
                    modelLog.render();

                    break;
                default:
                    break;
            }
            // TODO IMPROVE REFRESH
            if (this.designer().filter()) {
                this.designer().filter(this.designer().filter());
            }
        } else {

            document.title = 'System Designer';

            systems = this.require('storage').get('system-designer-systems');
            if (systems && systems.systems && systems.systems.length) {
                this.require('message').warning('system not found.');
            }
        }
    });

    Workspace.on('clear', function () {
        $('#designer-workspace').empty();
        jsPlumb.ready(function () {
            jsPlumb.deleteEveryEndpoint();
        });
    });

    // Server
    var Server = this.require('Server');
    Server.on('start', function () {
        var RuntimeChannel = null,
            channel = null;

        RuntimeChannel = this.require('RuntimeChannel');
        channel = new RuntimeChannel({
            '_id': 'channel'
        });

        channel.on('send', function (message) {
            if (message.event.indexOf('$system') !== 0) {
                var config = this.require('storage').get('system-designer-config');
                // message for other windows
                this.require('storage').set('system-designer-message', message);

                // message for client debug
                if (this.require('designer').debugWindow()) {
                    this.require('designer').debugWindow().postMessage(JSON.stringify(message), '*');
                }

                // message for server debug
                if (typeof config !== 'undefined' && typeof config.debugType !== 'undefined' && config.debugType === 'server' && config.urlServer) {
                    $.post(config.urlServer + ':8888/' + message.event, encodeURIComponent(JSON.stringify(message.data)));
                }
            }
        });

        channel.on('$appLogDebug', function (message) {
            var log = '',
                Log = null;

            Log = this.require('Log');
            log = new Log({
                'type': 'debug',
                'log': message.replace('runtime:', '')
            });

            this.require('designer').logs().push(log);
            this.require('message').info(message.replace(/\[[^\]]+\]/, '<strong>runtime:</strong> '));
        });

        channel.on('$appLogInfo', function (message) {
            var log = '',
                Log = null;

            Log = this.require('Log');
            log = new Log({
                'type': 'info',
                'log': message.replace('runtime:', '')
            });

            this.require('designer').logs().push(log);
            this.require('message').info(message.replace(/\[[^\]]+\]/, '<strong>runtime:</strong> '));
        });

        channel.on('$appLogWarn', function (message) {
            var log = '',
                Log = null;

            Log = this.require('Log');
            log = new Log({
                'type': 'warn',
                'log': message.replace('runtime:', '')
            });

            this.require('designer').logs().push(log);
            this.require('message').warning(message.replace(/\[[^\]]+\]/, '<strong>runtime:</strong> '));
        });

        channel.on('$appLogError', function (message) {
            var log = '',
                Log = null;

            Log = this.require('Log');
            log = new Log({
                'type': 'error',
                'log': message.replace('runtime:', '')
            });

            this.require('designer').logs().push(log);
            this.require('message').danger(message.replace(/\[[^\]]+\]/, '<strong>runtime:</strong> '));
        });

        channel.on('$editorUpdateType', function (id, type) {
            var designer = this.require('designer'),
                types = designer.system().types();

            types[id] = type;
            designer.system().types(types);

            designer.save();

            designer.space(type.name);
            designer.spaces().render();
            designer.workspace().refresh();
        });

        channel.on('$editorDeleteType', function (id) {
            var designer = this.require('designer'),
                types = designer.system().types(),
                dbTypes = [],
                type = null;

            dbTypes = this.require('db').collections().ModelType.find({
                'uuid': id
            });
            if (dbTypes.length) {
                type = this.require(dbTypes[0]._id);
                if (type) {
                    type.hide();
                    type.destroy();
                }
            }

            delete types[id];
            designer.system().types(types);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateSchemaName', function $editorUpdateSchemaName(name, id) {
            var designer = this.require('designer'),
                oldName = designer.system().schemas()[id]._name,
                models = designer.system().models(),
                behaviors = designer.system().behaviors(),
                components = designer.system().components(),
                modelId = '',
                behaviorId = '',
                behavior = null;

            function _getModelId(name, models) {
                var result = '',
                    id = '';

                for (id in models) {
                    if (models[id]._name === name) {
                        result = id;
                        break;
                    }
                }
                return result;
            }

            modelId = _getModelId(oldName, designer.system().models());

            // update model
            models[modelId]._name = name;
            designer.system().models(models);

            // update behaviors
            for (behaviorId in behaviors) {
                if (behaviors[behaviorId].component === oldName) {
                    behaviors[behaviorId].component = name;

                    designer.system().behaviors(behaviors);
                }
            }

            // components
            if (components[oldName]) {
                components[name] = JSON.parse(JSON.stringify(components[oldName]));
                delete components[oldName];

                designer.system().components(components);
            }

            designer.save();
        });

        channel.on('$editorUpdateSchema', function $editorUpdateSchema(id, schema) {
            var designer = this.require('designer'),
                schemas = designer.system().schemas();

            jsPlumb.deleteEveryEndpoint();

            designer.syncModel(schema);
            schemas[id] = schema;
            designer.system().schemas(schemas);
            designer.save();

            designer.space(id);
            designer.spaces().render();
            designer.workspace().refresh();
        });

        channel.on('$designerDeleteSchema', function $designerDeleteSchema(id) {
            var designer = this.require('designer'),
                schemas = designer.system().schemas(),
                dbSchemas = [],
                schema = null;

            dbSchemas = this.require('db').collections().ModelSchema.find({
                'uuid': id
            });
            if (dbSchemas.length) {
                schema = this.require(dbSchemas[0]._id);
                if (schema) {
                    schema.hide();
                    schema.destroy();
                }
            }

            delete schemas[id];
            designer.system().schemas(schemas);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateSchemaId', function $editorUpdateSchemaId(oldId, newId) {
            var designer = this.require('designer'),
                schemas = designer.system().schemas(),
                dbSchemas = [],
                schema = null;

            schema = JSON.parse(JSON.stringify(schemas[oldId]));

            delete schemas[oldId];

            schema._id = newId;
            schemas[newId] = schema;
            designer.system().schemas(schemas);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateModel', function (id, model) {
            var designer = this.require('designer'),
                models = designer.system().models();

            jsPlumb.deleteEveryEndpoint();

            models[id] = model;
            designer.system().models(models);

            designer.save();

            designer.syncBehavior(model);

            designer.space(id);
            designer.spaces().render();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateModelId', function (oldId, newId) {
            var designer = this.require('designer'),
                models = designer.system().models(),
                model = null;

            model = JSON.parse(JSON.stringify(models[oldId]));

            delete models[oldId];

            model._id = newId;
            models[newId] = model;

            designer.system().models(models);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateBehavior', function (id, behavior) {
            var designer = this.require('designer'),
                behaviors = designer.system().behaviors();

            behaviors[id] = behavior;
            designer.system().behaviors(behaviors);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorDeleteBehavior', function (id) {
            var designer = this.require('designer'),
                behaviors = designer.system().behaviors(),
                dbBehaviors = [],
                behavior = null;

            dbBehaviors = this.require('db').collections().ModelBehavior.find({
                'uuid': id
            });
            if (dbBehaviors.length) {
                behavior = this.require(dbBehaviors[0]._id);
                if (behavior) {
                    behavior.hide();
                    behavior.destroy();
                }
            }

            delete behaviors[id];
            designer.system().behaviors(behaviors);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateComponent', function (id, collection, component) {
            var designer = this.require('designer'),
                components = designer.system().components();

            components[collection][id] = component;
            designer.system().components(components);

            designer.save();

            designer.workspace().refresh();
        });

        channel.on('$editorDeleteComponent', function (id, collection) {
            var designer = this.require('designer'),
                components = designer.system().components(),
                models = [],
                model = null;

            models = this.require('db').collections().ModelComponent.find({
                'uuid': id
            });
            if (models.length) {
                model = this.require(models[0]._id);
                if (model) {
                    model.hide();
                    model.destroy();
                }
            }

            delete components[collection][id];
            designer.system().components(components);

            designer.save();
            designer.workspace().refresh();
        });

        channel.on('$editorUpdateSystem', function (id, system) {
            var System = this.require('System'),
                sys = null,
                designer = this.require('designer');

            if (designer.system()) {
                designer.system().destroy();
            }
            sys = new System(system);
            designer.system(sys);
            designer.save();

            designer.space(system.name);
            designer.spaces().render();
            designer.workspace().refresh();
        });

        channel.on('$appLoadSystem', function (system) {
            var Dialog = null,
                dialog = null;

            if (system.name !== 'app-designer-testing') {

                Dialog = this.require('DialogImport');
                dialog = new Dialog({
                    'title': 'A system has been found',
                    'message': 'Do you want to import the system ?',
                    'data': system
                });
                dialog.show();

                dialog.on('ok', function () {
                    var System = this.require('System'),
                        sys = null,
                        designer = this.require('designer'),
                        message = this.require('message');

                    if (designer.system()) {
                        designer.system().destroy();
                    }
                    sys = new System(this.data());
                    designer.system(sys);

                    // empty log
                    designer.logs().forEach(function (item) {
                        this.logs().pop();
                    }.bind(designer));

                    designer.save();

                    designer.space(sys.name());
                    designer.spaces().render();
                    designer.workspace().refresh();

                    designer.updateRouter();

                    this.hide();
                    designer.save();

                    message.success('importation of the system is done.');
                });
            }
        });

        window.addEventListener('message', function (event) {
            var data = null,
                config = this.require('storage').get('system-designer-config');

            if (!config) {
                config = {};
            }
            data = JSON.parse(event.data);
            if (data &&
                typeof data.event !== 'undefined' &&
                typeof data.from !== 'undefined' &&
                typeof data.data !== 'undefined') {
                $db.RuntimeMessage.insert(data);
            }
        }.bind(channel), false);

        this.require('storage').on('changed', function (obj) {
            if (typeof obj['system-designer-message'] !== 'undefined') {
                if (this.require('designer').debugWindow()) {
                    this.require('designer').debugWindow().postMessage(JSON.stringify(obj['system-designer-message'].newValue), '*');
                }
                $db.RuntimeMessage.insert(obj['system-designer-message'].newValue);
            }
        }, true);

    }, true);

    // Designer
    var Designer = this.require('Designer');

    Designer.on('check', function () {
        var Dialog = null,
            dialog = null;

        if (typeof SharedWorker === 'undefined') {
            Dialog = this.require('DialogCheck');
            dialog = new Dialog({
                'title': 'Hem... You will laugh',
                'message': 'Your browser has not all the features to use correctly System Designer.<br><br>Please use:<br><br>- Mozilla Firefox (recommended) or <br>- Google Chrome (desktop only).<br><br>'
            });
            dialog.show();
        }
    });

    Designer.on('logs', function (index, id, action) {
        var log = null,
            html = '';

        if (action === 'add' && this.context() === 'logs') {
            log = this.require(id);

            switch (log.type()) {
                case 'debug':
                    html = html + '<p class="text-muted">' + log.log() + '</p>';
                    break;
                case 'info':
                    html = html + '<p class="text-info">' + log.log() + '</p>';
                    break;
                case 'warn':
                    html = html + '<p class="text-warning">' + log.log() + '</p>';
                    break;
                case 'error':
                    html = html + '<p class="text-danger">' + log.log() + '</p>';
                    break;
                default:
                    break;
            }

            document.querySelector('#designer-loug-output').insertAdjacentHTML('afterbegin',
                html
            );
        }
    });

    Designer.on('welcome', function () {
        var Dialog = null,
            dialog = null,
            config = null;

        config = this.require('storage').get('system-designer-config');
        if (!config) {
            config = {};
        }

        if (typeof config.welcomeScreen === 'undefined') {
            Dialog = this.require('DialogWelcome');
            dialog = new Dialog({
                'title': 'Welcome to System Designer'
            });
            dialog.show();
            dialog.on('ok', function () {
                var config = this.require('storage').get('system-designer-config');
                if (!config) {
                    config = {};
                }
                config.welcomeScreen = false;
                this.require('storage').set('system-designer-config', config);
                this.hide();
            });
        }
    });

    Designer.on('render', function () {
        var MenuBar = null,
            menubar = null,
            ToolBar = null,
            toolbar = null,
            Workspace = null,
            workspace = null,
            DesignerState = null,
            designerState = null,
            Spaces = null,
            spaces = null,
            System = null,
            systemId = '',
            Server = null,
            server = null;

        // menu
        MenuBar = this.require('MenuBar');
        menubar = new MenuBar({
            designer: this
        });
        ToolBar = this.require('ToolBar');
        toolbar = new ToolBar({
            designer: this
        });

        // workspace
        Workspace = this.require('Workspace');
        workspace = new Workspace({
            designer: this
        });

        // spaces
        Spaces = this.require('Spaces');
        spaces = new Spaces({
            designer: this
        });

        // server
        Server = this.require('Server');
        server = new Server({
            'designer': this
        });

        this.menubar(menubar);
        this.toolbar(toolbar);
        this.workspace(workspace);
        this.spaces(spaces);
        this.server(server);

        // message
        this.require('logger').on('warn', function (message) {
            this.require('message').warning(message);
        });
        this.require('logger').on('error', function (message) {
            this.require('message').danger(message);
        });

        // state
        DesignerState = this.require('DesignerState');
        designerState = new DesignerState();

        this.state(designerState);

        // system
        System = this.require('System');
        var systems = this.require('storage').get('system-designer-systems');

        // case of url
        switch (true) {

            /* TODO check if need to remove
            case typeof document.location.search.split('?')[1] === 'string':
                var systemParam = JSON.parse(decodeURIComponent(document.location.search.split('?')[1].split('system=')[1]));
                var sys = null;
    
                sys = new System(systemParam);
                this.system(sys);
                this.save();
                this.refresh();
                this.require('message').success('the system \'' + systemParam.name + '\' was imported');
                break;
            */

            case window.location.href.split('#').length > 1 && window.location.href.split('#')[1].length > 0:
                systemId = window.location.href.split('#')[1];
                if (this.require('storage').get(systemId)) {
                    this.system(new System(this.require('storage').get(systemId)));
                    this.refresh();
                }
                break;

            default:
                if (systems && systems.systems && systems.systems.length && systems.systems[0].length) {
                    this.system(new System(this.require('storage').get(systems.systems[0])));
                }
                this.refresh();
                break;
        }
        //this.check();
        this.welcome();

        // add event when history change
        var that = this;
        window.onhashchange = function (e) {
            var arr = window.location.href.split('#'),
                system = '',
                collection = 'system',
                component = '',
                i = 0,
                length = 0,
                item = null,
                domItems = null;

            if (arr.length > 1) {
                system = arr[1];
                system = system.split('?')[0];
            }

            if (arr.length > 2) {
                collection = arr[2];
                collection = collection.split('?')[0];
            }

            if (arr.length > 3) {
                component = arr[3];
                component = component.split('?')[0];
            }

            if (arr.length > 4) {
                that.state().component(arr[4].split('?')[0]);
            } else {
                that.state().component('');
            }

            if (arr.length > 1 && system) {
                that.system(new System(that.require('storage').get(system)));
            } else {
                if (systems && systems.systems && systems.systems.length) {
                    that.system(new System(that.require('storage').get(systems.systems[0])));
                }
            }
            //if (component) {
            that.space(component);
            //}
            that.context(collection);

            // focus
            domItems = document.getElementById('designer-menubar-items');
            length = that.menubar().items().length;
            for (i = 0; i < length; i++) {
                item = domItems.children[i];
                $(item).removeClass('active');
            }
            for (i = 0; i < length; i++) {
                if (that.menubar().items(i).name() === collection) {
                    item = domItems.children[i];
                    $(item).addClass('active');
                }
            }

            that.updateRouter();
        };
        // resize event
        $(window).resize(function () {
            jsPlumb.repaintEverything();
        });

        this.menubar().render();
        this.toolbar().render();
        this.spaces().render();

        $(function () {
            $('[data-toggle="tooltip"]').tooltip({ 'container': 'body', delay: { 'show': 2000, 'hide': 100 }, trigger: 'hover' });
        });

        this.server().start();

        // run messages if any
        this.runMessages(this.messages());
        this.messages([]);
    });

    Designer.on('filter', function (val) {
        var result = [],
            collectionName = '';

        switch (this.context()) {
            case 'behaviors':
                collectionName = 'ModelBehavior';
                break;
            case 'schemas':
                collectionName = 'ModelSchema';
                break;
            case 'types':
                collectionName = 'ModelType';
                break;
            case 'models':
                collectionName = 'ModelClass';
                break;
            case 'components':
                collectionName = 'ModelComponent';
                break;
            case 'system':
                collectionName = 'ModelSystem';
                break;
            default:
                break;
        }

        var resultTemp = this.require('db').collections()[collectionName].find({});
        for (var index = 0; index < resultTemp.length; index++) {
            result.push(this.require(resultTemp[index]._id));
        }
        if (val.length > 0) {
            result.forEach(function (model) {
                if (model.content().toLowerCase().indexOf(val.toLowerCase()) === -1) {
                    model.hide();
                } else {
                    model.show();
                }
            });
        } else {
            result.forEach(function (model) {
                model.show();
            });
        }

        switch (this.context()) {
            case 'schemas':
            case 'models':
                jsPlumb.repaintEverything();
                break;
            default:
                break;
        }
    });

    Designer.on('context', function (val) {
        jsPlumb.ready(function () {
            jsPlumb.deleteEveryEndpoint();
        });
        this.spaces().render();
        this.workspace().clear();
        this.workspace().refresh();
    });

    Designer.on('space', function (val) {
        //jsPlumb.deleteEveryEndpoint();
        //this.workspace().refresh();
        if (this.context() === 'system') {
            this.updateRouter();
        }
    });

    Designer.on('updateRouter', function () {
        var menubar = [],
            i = 0,
            length = 0,
            collection = '',
            href = '',
            context = '',
            space = '',
            schemaName = '',
            schemaId = '',
            modelName = '',
            modelId = '';

        function _getModelId(name, models) {
            var result = '',
                id = '';

            for (id in models) {
                if (models[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getSchemaId(name, schemas) {
            var result = '',
                id = '';

            for (id in schemas) {
                if (schemas[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        function _getModelName(id, models) {
            var result = '',
                modelId = '';

            for (modelId in models) {
                if (modelId === id) {
                    result = models[id]._name;
                    break;
                }
            }
            return result;
        }

        function _getSchemaName(id, schemas) {
            var result = '',
                schemaId = '';

            for (schemaId in schemas) {
                if (schemaId === id) {
                    result = schemas[id]._name;
                    break;
                }
            }
            return result;
        }

        function _getCollection(href) {
            var result = '';

            if (href.split('#').length === 2) {
                result = href.split('#')[1];
            }
            if (href.split('#').length > 2) {
                result = href.split('#')[2];
            }

            result = result.split('#')[0];
            result = result.trim();

            return result;
        }

        context = this.require('designer').context();
        space = this.require('designer').space();

        switch (context) {
            case 'schemas':
                if (this.require('designer').system()) {
                    if (space) {
                        schemaName = _getSchemaName(space, this.require('designer').system().schemas());
                        modelId = _getModelId(schemaName, this.require('designer').system().models());
                    }

                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;

                        if (collection === 'models' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + modelId;
                        }
                        if (collection === 'components' && schemaName) {
                            menubar[i].href = menubar[i].href + '#' + schemaName;
                        }
                        if (collection === 'behaviors' && schemaName) {
                            menubar[i].href = menubar[i].href + '#' + schemaName;
                        }
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
            case 'models':
                if (this.require('designer').system()) {
                    if (space) {
                        modelName = _getModelName(space, this.require('designer').system().models());
                        schemaId = _getSchemaId(modelName, this.require('designer').system().schemas());
                    }

                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;

                        if (collection === 'schemas' && schemaId) {
                            menubar[i].href = menubar[i].href + '#' + schemaId;
                        }
                        if (collection === 'components' && modelName) {
                            menubar[i].href = menubar[i].href + '#' + modelName;
                        }
                        if (collection === 'behaviors' && modelName) {
                            menubar[i].href = menubar[i].href + '#' + modelName;
                        }
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
            case 'behaviors':
                if (this.require('designer').system()) {
                    if (space) {
                        modelId = _getModelId(space, this.require('designer').system().models());
                        schemaId = _getSchemaId(space, this.require('designer').system().schemas());
                        schemaName = _getSchemaName(schemaId, this.require('designer').system().schemas());
                    }

                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;

                        if (collection === 'schemas' && schemaId) {
                            menubar[i].href = menubar[i].href + '#' + schemaId;
                        }
                        if (collection === 'models' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + modelId;
                        }
                        if (collection === 'components' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + schemaName;
                        }
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
            case 'components':
                if (this.require('designer').system()) {
                    if (space) {
                        modelId = _getModelId(space, this.require('designer').system().models());
                        schemaId = _getSchemaId(space, this.require('designer').system().schemas());
                        schemaName = _getSchemaName(schemaId, this.require('designer').system().schemas());
                    }

                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;

                        if (collection === 'schemas' && schemaId) {
                            menubar[i].href = menubar[i].href + '#' + schemaId;
                        }
                        if (collection === 'models' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + modelId;
                        }
                        if (collection === 'behaviors' && modelId) {
                            menubar[i].href = menubar[i].href + '#' + schemaName;
                        }
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
            default:
                if (this.require('designer').system()) {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '#' + this.require('designer').system().id() + '#' + collection;
                    }
                } else {
                    menubar = $('#designer-menubar-items > li > a');
                    length = menubar.length;
                    for (i = 0; i < length; i++) {
                        href = menubar[i].href;
                        collection = _getCollection(href);
                        menubar[i].href = '##' + collection;
                    }
                }
                break;
        }

        // update spaces
        /*
        spaces = $('#designer-spaces-items > li > a');
        length = spaces.length;
        for (i = 0; i < length; i++) {
            href = spaces[i].href;
            collection = href.split('#')[href.split('#').length - 2];
            component = href.split('#')[href.split('#').length - 1];
            spaces[i].href = '#' + this.require('designer').system().id() + '#' + collection + '#' + component;
        }
        */
    });

    Designer.on('createBehavior', function createBehavior(type, model, state, def) {
        var body = '',
            behaviors = this.system().behaviors();

        function _canCreate(type, component, state, behaviors) {
            var behavior = {},
                id = '',
                exist = false,
                result = true;

            for (id in behaviors) {
                behavior = behaviors[id];
                if (behavior.component === component && behavior.state === state) {
                    exist = true;
                    break;
                }
            }
            if (exist) {
                result = false;
            }

            return result;
        }

        function generateId() {
            function gen() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
            }
            return gen() + gen() + gen();
        }

        if (_canCreate(type, model, state, behaviors)) {
            uuid = generateId();

            // params
            methodDef = def.params;
            if (methodDef && methodDef.length) {
                length = methodDef.length;
                for (i = 0; i < length; i++) {
                    if (i === 0) {
                        params = methodDef[i].name;
                    } else {
                        params = params + ', ' + methodDef[i].name;
                    }
                }
            }

            // body
            result = def.result;
            if (result) {
                switch (result) {
                    case 'string':
                        body = "\tvar result = '';\n\treturn result;\n";
                        break;
                    case 'array':
                        body = "\tvar result = [];\n\treturn result;\n";
                        break;
                    case 'number':
                        body = "\tvar result = 0;\n\treturn result;\n";
                        break;
                    case 'object':
                        body = "\tvar result = {};\n\treturn result;\n";
                        break;
                    default:
                        body = "\tvar result = {};\n\treturn result;\n";
                        break;
                }
            }

            // set behavior
            behavior = {
                "_id": uuid,
                "component": model,
                "state": state,
                "action": "function " + state + "(" + params + ") { \n" + body + "}",
                "useCoreAPI": false,
                "core": false
            };

            behaviors[uuid] = behavior;

            this.system().behaviors(behaviors);
            this.save();

            this.require('channel').$designerCreateBehavior(behavior);
        }
    });

    Designer.on('deleteSchema', function (id) {
        var behaviorId = '',
            modelId = '',
            behavior = null,
            schemas = this.system().schemas(),
            models = this.system().models(),
            behaviors = this.system().behaviors(),
            components = this.system().components(),
            schemaName = schemas[id]._name;

        function _getModelId(name, models) {
            var result = '',
                id = '';

            for (id in models) {
                if (models[id]._name === name) {
                    result = id;
                    break;
                }
            }
            return result;
        }

        // components
        delete components[schemaName];
        this.system().components(components);

        // behaviors
        for (behaviorId in behaviors) {
            behavior = behaviors[behaviorId];
            if (behavior.component === schemaName) {
                delete behaviors[behaviorId];
                this.system().behaviors(behaviors);
            }
        }

        // model
        modelId = _getModelId(schemas[id]._name, models);
        if (modelId) {
            delete models[modelId];
            this.system().models(models);
        }

        // schema
        delete schemas[id];
        this.system().schemas(schemas);
    });

    Designer.on('createModel', function (schema) {
        var schemas = this.system().schemas(),
            models = this.system().models(),
            components = this.system().components(),
            name = '',
            id = '',
            propName = '',
            component = null,
            behavior = null,
            model = null,
            oldSchema = null;

        function generateId() {
            function gen() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
            }
            return gen() + gen() + gen();
        }

        id = generateId();

        model = {
            "_id": id,
            "_name": schema._name,
        };

        for (propName in schema) {
            if (propName.indexOf('_') !== 0) {
                switch (true) {
                    case schema[propName] === 'property':
                        model[propName] = {
                            "type": "string",
                            "readOnly": false,
                            "mandatory": false,
                            "default": ""
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    case schema[propName] === 'link':
                        model[propName] = {
                            "type": "@RuntimeComponent",
                            "readOnly": false,
                            "mandatory": false,
                            "default": ""
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    case schema[propName] === 'method':
                        model[propName] = {
                            "params": [
                                {
                                    "name": "param",
                                    "type": "string",
                                    "mandatory": false,
                                    "default": ""
                                }
                            ],
                            "result": "string"
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    case schema[propName] === 'event':
                        model[propName] = {
                            "params": [
                                {
                                    "name": "param",
                                    "type": "string",
                                    "mandatory": false,
                                    "default": ""
                                }
                            ]
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    case schema[propName] === 'collection':
                        model[propName] = {
                            "type": ["string"],
                            "readOnly": false,
                            "mandatory": false,
                            "default": []
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                        }

                        break;
                    default:
                        break;
                }
            }
        }

        models[id] = model;

        this.system().models(models);
        this.require('channel').$designerCreateModel(model._id, model);
        this.system().components(components);
        this.save();
    });

    Designer.on('syncComponent', function (model) {
        var components = this.system().components(),
            name = '',
            componentId = '',
            propName = '',
            component = null,
            createModel = false;

        name = model._name;
        schema = this.getGeneratedSchema(name);

        for (propName in schema) {
            switch (true) {
                case schema[propName] === 'property':
                    for (component in components[name]) {
                        if (typeof components[name][component][propName] === 'undefined') {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }
                    }
                    break;
                case schema[propName] === 'link':
                    for (component in components[name]) {
                        if (typeof components[name][component][propName] === 'undefined') {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }
                    }
                    break;
                case schema[propName] === 'collection':
                    for (component in components[name]) {
                        if (typeof components[name][component][propName] === 'undefined') {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }
                    }
                    break;
                default:
                    break;
            }
        }

        /*
        for (propName in schema) {
            for (componentId in components[name]) {
                if (typeof components[name][componentId][propName] === 'undefined') {
                    delete components[name][componentId][propName];
                    this.require('channel').$designerDeleteComponent(componentId, name);
                    this.system().components(components);
                }
            }
        }*/

        this.save();
    });

    Designer.on('syncModel', function (schema) {
        var schemas = this.system().schemas(),
            models = this.system().models(),
            components = this.system().components(),
            behaviors = this.system().behaviors(),
            name = '',
            id = '',
            propName = '',
            component = null,
            behavior = null,
            model = null,
            oldSchema = null,
            createModel = false;

        function generateId() {
            function gen() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16);
            }
            return gen() + gen() + gen();
        }

        name = schema._name;

        // search
        for (id in models) {
            if (models[id]._name === schema._name) {
                model = models[id];
            }
        }

        // case of no model
        if (!model) {
            createModel = true;
            model = {
                "_id": generateId(),
                "_name": name
            };
        }

        // previous schema
        oldSchema = schemas[schema._id];
        for (propName in schema) {
            if ((schema.hasOwnProperty(propName) &&
                oldSchema &&
                (typeof oldSchema[propName] === 'undefined' ||
                    oldSchema[propName] !== schema[propName])) ||
                createModel
            ) {
                switch (true) {
                    case schema[propName] === 'property':
                        model[propName] = {
                            "type": "any",
                            "readOnly": false,
                            "mandatory": false,
                            "default": ""
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }

                        break;
                    case schema[propName] === 'link':
                        model[propName] = {
                            "type": "@RuntimeComponent",
                            "readOnly": false,
                            "mandatory": false,
                            "default": ""
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }

                        break;
                    case schema[propName] === 'method':
                        if (typeof model[propName] === 'undefined' || (typeof model[propName] !== 'undefined' && typeof model[propName].type !== 'undefined')) {
                            model[propName] = {
                                "params": [
                                    {
                                        "name": "param",
                                        "type": "string",
                                        "mandatory": false,
                                        "default": ""
                                    }
                                ],
                                "result": "string"
                            };

                            // create behavior
                            this.createBehavior('method', model._name, propName, model[propName]);
                        }

                        break;
                    case schema[propName] === 'event':
                        if (typeof model[propName] === 'undefined' || (typeof model[propName] !== 'undefined' && typeof model[propName].type !== 'undefined')) {
                            model[propName] = {
                                "params": [
                                    {
                                        "name": "param",
                                        "type": "string",
                                        "mandatory": false,
                                        "default": ""
                                    }
                                ]
                            };

                            // create behavior
                            this.createBehavior('event', model._name, propName, model[propName]);
                        } else {
                            if (typeof model[propName].result !== 'undefined') {
                                delete model[propName].result;
                            }
                        }

                        break;
                    case schema[propName] === 'collection':
                        model[propName] = {
                            "type": ["@RuntimeComponent"],
                            "readOnly": false,
                            "mandatory": false,
                            "default": []
                        };

                        for (component in components[name]) {
                            components[name][component][propName] = model[propName].default;
                            this.require('channel').$designerUpdateComponent(component, name, components[name][component]);
                            this.system().components(components);
                        }

                        break;
                    case propName.indexOf('_') !== 1:
                        if (propName !== '_id' && propName !== '_inherit') {
                            model[propName] = schema[propName];
                        }
                        break;
                    default:
                        break;
                }
            }
        }

        if (oldSchema) {
            for (propName in oldSchema) {
                if (propName.indexOf('_') !== 0 && typeof schema[propName] === 'undefined') {
                    delete model[propName];

                    for (component in components[name]) {
                        delete components[name][component][propName];
                        this.require('channel').$designerDeleteComponent(component, name);
                        this.system().components(components);
                    }
                    for (behavior in behaviors) {
                        if (model && behaviors[behavior].component === model._name && behaviors[behavior].state === propName) {
                            delete behaviors[behavior];
                            this.require('channel').$designerDeleteBehavior(behavior);
                            this.system().behaviors(behaviors);
                        }
                    }
                }
            }
        }

        models[model._id] = model;
        this.system().models(models);
        this.require('channel').$designerUpdateModel(model._id, model);
        this.save();
    });

    Designer.on('syncBehavior', function (model) {
        var behaviors = this.system().behaviors(),
            schema = null,
            propName = '',
            params = '',
            header = '',
            def = null,
            methodDef = null,
            length = 0,
            i = 0,
            behaviorId = '',
            action = '',
            behavior = null,
            that = this;

        function _getSchema(name) {
            var result = '',
                id = '';

            for (id in that.system().schemas()) {
                if (that.system().schemas()[id]._name === name) {
                    result = that.system().schemas()[id];
                    break;
                }
            }
            return result;
        }

        schema = _getSchema(model._name);

        for (propName in schema) {
            switch (true) {
                case schema[propName] === 'method':
                case schema[propName] === 'event':
                    // params
                    def = model[propName];

                    if (typeof model[propName] !== 'object') {
                        if (schema[propName] === 'method') {
                            def = {
                                "params": [
                                    {
                                        "name": "param",
                                        "type": "string",
                                        "mandatory": false,
                                        "default": ""
                                    }
                                ],
                                "result": "string"
                            };
                        } else {
                            def = {
                                "params": [
                                    {
                                        "name": "param",
                                        "type": "string",
                                        "mandatory": false,
                                        "default": ""
                                    }
                                ]
                            };
                        }
                    }
                    methodDef = def.params;
                    params = '';
                    if (methodDef && methodDef.length) {
                        length = methodDef.length;
                        for (i = 0; i < length; i++) {
                            if (i === 0) {
                                params = methodDef[i].name;
                            } else {
                                params = params + ', ' + methodDef[i].name;
                            }
                        }
                    }

                    header = 'function ' + propName + '(' + params + ') ';

                    for (behaviorId in behaviors) {
                        behavior = behaviors[behaviorId];
                        if (behavior.component === model._name && behavior.state === propName) {
                            action = behavior.action.split('{');
                            action[0] = header;
                            behaviors[behaviorId].action = action.join('{');
                            this.system().behaviors(behaviors);
                            this.require('channel').$designerUpdateBehavior(behavior._id, behavior);
                            this.save();
                        }
                    }

                    break;
                default:
                    break;
            }
        }
    });

    Designer.on('linkModel', function (source, target) {
        jsPlumb.ready(function () {
            jsPlumb.setContainer('body');

            jsPlumb.connect({
                paintStyle: {
                    strokeStyle: '#7F949D',
                    lineWidth: 3
                },
                source: 'designer-model-panel-' + source,
                target: 'designer-model-panel-' + target,
                overlays: [
                    ['Arrow', { location: 1 }]
                ]
            }, {
                    connector: ['Flowchart'],
                    anchor: ['Left', 'Right'],
                    endpoint: 'Blank'
                });
        });
    });

    Designer.on('save', function () {
        var systems = this.require('storage').get('system-designer-systems'),
            designer = this.require('designer'),
            system = this.require('db').collections().System.find({
                '_id': designer.system().id()
            })[0],
            systemId = system._id;

        // delete classInfo
        system = JSON.parse(JSON.stringify(system));
        delete system.classInfo;

        // save system
        this.require('storage').set(systemId, system);

        // save index
        if (!systems) {
            systems = { 'systems': [systemId] };
        } else {
            if (systems.systems.indexOf(systemId) === -1) {
                systems.systems.push(systemId);
            }
        }
        this.require('storage').set('system-designer-systems', systems);
    });

    Designer.on('runMessages', function runMessages(messages) {
        messages.forEach(function (message) {
            console.log(message);
            $db.RuntimeMessage.insert(message);
        });
    }, true);

    Designer.on('getGeneratedSchema', function getGeneratedSchema(schema) {
        var schemaDef = null,
            result = {},
            i = 0,
            length = 0,
            propName = '';

        function _getSchemaDef(name, schemas) {
            var result = '',
                id = '';

            for (id in schemas) {
                if (schemas[id]._name === name) {
                    result = schemas[id];
                    break;
                }
            }
            return result;
        }

        function _searchParents(parents, states, schemas) {
            var parent = '',
                schemaDef = null,
                i = 0,
                length = 0;

            length = parents.length;
            for (i = 0; i < length; i++) {
                parent = parents[i];
                if (parent === 'RuntimeComponent') {
                    result.init = 'init';
                    result.destroy = 'destroy';
                    result.error = 'error';
                } else {
                    schemaDef = _getSchemaDef(parent, schemas);

                    for (propName in schemaDef) {
                        if (propName.indexOf('_') !== 0) {
                            result[propName] = schemaDef[propName];
                        }
                    }

                    if (schemaDef._inherit) {
                        _searchParents(schemaDef._inherit, result, schemas);
                    }
                }
            }
        }

        schemaDef = _getSchemaDef(schema, this.system().schemas());

        for (propName in schemaDef) {
            if (propName.indexOf('_') !== 0) {
                result[propName] = schemaDef[propName];
            }
        }

        if (schemaDef._inherit) {
            _searchParents(schemaDef._inherit, result, this.system().schemas());
        }

        return result;
    });

    Designer.on('getGeneratedModel', function getGeneratedModel(model) {
        var modelDef = null,
            result = {},
            i = 0,
            length = 0,
            propName = '';

        function _getInherit(name, schemas) {
            var result = '',
                id = '';

            for (id in schemas) {
                if (schemas[id]._name === name) {
                    result = schemas[id]._inherit;
                    break;
                }
            }
            return result;
        }

        function _getModelDef(name, models) {
            var result = '',
                id = '';

            for (id in models) {
                if (models[id]._name === name) {
                    result = models[id];
                    break;
                }
            }
            return result;
        }

        function _searchParents(parents, states, models, schemas) {
            var parent = '',
                modelDef = null,
                i = 0,
                length = 0;

            length = parents.length;
            for (i = 0; i < length; i++) {
                parent = parents[i];
                if (parent === 'RuntimeComponent') {
                    result.init = {
                        "params": [{
                            "name": "conf",
                            "type": "object"
                        }]
                    };

                    result.destroy = {
                        "params": []
                    };

                    result.error = {
                        "params": [{
                            "name": "data",
                            "type": "errorParam"
                        }]
                    };

                } else {
                    modelDef = _getModelDef(parent, models);

                    for (propName in modelDef) {
                        if (propName.indexOf('_') !== 0 && typeof result[propName] === 'undefined') {
                            result[propName] = modelDef[propName];
                        }
                    }

                    if (_getInherit(parent, schemas)) {
                        _searchParents(_getInherit(parent, schemas), result, models, schemas);
                    }
                }
            }
        }

        modelDef = _getModelDef(model, this.system().models());

        for (propName in modelDef) {
            if (propName.indexOf('_') !== 0) {
                result[propName] = modelDef[propName];
            }
        }

        if (_getInherit(model, this.system().schemas())) {
            _searchParents(_getInherit(model, this.system().schemas()), result, this.system().models(), this.system().schemas());
        }

        return result;
    });

    // start
    system.on('start', function start() {
        var designer = null;

        designer = this.require('designer');
        designer.render();
    });

    system.start();
});