<?php

return [
    '/<path>-<nodeid>-<mp>list'   => ['listpage/index', [], ['nodeid' => '\d+', 'mp'=> '\d+']],
    '/content/:id'   => ['Contentpage/index', [], ['id' => '\d+']],
    '/content_photo/:id'   => ['Contentpage/index', [], ['id' => '\d+']],
];
