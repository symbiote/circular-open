Once we have the site deployed to pre-prod or prod, we need a process of updating the backend where we can carefully update the fields without damaging or deleting the content that has been updated or added in the db. 

To do that, Laravel migration is the best tool to update/modify/delete fields and types in the CMS through the codebase. 

### DB backups
First of all, we need to have backups preferably daily backups of the site to ensure that we have the current database to work on. 

> Note: We are in the process of having the db imported in S3 or AWS so that we can download it when needed.

### Assets backups
Same with the database, we also need a backup of the assets. However, this can be optional as we don’t need to download all the assets when we are doing maintenance with the project.

### DB import

```
- Mark remote as INSTALLED=false in .env
- Import DB (do backup first before importing)
- php artisan streams:compile
- Mark remote as INSTALLED=true again.
```

### Migration

There are various ways of migrating fields depends on the stream or fields you would like to modify.

### Fields

If you have addons installed and you wanted to add fields you can do so by.

```
./dr.sh php artisan make:migration title_of_migration --addon=addon_to_modify --fields
```

The above creates a file in the migrations folder either inside the `addons/addon_to_modify/migrations` or in `database/migrations` then you may add the configs as the example below

```
protected $fields = [
        'name' => 'anomaly.field_type.text',
        'slug' => [
            'type' => 'anomaly.field_type.slug',
            'config' => [
                'slugify' => 'name',
                'type' => '_'
            ],
        ],
    ];
```

### Stream

Similar to the fields above, you can specify a stream to modify by adding `--stream=stream_slug` as a parameter.

```
./dr.sh php artisan make:migration title_of_migration --addon=addon_to_modify --stream=stream_slug
```

Example:

```
 protected $delete = true;
   
    protected $stream = [
        'slug' => 'waste_material',
        'title_column' => 'name',
        'translatable' => true,
        'versionable' => false,
        'trashable' => false,
        'searchable' => false,
        'sortable' => false,
    ];

    protected $assignments = [
        'name' => [
            'translatable' => true,
            'required' => true,
        ],
        'slug' => [
            'unique' => true,
            'required' => true,
        ],
    ];
```

### Appending Streams

Often times you will need to append streams information by adding fields, assignments, or updating streams. You can use the properties show in the examples above to add fields and/or assignments and update streams.

Example:

```
<?php

use Anomaly\Streams\Platform\Database\Migration\Migration;

class AnomalyModuleUsersAddExampleField extends Migration
{

    protected $delete = false;

    protected $stream = [
        'slug' => 'roles',
    ];

    protected $fields = [
        'example' => 'anomaly.field_type.boolean',
    ];

    protected $assignments = [
        'example'        => [
            'required'     => true,
            'translatable' => true,
        ],
    ];

}
```

### Default Laravel Migration

You can also create "normal" migrations by omitting the `--fields` and `--stream` options. This will create a migration very similar to Laravel migrations with the exception that the fields, streams, and assignments repositories are all available to use.

```
./dr.sh php artisan make:migration title_of_migration
```

Example:

```
<?php

use Anomaly\Streams\Platform\Database\Migration\Migration;

class TitleOfMigration extends Migration
{

    public function up()
    {
        $stream = $this->streams()->findBySlugAndNamespace('pages', 'pages');

        $stream
            ->setAttribute('searchable', true)
            ->save();

        $field = $this->fields()
            ->create(
                [
                    'slug'      => 'content',
                    'namespace' => 'example',
                    'type'      => 'anomaly.field_type.wysiwyg',
                ]
            );

        $this->assignments()
            ->create(
                [
                    'field'    => $field,
                    'stream'   => $stream,
                    'required' => true,
                ]
            );
    }

    public function down()
    {
        $stream = $this->streams()->findBySlugAndNamespace('pages', 'pages');

        $stream
            ->setAttribute('searchable', false)
            ->save();

        if ($field = $this->fields()->findBySlugAndNamespace('content', 'example')) {
            $field->delete(); // Will clean up abandoned assignments.
        }
    }
}
```