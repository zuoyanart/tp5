require.resourceMap({
  "res": {
    "site/admin/components/tree/tree-item.vue": {
      "url": "/static/site/admin/components/tree/tree-item.js",
      "type": "js"
    },
    "site/admin/components/tree/tree.vue": {
      "url": "/static/site/admin/components/tree/tree.js",
      "type": "js",
      "deps": [
        "site/admin/components/tree/tree-item.vue"
      ]
    },
    "site/admin/pages/tree/tree.vue": {
      "url": "/static/site/admin/pages/tree/tree.js",
      "type": "js",
      "deps": [
        "site/admin/components/tree/tree.vue"
      ]
    },
    "kindeditor": {
      "url": "/static/plugins/kindeditor/kindeditor-min_412e47b.js",
      "type": "js"
    },
    "site/admin/pages/tree/edit.vue": {
      "url": "/static/site/admin/pages/tree/edit.js",
      "type": "js",
      "deps": [
        "kindeditor"
      ]
    },
    "site/admin/components/list/list.vue": {
      "url": "/static/site/admin/components/list/list.js",
      "type": "js"
    },
    "site/admin/pages/news/news.vue": {
      "url": "/static/site/admin/pages/news/news.js",
      "type": "js",
      "deps": [
        "site/admin/components/list/list.vue"
      ]
    },
    "site/admin/pages/news/edit.vue": {
      "url": "/static/site/admin/pages/news/edit.js",
      "type": "js",
      "deps": [
        "kindeditor"
      ]
    },
    "site/admin/pages/block/block.vue": {
      "url": "/static/site/admin/pages/block/block.js",
      "type": "js",
      "deps": [
        "site/admin/components/list/list.vue"
      ]
    },
    "site/admin/pages/block/edit.vue": {
      "url": "/static/site/admin/pages/block/edit.js",
      "type": "js",
      "deps": [
        "kindeditor"
      ]
    },
    "site/admin/pages/guestbook/guestbook.vue": {
      "url": "/static/site/admin/pages/guestbook/guestbook.js",
      "type": "js",
      "deps": [
        "site/admin/components/list/list.vue"
      ]
    },
    "site/admin/pages/user/user.vue": {
      "url": "/static/site/admin/pages/user/user.js",
      "type": "js",
      "deps": [
        "site/admin/components/list/list.vue"
      ]
    },
    "site/admin/pages/user/edit.vue": {
      "url": "/static/site/admin/pages/user/edit.js",
      "type": "js"
    }
  },
  "pkg": {}
});