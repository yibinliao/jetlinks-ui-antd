export enum ROLEKEYS {
  'device' = 'device',
  'link' = 'link',
  'complex' = 'complex',
}

export type roleKeysType = keyof typeof ROLEKEYS;

export const RoleData = {
  [ROLEKEYS.device]: {
    "name": "设备接入岗", "description": "该角色负责设备接入模块的维护管理", "state": {"text": "正常", "value": "enabled"},
  },
  [ROLEKEYS.link]: {
    "name": "运维管理岗", "description": "该角色负责系统运维模块的维护管理", "state": {"text": "正常", "value": "enabled"},
  },
  [ROLEKEYS.complex]: {
    "name": "综合管理岗", "description": "该角色负责系统运维和设备接入模块的维护管理", "state": {"text": "正常", "value": "enabled"},
  },
}

export default {
  [ROLEKEYS.device]: [{
    "id": "1508369752477196288",
    "parentId": "1507167185484652544",
    "path": "5Lhl-pvIx-LS9j",
    "sortIndex": 2,
    "level": 1,
    "name": "产品",
    "code": "device/Product",
    "icon": "icon-chanpin",
    "url": "/iot/device/Product",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启/禁用", "enabled": true, "granted": true}, {
      "id": "export",
      "name": "导出",
      "enabled": true,
      "granted": true
    }, {"id": "import", "name": "导入", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "product",
    "indirectMenus": ["1508369752477196288"],
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {"switch": true},
    "createTime": 1648458347800,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": true
  }, {
    "id": "1508370378212827136",
    "parentId": "1507167185484652544",
    "path": "5Lhl-pvIx-UbTS",
    "sortIndex": 3,
    "level": 1,
    "name": "设备",
    "code": "device/Instance",
    "icon": "icon-shebei",
    "url": "/iot/device/Instance",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "export",
      "name": "导出",
      "enabled": true,
      "granted": true
    }, {"id": "import", "name": "导入", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启/禁用", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "device",
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {"switch": true},
    "createTime": 1648458496987,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": true
  }, {
    "id": "1508376234757251072",
    "parentId": "1507167185484652544",
    "path": "5Lhl-pvIx-ikr6",
    "sortIndex": 4,
    "level": 1,
    "name": "产品分类",
    "code": "device/Category",
    "icon": "icon-chanpinfenlei1",
    "url": "/iot/device/Category",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "deviceCategory",
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {"switch": true},
    "createTime": 1648459893283,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": true
  }, {
    "id": "1508389839737249792",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-KFBi",
    "sortIndex": 2,
    "level": 1,
    "name": "设备接入网关",
    "code": "link/AccessConfig",
    "icon": "icon-wangguanzishebei",
    "url": "/iot/link/accessConfig",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启/禁用", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648463136975,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1508389549759848448",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-P4wv",
    "sortIndex": 3,
    "level": 3,
    "name": "协议管理",
    "code": "link/Protocol",
    "icon": "icon-tongzhiguanli",
    "url": "/iot/link/protocol",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648463067839,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1509002494010966016",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-7epa",
    "sortIndex": 4,
    "level": 3,
    "name": "日志管理",
    "code": "Log",
    "icon": "icon-rizhifuwu",
    "url": "/iot/link/Log",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648609205137,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1509000432275668992",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-hmrn",
    "sortIndex": 5,
    "level": 1,
    "name": "网络组件",
    "code": "link/Type",
    "icon": "icon-wangluozujian",
    "url": "/iot/link/type",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetType": "network",
    "assetAccesses": [],
    "options": {},
    "createTime": 1648608713580,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1524937824579186688",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-mxcr",
    "sortIndex": 6,
    "level": 3,
    "name": "证书管理",
    "code": "link/Certificate",
    "icon": "icon-rizhifuwu",
    "url": "/iot/link/Certificate",
    "buttons": [{"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652408484008,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1509357743478890496",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-MJs3",
    "sortIndex": 7,
    "level": 1,
    "name": "流媒体服务",
    "code": "media/Stream",
    "icon": "icon-xuanzetongdao1",
    "url": "/iot/link/media/Stream",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648693903204,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1523855801308172288",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-DxIP",
    "sortIndex": 80000,
    "level": 1,
    "name": "通道配置",
    "code": "link/Channel",
    "icon": "icon-zidingyiguize",
    "url": "/iot/link/Channel",
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "deviceGateway",
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {},
    "children": [{
      "id": "1523856379614613504",
      "parentId": "1523855801308172288",
      "path": "5Lhl-ba0F-DxIP-j35w",
      "sortIndex": 1,
      "level": 1,
      "name": "OPC UA",
      "code": "link/Channel/Opcua",
      "icon": "icon-zhilianshebei",
      "url": "/iot/link/Channel/Opcua",
      "buttons": [{"id": "view", "name": "设备接入", "enabled": true, "granted": true}, {
        "id": "action",
        "name": "启/禁用",
        "enabled": true,
        "granted": true
      }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
        "id": "delete",
        "name": "删除",
        "enabled": true,
        "granted": true
      }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
      "accessSupport": {"text": "支持", "value": "support"},
      "assetType": "deviceGateway",
      "assetAccesses": [{
        "supportId": "ignore",
        "name": "全部数据",
        "enabled": false,
        "granted": false
      }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
        "supportId": "org",
        "name": "所在部门",
        "enabled": false,
        "granted": false
      }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
      "options": {},
      "createTime": 1652150647435,
      "accessDescription": "此菜单支持数据权限控制",
      "granted": true
    }, {
      "id": "1526448837320056832",
      "parentId": "1523855801308172288",
      "path": "5Lhl-ba0F-DxIP-ryO5",
      "sortIndex": 1,
      "level": 4,
      "name": "Modbus",
      "code": "link/Channel/Modbus",
      "icon": "icon-changjingliandong",
      "url": "/iot/link/Channel/Modbus",
      "buttons": [{"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
        "id": "action",
        "name": "启/禁用",
        "enabled": true,
        "granted": true
      }, {"id": "view", "name": "设备接入", "enabled": true, "granted": true}, {
        "id": "delete",
        "name": "删除",
        "enabled": true,
        "granted": true
      }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
      "accessSupport": {"text": "不支持", "value": "unsupported"},
      "assetAccesses": [],
      "options": {},
      "createTime": 1652768737511,
      "accessDescription": "此菜单不支持数据权限控制",
      "granted": true
    }],
    "createTime": 1652150509538,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": false
  }, {
    "id": "1523856379614613504",
    "parentId": "1523855801308172288",
    "path": "5Lhl-ba0F-DxIP-j35w",
    "sortIndex": 1,
    "level": 1,
    "name": "OPC UA",
    "code": "link/Channel/Opcua",
    "icon": "icon-zhilianshebei",
    "url": "/iot/link/Channel/Opcua",
    "buttons": [{"id": "view", "name": "设备接入", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "deviceGateway",
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {},
    "createTime": 1652150647435,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": true
  }, {
    "id": "1526448837320056832",
    "parentId": "1523855801308172288",
    "path": "5Lhl-ba0F-DxIP-ryO5",
    "sortIndex": 1,
    "level": 4,
    "name": "Modbus",
    "code": "link/Channel/Modbus",
    "icon": "icon-changjingliandong",
    "url": "/iot/link/Channel/Modbus",
    "buttons": [{"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "view", "name": "设备接入", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652768737511,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1519924864423301120",
    "parentId": "1519923611458867200",
    "path": "5Lhl-1lNe-xRZh",
    "sortIndex": 2,
    "level": 1,
    "name": "告警配置",
    "code": "rule-engine/Alarm/Configuration",
    "icon": "icon-chajianguanli",
    "url": "/iot/Alarm/Configuration",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启/禁用", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "tigger",
      "name": "手动触发",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1651213301170,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1519925190115201024",
    "parentId": "1519923611458867200",
    "path": "5Lhl-1lNe-8jOG",
    "sortIndex": 3,
    "level": 1,
    "name": "基础配置",
    "code": "rule-engine/Alarm/Config",
    "icon": "icon-chajianguanli",
    "url": "/iot/Alarm/Config",
    "buttons": [{"id": "update", "name": "保存", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1651213378819,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1519924504598155264",
    "parentId": "1519923611458867200",
    "path": "5Lhl-1lNe-pUxa",
    "sortIndex": 4,
    "level": 1,
    "name": "告警记录",
    "code": "rule-engine/Alarm/Log",
    "icon": "icon-rizhifuwu",
    "url": "/iot/Alarm/Log",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "告警处理",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1651213215380,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1508992228061855744",
    "parentId": "1507162853817495552",
    "path": "5Lhl-ugVw",
    "sortIndex": 5,
    "level": 1,
    "name": "通知管理",
    "code": "notice",
    "icon": "icon-tongzhijilu",
    "url": "/iot/notice/Type",
    "buttons": [{"id": "bind", "name": "同步用户", "enabled": true, "granted": true}, {
      "id": "view",
      "name": "查看",
      "enabled": true,
      "granted": true
    }, {"id": "log", "name": "通知记录", "enabled": true, "granted": true}, {
      "id": "debug",
      "name": "调试",
      "enabled": true,
      "granted": true
    }, {"id": "export", "name": "导出", "enabled": true, "granted": true}, {
      "id": "import",
      "name": "导入",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648606757542,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1523926550113660928",
    "parentId": "1523926040258260992",
    "path": "5Lhl-tQnx-7Jjv",
    "sortIndex": 1,
    "level": 3,
    "name": "DuerOS",
    "code": "Northbound/DuerOS",
    "icon": "icon-yunyunjieru",
    "url": "/iot/northbound/DuerOS",
    "buttons": [{"id": "action", "name": "状态切换", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652167377386,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1523927946623246336",
    "parentId": "1523926040258260992",
    "path": "5Lhl-tQnx-xWBI",
    "sortIndex": 2,
    "level": 3,
    "name": "阿里云",
    "code": "Northbound/AliCloud",
    "icon": "icon-yunyunjieru",
    "url": "/iot/northbound/AliCloud",
    "buttons": [{"id": "action", "name": "启用/禁用", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652167710336,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1508697728656568320",
    "parentId": "1508385220776747008",
    "path": "5Lhl-qOaD-Tqbl",
    "sortIndex": 1,
    "level": 3,
    "name": "规则编排",
    "code": "rule-engine/Instance",
    "icon": "icon-changjingliandong",
    "url": "/iot/rule-engine/Instance",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {"switch": true},
    "createTime": 1648536543411,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1516690027969744896",
    "parentId": "1508385220776747008",
    "path": "5Lhl-qOaD-PDl2",
    "sortIndex": 2,
    "level": 3,
    "name": "场景联动",
    "code": "rule-engine/Scene",
    "icon": "icon-yunweiguanli-1",
    "url": "/iot/rule-engine/scene",
    "buttons": [{"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启用/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1650442056051,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }],
  [ROLEKEYS.link]: [{"id":"1-4","parentId":"1","path":"Cn4B-c6w1","sortIndex":104,"level":2,"name":"运维管理","code":"link","icon":"icon-yunweiguanli-1","url":"/iot/link","assetAccesses":[],"children":[{"id":"1-4-1","parentId":"1-4","path":"Cn4B-c6w1-4Mev","sortIndex":10401,"level":3,"name":"仪表盘","code":"link/DashBoard","icon":"icon-keshihua","url":"/iot/link/dashboard","assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[],"buttons":[]},{"id":"1-4-2","parentId":"1-4","path":"Cn4B-c6w1-L5eg","sortIndex":10402,"level":3,"name":"设备接入网关","code":"link/AccessConfig","icon":"icon-wangguanzishebei","url":"/iot/link/accessConfig","buttons":[{"id":"view","name":"查看","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[]},{"id":"1-4-3","parentId":"1-4","path":"Cn4B-c6w1-RtEF","sortIndex":10403,"level":3,"name":"协议管理","code":"link/Protocol","icon":"icon-tongzhiguanli","url":"/iot/link/protocol","buttons":[{"id":"view","name":"查看","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[]},{"id":"1-4-4","parentId":"1-4","path":"Cn4B-c6w1-K0BK","sortIndex":10404,"level":3,"name":"日志管理","code":"Log","icon":"icon-rizhifuwu","url":"/iot/link/Log","assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[],"buttons":[]},{"id":"1-4-5","parentId":"1-4","path":"Cn4B-c6w1-G0K1","sortIndex":10405,"level":3,"name":"网络组件","code":"link/Type","icon":"icon-wangluozujian","url":"/iot/link/type","buttons":[{"id":"view","name":"查看","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[]},{"id":"1-4-6","parentId":"1-4","path":"Cn4B-c6w1-wgvE","sortIndex":10406,"level":3,"name":"证书管理","code":"link/Certificate","icon":"icon-rizhifuwu","url":"/iot/link/Certificate","buttons":[{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[]},{"id":"1-4-7","parentId":"1-4","path":"Cn4B-c6w1-J3vw","sortIndex":10407,"level":3,"name":"流媒体服务","code":"media/Stream","icon":"icon-xuanzetongdao1","url":"/iot/link/Stream","buttons":[{"id":"view","name":"查看","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[]},{"id":"1-4-8","parentId":"1-4","path":"Cn4B-c6w1-LQyS","sortIndex":10408,"level":3,"name":"通道配置","code":"link/Channel","icon":"icon-zidingyiguize","url":"/iot/link/Channel","assetAccesses":[],"children":[{"id":"1-4-8-1","parentId":"1-4-8","path":"Cn4B-c6w1-LQyS-W2l1","sortIndex":1040801,"level":4,"name":"OPC UA","code":"link/Channel/Opcua","icon":"icon-zhilianshebei","url":"/iot/link/Channel/Opcua","buttons":[{"id":"view","name":"设备接入","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[]},{"id":"1-4-8-2","parentId":"1-4-8","path":"Cn4B-c6w1-LQyS-804G","sortIndex":1040802,"level":4,"name":"Modbus","code":"link/Channel/Modbus","icon":"icon-changjingliandong","url":"/iot/link/Channel/Modbus","assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[],"buttons":[]}],"createTime":1658906738122,"granted":false,"buttons":[]},{"id":"1-4-9","parentId":"1-4","path":"Cn4B-c6w1-z3id","sortIndex":10409,"level":3,"name":"远程升级","code":"device/Firmware","icon":"icon-wangluozujian","url":"/iot/link/firmware","buttons":[{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[]}],"createTime":1658906738122,"granted":true,"buttons":[]},{"id":"1-4-1","parentId":"1-4","path":"Cn4B-c6w1-4Mev","sortIndex":10401,"level":3,"name":"仪表盘","code":"link/DashBoard","icon":"icon-keshihua","url":"/iot/link/dashboard","assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[],"buttons":[]},{"id":"1-4-2","parentId":"1-4","path":"Cn4B-c6w1-L5eg","sortIndex":10402,"level":3,"name":"设备接入网关","code":"link/AccessConfig","icon":"icon-wangguanzishebei","url":"/iot/link/accessConfig","buttons":[{"id":"view","name":"查看","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[]},{"id":"1-4-3","parentId":"1-4","path":"Cn4B-c6w1-RtEF","sortIndex":10403,"level":3,"name":"协议管理","code":"link/Protocol","icon":"icon-tongzhiguanli","url":"/iot/link/protocol","buttons":[{"id":"view","name":"查看","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[]},{"id":"1-4-4","parentId":"1-4","path":"Cn4B-c6w1-K0BK","sortIndex":10404,"level":3,"name":"日志管理","code":"Log","icon":"icon-rizhifuwu","url":"/iot/link/Log","assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[],"buttons":[]},{"id":"1-4-5","parentId":"1-4","path":"Cn4B-c6w1-G0K1","sortIndex":10405,"level":3,"name":"网络组件","code":"link/Type","icon":"icon-wangluozujian","url":"/iot/link/type","buttons":[{"id":"view","name":"查看","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[]},{"id":"1-4-6","parentId":"1-4","path":"Cn4B-c6w1-wgvE","sortIndex":10406,"level":3,"name":"证书管理","code":"link/Certificate","icon":"icon-rizhifuwu","url":"/iot/link/Certificate","buttons":[{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[]},{"id":"1-4-7","parentId":"1-4","path":"Cn4B-c6w1-J3vw","sortIndex":10407,"level":3,"name":"流媒体服务","code":"media/Stream","icon":"icon-xuanzetongdao1","url":"/iot/link/Stream","buttons":[{"id":"view","name":"查看","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[]},{"id":"1-4-8","parentId":"1-4","path":"Cn4B-c6w1-LQyS","sortIndex":10408,"level":3,"name":"通道配置","code":"link/Channel","icon":"icon-zidingyiguize","url":"/iot/link/Channel","assetAccesses":[],"children":[{"id":"1-4-8-1","parentId":"1-4-8","path":"Cn4B-c6w1-LQyS-W2l1","sortIndex":1040801,"level":4,"name":"OPC UA","code":"link/Channel/Opcua","icon":"icon-zhilianshebei","url":"/iot/link/Channel/Opcua","buttons":[{"id":"view","name":"设备接入","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[]},{"id":"1-4-8-2","parentId":"1-4-8","path":"Cn4B-c6w1-LQyS-804G","sortIndex":1040802,"level":4,"name":"Modbus","code":"link/Channel/Modbus","icon":"icon-changjingliandong","url":"/iot/link/Channel/Modbus","assetAccesses":[],"createTime":1658906738122,"granted":false,"children":[],"buttons":[]}],"createTime":1658906738122,"granted":true,"buttons":[]},{"id":"1-4-8-1","parentId":"1-4-8","path":"Cn4B-c6w1-LQyS-W2l1","sortIndex":1040801,"level":4,"name":"OPC UA","code":"link/Channel/Opcua","icon":"icon-zhilianshebei","url":"/iot/link/Channel/Opcua","buttons":[{"id":"view","name":"设备接入","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[]},{"id":"1-4-8-2","parentId":"1-4-8","path":"Cn4B-c6w1-LQyS-804G","sortIndex":1040802,"level":4,"name":"Modbus","code":"link/Channel/Modbus","icon":"icon-changjingliandong","url":"/iot/link/Channel/Modbus","assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[],"buttons":[]},{"id":"1-4-9","parentId":"1-4","path":"Cn4B-c6w1-z3id","sortIndex":10409,"level":3,"name":"远程升级","code":"device/Firmware","icon":"icon-wangluozujian","url":"/iot/link/firmware","buttons":[{"id":"update","name":"编辑","enabled":false,"granted":true},{"id":"action","name":"启/禁用","enabled":false,"granted":true},{"id":"delete","name":"删除","enabled":false,"granted":true},{"id":"add","name":"新增","enabled":false,"granted":true}],"assetAccesses":[],"createTime":1658906738122,"granted":true,"children":[]}],
  [ROLEKEYS.complex]: [{
    "id": "1508369752477196288",
    "parentId": "1507167185484652544",
    "path": "5Lhl-pvIx-LS9j",
    "sortIndex": 2,
    "level": 1,
    "name": "产品",
    "code": "device/Product",
    "icon": "icon-chanpin",
    "url": "/iot/device/Product",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启/禁用", "enabled": true, "granted": true}, {
      "id": "export",
      "name": "导出",
      "enabled": true,
      "granted": true
    }, {"id": "import", "name": "导入", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "product",
    "indirectMenus": ["1508369752477196288"],
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {"switch": true},
    "createTime": 1648458347800,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": true
  }, {
    "id": "1508370378212827136",
    "parentId": "1507167185484652544",
    "path": "5Lhl-pvIx-UbTS",
    "sortIndex": 3,
    "level": 1,
    "name": "设备",
    "code": "device/Instance",
    "icon": "icon-shebei",
    "url": "/iot/device/Instance",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "export",
      "name": "导出",
      "enabled": true,
      "granted": true
    }, {"id": "import", "name": "导入", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启/禁用", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "device",
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {"switch": true},
    "createTime": 1648458496987,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": true
  }, {
    "id": "1508376234757251072",
    "parentId": "1507167185484652544",
    "path": "5Lhl-pvIx-ikr6",
    "sortIndex": 4,
    "level": 1,
    "name": "产品分类",
    "code": "device/Category",
    "icon": "icon-chanpinfenlei1",
    "url": "/iot/device/Category",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "deviceCategory",
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {"switch": true},
    "createTime": 1648459893283,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": true
  }, {
    "id": "1508389839737249792",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-KFBi",
    "sortIndex": 2,
    "level": 1,
    "name": "设备接入网关",
    "code": "link/AccessConfig",
    "icon": "icon-wangguanzishebei",
    "url": "/iot/link/accessConfig",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启/禁用", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648463136975,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1508389549759848448",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-P4wv",
    "sortIndex": 3,
    "level": 3,
    "name": "协议管理",
    "code": "link/Protocol",
    "icon": "icon-tongzhiguanli",
    "url": "/iot/link/protocol",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648463067839,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1509002494010966016",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-7epa",
    "sortIndex": 4,
    "level": 3,
    "name": "日志管理",
    "code": "Log",
    "icon": "icon-rizhifuwu",
    "url": "/iot/link/Log",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648609205137,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1509000432275668992",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-hmrn",
    "sortIndex": 5,
    "level": 1,
    "name": "网络组件",
    "code": "link/Type",
    "icon": "icon-wangluozujian",
    "url": "/iot/link/type",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetType": "network",
    "assetAccesses": [],
    "options": {},
    "createTime": 1648608713580,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1524937824579186688",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-mxcr",
    "sortIndex": 6,
    "level": 3,
    "name": "证书管理",
    "code": "link/Certificate",
    "icon": "icon-rizhifuwu",
    "url": "/iot/link/Certificate",
    "buttons": [{"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652408484008,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1509357743478890496",
    "parentId": "1508388133506965504",
    "path": "5Lhl-ba0F-MJs3",
    "sortIndex": 7,
    "level": 1,
    "name": "流媒体服务",
    "code": "media/Stream",
    "icon": "icon-xuanzetongdao1",
    "url": "/iot/link/media/Stream",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648693903204,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1523856379614613504",
    "parentId": "1523855801308172288",
    "path": "5Lhl-ba0F-DxIP-j35w",
    "sortIndex": 1,
    "level": 1,
    "name": "OPC UA",
    "code": "link/Channel/Opcua",
    "icon": "icon-zhilianshebei",
    "url": "/iot/link/Channel/Opcua",
    "buttons": [{"id": "view", "name": "设备接入", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "支持", "value": "support"},
    "assetType": "deviceGateway",
    "assetAccesses": [{
      "supportId": "ignore",
      "name": "全部数据",
      "enabled": false,
      "granted": false
    }, {"supportId": "creator", "name": "自己创建的", "enabled": true, "granted": true}, {
      "supportId": "org",
      "name": "所在部门",
      "enabled": false,
      "granted": false
    }, {"supportId": "org-include-children", "name": "所在部门及下级部门", "enabled": false, "granted": false}],
    "options": {},
    "createTime": 1652150647435,
    "accessDescription": "此菜单支持数据权限控制",
    "granted": true
  }, {
    "id": "1526448837320056832",
    "parentId": "1523855801308172288",
    "path": "5Lhl-ba0F-DxIP-ryO5",
    "sortIndex": 1,
    "level": 4,
    "name": "Modbus",
    "code": "link/Channel/Modbus",
    "icon": "icon-changjingliandong",
    "url": "/iot/link/Channel/Modbus",
    "buttons": [{"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "view", "name": "设备接入", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652768737511,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1519924864423301120",
    "parentId": "1519923611458867200",
    "path": "5Lhl-1lNe-xRZh",
    "sortIndex": 2,
    "level": 1,
    "name": "告警配置",
    "code": "rule-engine/Alarm/Configuration",
    "icon": "icon-chajianguanli",
    "url": "/iot/Alarm/Configuration",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启/禁用", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "tigger",
      "name": "手动触发",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1651213301170,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1519925190115201024",
    "parentId": "1519923611458867200",
    "path": "5Lhl-1lNe-8jOG",
    "sortIndex": 3,
    "level": 1,
    "name": "基础配置",
    "code": "rule-engine/Alarm/Config",
    "icon": "icon-chajianguanli",
    "url": "/iot/Alarm/Config",
    "buttons": [{"id": "update", "name": "保存", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1651213378819,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1519924504598155264",
    "parentId": "1519923611458867200",
    "path": "5Lhl-1lNe-pUxa",
    "sortIndex": 4,
    "level": 1,
    "name": "告警记录",
    "code": "rule-engine/Alarm/Log",
    "icon": "icon-rizhifuwu",
    "url": "/iot/Alarm/Log",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "告警处理",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1651213215380,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1508992228061855744",
    "parentId": "1507162853817495552",
    "path": "5Lhl-ugVw",
    "sortIndex": 5,
    "level": 1,
    "name": "通知管理",
    "code": "notice",
    "icon": "icon-tongzhijilu",
    "url": "/iot/notice/Type",
    "buttons": [{"id": "bind", "name": "同步用户", "enabled": true, "granted": true}, {
      "id": "view",
      "name": "查看",
      "enabled": true,
      "granted": true
    }, {"id": "log", "name": "通知记录", "enabled": true, "granted": true}, {
      "id": "debug",
      "name": "调试",
      "enabled": true,
      "granted": true
    }, {"id": "export", "name": "导出", "enabled": true, "granted": true}, {
      "id": "import",
      "name": "导入",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648606757542,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1523926550113660928",
    "parentId": "1523926040258260992",
    "path": "5Lhl-tQnx-7Jjv",
    "sortIndex": 1,
    "level": 3,
    "name": "DuerOS",
    "code": "Northbound/DuerOS",
    "icon": "icon-yunyunjieru",
    "url": "/iot/northbound/DuerOS",
    "buttons": [{"id": "action", "name": "状态切换", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652167377386,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1523927946623246336",
    "parentId": "1523926040258260992",
    "path": "5Lhl-tQnx-xWBI",
    "sortIndex": 2,
    "level": 3,
    "name": "阿里云",
    "code": "Northbound/AliCloud",
    "icon": "icon-yunyunjieru",
    "url": "/iot/northbound/AliCloud",
    "buttons": [{"id": "action", "name": "启用/禁用", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652167710336,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1508697728656568320",
    "parentId": "1508385220776747008",
    "path": "5Lhl-qOaD-Tqbl",
    "sortIndex": 1,
    "level": 3,
    "name": "规则编排",
    "code": "rule-engine/Instance",
    "icon": "icon-changjingliandong",
    "url": "/iot/rule-engine/Instance",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {"switch": true},
    "createTime": 1648536543411,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1516690027969744896",
    "parentId": "1508385220776747008",
    "path": "5Lhl-qOaD-PDl2",
    "sortIndex": 2,
    "level": 3,
    "name": "场景联动",
    "code": "rule-engine/Scene",
    "icon": "icon-yunweiguanli-1",
    "url": "/iot/rule-engine/scene",
    "buttons": [{"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启用/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1650442056051,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1509486152238456832",
    "parentId": "1509000835335700480",
    "path": "efbr-bH3y",
    "sortIndex": 3,
    "level": 1,
    "name": "视频设备",
    "code": "media/Device",
    "icon": "icon-keshihua",
    "url": "/media/device",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "间接支持", "value": "indirect"},
    "indirectMenus": ["1508370378212827136"],
    "assetAccesses": [],
    "options": {},
    "createTime": 1648724518244,
    "accessDescription": "此菜单使用[设备]进行数据权限控制.",
    "granted": true
  }, {
    "id": "1509002241992015872",
    "parentId": "1509000835335700480",
    "path": "efbr-qGOv",
    "sortIndex": 4,
    "level": 1,
    "name": "分屏展示",
    "code": "media/SplitScreen",
    "icon": "icon-fenpingzhanshi1",
    "url": "/media/SplitScreen",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648609145049,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1509358024174297088",
    "parentId": "1509000835335700480",
    "path": "efbr-ujdH",
    "sortIndex": 5,
    "level": 1,
    "name": "国标级联",
    "code": "media/Cascade",
    "icon": "icon-guojijilian",
    "url": "/media/Cascade",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "push", "name": "推送", "enabled": true, "granted": true}, {
      "id": "channel",
      "name": "选择通道",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1648693970124,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1531167168376012800",
    "parentId": "1500675218505838592",
    "path": "ngRP-fEWO",
    "sortIndex": 1,
    "level": 1,
    "name": "基础配置",
    "code": "system/Basis",
    "icon": "icon-shezhi",
    "url": "/system/Basis",
    "buttons": [{"id": "update", "name": "保存", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1653893675302,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1501478441437212672",
    "parentId": "1500675218505838592",
    "path": "ngRP-Lygj",
    "sortIndex": 2,
    "level": 1,
    "name": "用户管理",
    "code": "system/User",
    "icon": "icon-yonghuguanli",
    "url": "/system/user",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetType": "organization",
    "assetAccesses": [],
    "options": {"switch": true},
    "createTime": 1646815331213,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1500709112592576512",
    "parentId": "1500675218505838592",
    "path": "ngRP-KUqG",
    "sortIndex": 3,
    "level": 1,
    "name": "部门管理",
    "code": "system/Department",
    "icon": "icon-bumenguanli",
    "url": "/system/Department",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "bind-user",
      "name": "绑定用户",
      "enabled": true,
      "granted": true
    }, {"id": "assert", "name": "分配资产", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {"switch": false},
    "createTime": 1646631908923,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1501477245108465664",
    "parentId": "1500675218505838592",
    "path": "ngRP-RqNl",
    "sortIndex": 4,
    "level": 2,
    "name": "角色管理",
    "code": "system/Role",
    "icon": "icon-jiaoseguanli",
    "url": "/system/Role",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1646815045985,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1500675347774287872",
    "parentId": "1500675218505838592",
    "path": "ngRP-MYhQ",
    "sortIndex": 5,
    "level": 1,
    "name": "菜单管理",
    "code": "system/Menu",
    "icon": "icon-caidanguanli",
    "url": "/system/Menu",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1646623858764,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1501478173505073152",
    "parentId": "1500675218505838592",
    "path": "ngRP-fgPQ",
    "sortIndex": 6,
    "level": 1,
    "name": "权限管理",
    "code": "system/Permission",
    "icon": "icon-quanxianguanli",
    "url": "/system/Permission",
    "buttons": [{"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "启/禁用",
      "enabled": true,
      "granted": true
    }, {"id": "export", "name": "导出", "enabled": true, "granted": true}, {
      "id": "import",
      "name": "导入",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1646815267334,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1524214813516767232",
    "parentId": "1500675218505838592",
    "path": "ngRP-Ynd3",
    "sortIndex": 7,
    "level": 1,
    "name": "第三方平台",
    "code": "system/Platforms",
    "icon": "icon-xitongguanli1",
    "url": "/system/platforms",
    "buttons": [{"id": "empowerment", "name": "赋权", "enabled": true, "granted": true}, {
      "id": "action",
      "name": "重置密码",
      "enabled": true,
      "granted": true
    }, {"id": "delete", "name": "删除", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1652236104731,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1517324024747286528",
    "parentId": "1500675218505838592",
    "path": "ngRP-XSxV",
    "sortIndex": 8,
    "level": 1,
    "name": "关系配置",
    "code": "system/Relationship",
    "icon": "icon-renyuan",
    "url": "/system/Relationship",
    "buttons": [{"id": "update", "name": "编辑", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "view", "name": "查看", "enabled": true, "granted": true}, {
      "id": "add",
      "name": "新增",
      "enabled": true,
      "granted": true
    }],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1650593212662,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }, {
    "id": "1531093074276188160",
    "parentId": "1500675218505838592",
    "path": "ngRP-iUXa",
    "sortIndex": 9,
    "level": 1,
    "name": "数据源管理",
    "code": "system/DataSource",
    "icon": "icon-shebei",
    "url": "/system/DataSource",
    "buttons": [{"id": "manage", "name": "管理", "enabled": true, "granted": true}, {
      "id": "delete",
      "name": "删除",
      "enabled": true,
      "granted": true
    }, {"id": "action", "name": "启用/禁用", "enabled": true, "granted": true}, {
      "id": "update",
      "name": "编辑",
      "enabled": true,
      "granted": true
    }, {"id": "add", "name": "新增", "enabled": true, "granted": true}],
    "accessSupport": {"text": "不支持", "value": "unsupported"},
    "assetAccesses": [],
    "options": {},
    "createTime": 1653876009893,
    "accessDescription": "此菜单不支持数据权限控制",
    "granted": true
  }]
}
