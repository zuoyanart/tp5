require.resourceMap({
  "res": {
    "site/home/pages/node.vue": {
      "url": "/static/site/home/pages/node.js",
      "type": "js"
    },
    "site/home/components/list-text/list.vue": {
      "url": "/static/site/home/components/list-text/list.js",
      "type": "js"
    },
    "site/home/pages/list.vue": {
      "url": "/static/site/home/pages/list.js",
      "type": "js",
      "deps": [
        "site/home/components/list-text/list.vue"
      ]
    },
    "site/home/components/list-img/list.vue": {
      "url": "/static/site/home/components/list-img/list.js",
      "type": "js"
    },
    "site/home/pages/list-img.vue": {
      "url": "/static/site/home/pages/list-img.js",
      "type": "js",
      "deps": [
        "site/home/components/list-img/list.vue"
      ]
    },
    "site/home/pages/content.vue": {
      "url": "/static/site/home/pages/content.js",
      "type": "js"
    },
    "site/home/pages/team.vue": {
      "url": "/static/site/home/pages/team.js",
      "type": "js"
    }
  },
  "pkg": {}
});