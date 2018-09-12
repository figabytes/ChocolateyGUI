
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"ChocolateyExtensions",
        content:"ChocolateyExtensions",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"PackageResults",
        content:"PackageResults",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"AboutView",
        content:"AboutView",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"ISourceViewModelBase",
        content:"ISourceViewModelBase",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"LogLevel",
        content:"LogLevel",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"SettingsView",
        content:"SettingsView",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"IPersistenceService",
        content:"IPersistenceService",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"DataContextCommandBinding",
        content:"DataContextCommandBinding",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"VersionNumberProvider",
        content:"VersionNumberProvider",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"IVersionNumberProvider",
        content:"IVersionNumberProvider",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"ShowAboutMessage",
        content:"ShowAboutMessage",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"Package",
        content:"Package",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"IDataGridColumnComparer",
        content:"IDataGridColumnComparer",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"Hacks",
        content:"Hacks",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"SourcesViewModel CreateRemove",
        content:"SourcesViewModel CreateRemove",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"AboutViewModel",
        content:"AboutViewModel",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"ElevationStatusProvider",
        content:"ElevationStatusProvider",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"CommandExecutionManager",
        content:"CommandExecutionManager",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"BindingProxy",
        content:"BindingProxy",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"NullToVisibility",
        content:"NullToVisibility",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"ChocolateyGUISetting",
        content:"ChocolateyGUISetting",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"IMainWindowViewModel",
        content:"IMainWindowViewModel",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"DataContextCommandAdapter",
        content:"DataContextCommandAdapter",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"Windows PlatformProvider",
        content:"Windows PlatformProvider",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"PackageSearchResults",
        content:"PackageSearchResults",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"LogMessage",
        content:"LogMessage",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"SourcesViewModel",
        content:"SourcesViewModel",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"ChocolateySetting",
        content:"ChocolateySetting",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"AboutGoBackMessage",
        content:"AboutGoBackMessage",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"LocalSourceViewModel",
        content:"LocalSourceViewModel",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"SettingsViewModel",
        content:"SettingsViewModel",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"PackageViewModel",
        content:"PackageViewModel",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"PackageAuthorsComparer",
        content:"PackageAuthorsComparer",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"SourceTabViewModel",
        content:"SourceTabViewModel",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"ShellView",
        content:"ShellView",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"ShellViewModel",
        content:"ShellViewModel",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"ChocolateySource",
        content:"ChocolateySource",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"MarkdownEx",
        content:"MarkdownEx",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"IConfigService",
        content:"IConfigService",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"SourceViewModel",
        content:"SourceViewModel",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"InternetImage",
        content:"InternetImage",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"ObservableBase",
        content:"ObservableBase",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"RemoteSourceViewModel",
        content:"RemoteSourceViewModel",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"ConfigService",
        content:"ConfigService",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"PackageOperationResult",
        content:"PackageOperationResult",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"PackageDependenciesToString",
        content:"PackageDependenciesToString",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"LocalSourceView",
        content:"LocalSourceView",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"DataContext",
        content:"DataContext",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"PackageChangedMessage",
        content:"PackageChangedMessage",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"SerilogLogger InterceptMessages",
        content:"SerilogLogger InterceptMessages",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"LongSizeToFileSizeString",
        content:"LongSizeToFileSizeString",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"AutoFacConfiguration",
        content:"AutoFacConfiguration",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"ChocolateyDialogController DialogCanceledEventHandler",
        content:"ChocolateyDialogController DialogCanceledEventHandler",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"AppConfiguration",
        content:"AppConfiguration",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"ChocolateyDialog",
        content:"ChocolateyDialog",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"LocalizedDescriptionAttribute",
        content:"LocalizedDescriptionAttribute",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"ChocolateyConfigurationProvider",
        content:"ChocolateyConfigurationProvider",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"BooleanToVisibilityInverted",
        content:"BooleanToVisibilityInverted",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"PackageSearchOptions",
        content:"PackageSearchOptions",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"PersistenceService",
        content:"PersistenceService",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"StringListToString",
        content:"StringListToString",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"DataGridCustomSortBehavior",
        content:"DataGridCustomSortBehavior",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"BooleanToVisibility",
        content:"BooleanToVisibility",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"SourcesUpdatedMessage",
        content:"SourcesUpdatedMessage",
        description:'',
        tags:''
    });

    a({
        id:64,
        title:"Bootstrapper",
        content:"Bootstrapper",
        description:'',
        tags:''
    });

    a({
        id:65,
        title:"IChocolateyConfigurationProvider",
        content:"IChocolateyConfigurationProvider",
        description:'',
        tags:''
    });

    a({
        id:66,
        title:"BooleanToVisibilityHidden",
        content:"BooleanToVisibilityHidden",
        description:'',
        tags:''
    });

    a({
        id:67,
        title:"BooleanInverter",
        content:"BooleanInverter",
        description:'',
        tags:''
    });

    a({
        id:68,
        title:"BooleanToTickString",
        content:"BooleanToTickString",
        description:'',
        tags:''
    });

    a({
        id:69,
        title:"ResetScrollPositionMessage",
        content:"ResetScrollPositionMessage",
        description:'',
        tags:''
    });

    a({
        id:70,
        title:"Internationalization",
        content:"Internationalization",
        description:'',
        tags:''
    });

    a({
        id:71,
        title:"ResourceReader",
        content:"ResourceReader",
        description:'',
        tags:''
    });

    a({
        id:72,
        title:"IChocolateyService",
        content:"IChocolateyService",
        description:'',
        tags:''
    });

    a({
        id:73,
        title:"IPackageViewModel",
        content:"IPackageViewModel",
        description:'',
        tags:''
    });

    a({
        id:74,
        title:"PowerShellLineType",
        content:"PowerShellLineType",
        description:'',
        tags:''
    });

    a({
        id:75,
        title:"EnumToBoolConverter",
        content:"EnumToBoolConverter",
        description:'',
        tags:''
    });

    a({
        id:76,
        title:"IPlatformProvider",
        content:"IPlatformProvider",
        description:'',
        tags:''
    });

    a({
        id:77,
        title:"RoutedCommandBinding",
        content:"RoutedCommandBinding",
        description:'',
        tags:''
    });

    a({
        id:78,
        title:"SettingsGoBackMessage",
        content:"SettingsGoBackMessage",
        description:'',
        tags:''
    });

    a({
        id:79,
        title:"ChocolateyDialogController",
        content:"ChocolateyDialogController",
        description:'',
        tags:''
    });

    a({
        id:80,
        title:"PackageHasUpdateMessage",
        content:"PackageHasUpdateMessage",
        description:'',
        tags:''
    });

    a({
        id:81,
        title:"MainWindowViewModel",
        content:"MainWindowViewModel",
        description:'',
        tags:''
    });

    a({
        id:82,
        title:"ShowPackageDetailsMessage",
        content:"ShowPackageDetailsMessage",
        description:'',
        tags:''
    });

    a({
        id:83,
        title:"RemoteSourceView",
        content:"RemoteSourceView",
        description:'',
        tags:''
    });

    a({
        id:84,
        title:"ObservableRingBufferCollection",
        content:"ObservableRingBufferCollection",
        description:'',
        tags:''
    });

    a({
        id:85,
        title:"IProgressService",
        content:"IProgressService",
        description:'',
        tags:''
    });

    a({
        id:86,
        title:"Resources",
        content:"Resources",
        description:'',
        tags:''
    });

    a({
        id:87,
        title:"PackageView",
        content:"PackageView",
        description:'',
        tags:''
    });

    a({
        id:88,
        title:"SourcesView",
        content:"SourcesView",
        description:'',
        tags:''
    });

    a({
        id:89,
        title:"PackagesChangedEventType",
        content:"PackagesChangedEventType",
        description:'',
        tags:''
    });

    a({
        id:90,
        title:"ShowSettingsMessage",
        content:"ShowSettingsMessage",
        description:'',
        tags:''
    });

    a({
        id:91,
        title:"PowerShellExtensions",
        content:"PowerShellExtensions",
        description:'',
        tags:''
    });

    a({
        id:92,
        title:"SerilogLogger",
        content:"SerilogLogger",
        description:'',
        tags:''
    });

    a({
        id:93,
        title:"FauxPowerShellConsole",
        content:"FauxPowerShellConsole",
        description:'',
        tags:''
    });

    a({
        id:94,
        title:"ShowSourcesMessage",
        content:"ShowSourcesMessage",
        description:'',
        tags:''
    });

    a({
        id:95,
        title:"SemanticVersionTypeConverter",
        content:"SemanticVersionTypeConverter",
        description:'',
        tags:''
    });

    a({
        id:96,
        title:"NullToValue",
        content:"NullToValue",
        description:'',
        tags:''
    });

    a({
        id:97,
        title:"ChocolateyFeature",
        content:"ChocolateyFeature",
        description:'',
        tags:''
    });

    a({
        id:98,
        title:"Elevation",
        content:"Elevation",
        description:'',
        tags:''
    });

    a({
        id:99,
        title:"PackageChangeType",
        content:"PackageChangeType",
        description:'',
        tags:''
    });

    a({
        id:100,
        title:"ConnectionClosedException",
        content:"ConnectionClosedException",
        description:'',
        tags:''
    });

    a({
        id:101,
        title:"PackageViewModel",
        content:"PackageViewModel",
        description:'',
        tags:''
    });

    a({
        id:102,
        title:"PowerShellOutputLine",
        content:"PowerShellOutputLine",
        description:'',
        tags:''
    });

    a({
        id:103,
        title:"App",
        content:"App",
        description:'',
        tags:''
    });

    a({
        id:104,
        title:"ProgressService",
        content:"ProgressService",
        description:'',
        tags:''
    });

    a({
        id:105,
        title:"DefaultsExtensions",
        content:"DefaultsExtensions",
        description:'',
        tags:''
    });

    a({
        id:106,
        title:"ListViewMode",
        content:"ListViewMode",
        description:'',
        tags:''
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui/ChocolateyExtensions',
        title:"ChocolateyExtensions",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/PackageResults',
        title:"PackageResults",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Views/AboutView',
        title:"AboutView",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/ISourceViewModelBase',
        title:"ISourceViewModelBase",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/LogLevel',
        title:"LogLevel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Views/SettingsView',
        title:"SettingsView",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Services/IPersistenceService',
        title:"IPersistenceService",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Commands/DataContextCommandBinding',
        title:"DataContextCommandBinding",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Providers/VersionNumberProvider',
        title:"VersionNumberProvider",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Providers/IVersionNumberProvider',
        title:"IVersionNumberProvider",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/ShowAboutMessage',
        title:"ShowAboutMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/Package',
        title:"Package",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities/IDataGridColumnComparer',
        title:"IDataGridColumnComparer",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui/Hacks',
        title:"Hacks",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/CreateRemove',
        title:"SourcesViewModel.CreateRemove",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/AboutViewModel',
        title:"AboutViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Providers/ElevationStatusProvider',
        title:"ElevationStatusProvider",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Commands/CommandExecutionManager',
        title:"CommandExecutionManager",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities/BindingProxy',
        title:"BindingProxy",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/NullToVisibility',
        title:"NullToVisibility",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/ChocolateyGUISetting',
        title:"ChocolateyGUISetting",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels.Windows/IMainWindowViewModel',
        title:"IMainWindowViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Commands/DataContextCommandAdapter',
        title:"DataContextCommandAdapter",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Providers.PlatformProvider/Windows7PlatformProvider',
        title:"Windows7PlatformProvider",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/PackageSearchResults',
        title:"PackageSearchResults",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/LogMessage',
        title:"LogMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/SourcesViewModel',
        title:"SourcesViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/ChocolateySetting',
        title:"ChocolateySetting",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/AboutGoBackMessage',
        title:"AboutGoBackMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/LocalSourceViewModel',
        title:"LocalSourceViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/SettingsViewModel',
        title:"SettingsViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/PackageViewModel',
        title:"PackageViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities/PackageAuthorsComparer',
        title:"PackageAuthorsComparer",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels.Items/SourceTabViewModel',
        title:"SourceTabViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Views/ShellView',
        title:"ShellView",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/ShellViewModel',
        title:"ShellViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/ChocolateySource',
        title:"ChocolateySource",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Controls/MarkdownEx',
        title:"MarkdownEx",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Services/IConfigService',
        title:"IConfigService",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels.Items/SourceViewModel',
        title:"SourceViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Controls/InternetImage',
        title:"InternetImage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Base/ObservableBase',
        title:"ObservableBase",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels/RemoteSourceViewModel',
        title:"RemoteSourceViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Services/ConfigService',
        title:"ConfigService",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/PackageOperationResult',
        title:"PackageOperationResult",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/PackageDependenciesToString',
        title:"PackageDependenciesToString",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Views/LocalSourceView',
        title:"LocalSourceView",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities/DataContext',
        title:"DataContext",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/PackageChangedMessage',
        title:"PackageChangedMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui/InterceptMessages',
        title:"SerilogLogger.InterceptMessages",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/LongSizeToFileSizeString',
        title:"LongSizeToFileSizeString",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Startup/AutoFacConfiguration',
        title:"AutoFacConfiguration",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Controls.Dialogs/DialogCanceledEventHandler',
        title:"ChocolateyDialogController.DialogCanceledEventHandler",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/AppConfiguration',
        title:"AppConfiguration",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Controls.Dialogs/ChocolateyDialog',
        title:"ChocolateyDialog",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Attributes/LocalizedDescriptionAttribute',
        title:"LocalizedDescriptionAttribute",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Providers/ChocolateyConfigurationProvider',
        title:"ChocolateyConfigurationProvider",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/BooleanToVisibilityInverted',
        title:"BooleanToVisibilityInverted",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/PackageSearchOptions',
        title:"PackageSearchOptions",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Services/PersistenceService',
        title:"PersistenceService",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/StringListToString',
        title:"StringListToString",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities/DataGridCustomSortBehavior',
        title:"DataGridCustomSortBehavior",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/BooleanToVisibility',
        title:"BooleanToVisibility",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/SourcesUpdatedMessage',
        title:"SourcesUpdatedMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui/Bootstrapper',
        title:"Bootstrapper",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Providers/IChocolateyConfigurationProvider',
        title:"IChocolateyConfigurationProvider",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/BooleanToVisibilityHidden',
        title:"BooleanToVisibilityHidden",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/BooleanInverter',
        title:"BooleanInverter",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/BooleanToTickString',
        title:"BooleanToTickString",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/ResetScrollPositionMessage',
        title:"ResetScrollPositionMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Startup/Internationalization',
        title:"Internationalization",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities/ResourceReader',
        title:"ResourceReader",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Services/IChocolateyService',
        title:"IChocolateyService",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels.Items/IPackageViewModel',
        title:"IPackageViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/PowerShellLineType',
        title:"PowerShellLineType",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/EnumToBoolConverter',
        title:"EnumToBoolConverter",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Providers/IPlatformProvider',
        title:"IPlatformProvider",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Commands/RoutedCommandBinding',
        title:"RoutedCommandBinding",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/SettingsGoBackMessage',
        title:"SettingsGoBackMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Controls.Dialogs/ChocolateyDialogController',
        title:"ChocolateyDialogController",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/PackageHasUpdateMessage',
        title:"PackageHasUpdateMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels.Windows/MainWindowViewModel',
        title:"MainWindowViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/ShowPackageDetailsMessage',
        title:"ShowPackageDetailsMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Views/RemoteSourceView',
        title:"RemoteSourceView",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Controls/ObservableRingBufferCollection_1',
        title:"ObservableRingBufferCollection<T>",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Services/IProgressService',
        title:"IProgressService",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Properties/Resources',
        title:"Resources",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Views/PackageView',
        title:"PackageView",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Views/SourcesView',
        title:"SourcesView",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Enums/PackagesChangedEventType',
        title:"PackagesChangedEventType",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/ShowSettingsMessage',
        title:"ShowSettingsMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Extensions/PowerShellExtensions',
        title:"PowerShellExtensions",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui/SerilogLogger',
        title:"SerilogLogger",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Controls/FauxPowerShellConsole',
        title:"FauxPowerShellConsole",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/ShowSourcesMessage',
        title:"ShowSourcesMessage",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/SemanticVersionTypeConverter',
        title:"SemanticVersionTypeConverter",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities.Converters/NullToValue',
        title:"NullToValue",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/ChocolateyFeature',
        title:"ChocolateyFeature",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui/Elevation',
        title:"Elevation",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models.Messages/PackageChangeType',
        title:"PackageChangeType",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Base/ConnectionClosedException',
        title:"ConnectionClosedException",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.ViewModels.Items/PackageViewModel',
        title:"PackageViewModel",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Models/PowerShellOutputLine',
        title:"PowerShellOutputLine",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui/App',
        title:"App",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Services/ProgressService',
        title:"ProgressService",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Utilities/DefaultsExtensions',
        title:"DefaultsExtensions",
        description:""
    });

    y({
        url:'/ChocolateyGUI/api/ChocolateyGui.Enums/ListViewMode',
        title:"ListViewMode",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
