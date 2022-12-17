window.data.instruction = {
    "errors": {},
    "auth": {
        "user": {
            "id": 1,
            "role_id": 1,
            "name": "admin",
            "email": "admin@govorov.ru",
            "avatar": "users/default.png",
            "email_verified_at": null,
            "settings": [],
            "created_at": "2022-10-16T22:52:32.000000Z",
            "updated_at": "2022-10-16T22:52:32.000000Z"
        }
    },
    "ziggy": {
        "url": "./",
        "port": null,
        "defaults": [],
        "routes": {
            "ignition.healthCheck": {
                "uri": "_ignition/health-check",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "ignition.executeSolution": {
                "uri": "_ignition/execute-solution",
                "methods": [
                    "POST"
                ]
            },
            "ignition.updateConfig": {
                "uri": "_ignition/update-config",
                "methods": [
                    "POST"
                ]
            },
            "voyager.login": {
                "uri": "admin/login",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.postlogin": {
                "uri": "admin/login",
                "methods": [
                    "POST"
                ]
            },
            "voyager.dashboard": {
                "uri": "admin",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.logout": {
                "uri": "admin/logout",
                "methods": [
                    "POST"
                ]
            },
            "voyager.upload": {
                "uri": "admin/upload",
                "methods": [
                    "POST"
                ]
            },
            "voyager.profile": {
                "uri": "admin/profile",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.order": {
                "uri": "admin/users/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.action": {
                "uri": "admin/users/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.users.update_order": {
                "uri": "admin/users/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.users.restore": {
                "uri": "admin/users/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.relation": {
                "uri": "admin/users/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.media.remove": {
                "uri": "admin/users/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.users.index": {
                "uri": "admin/users",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.create": {
                "uri": "admin/users/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.store": {
                "uri": "admin/users",
                "methods": [
                    "POST"
                ]
            },
            "voyager.users.show": {
                "uri": "admin/users/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.edit": {
                "uri": "admin/users/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.users.update": {
                "uri": "admin/users/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.users.destroy": {
                "uri": "admin/users/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.menus.order": {
                "uri": "admin/menus/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.action": {
                "uri": "admin/menus/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.update_order": {
                "uri": "admin/menus/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.restore": {
                "uri": "admin/menus/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.relation": {
                "uri": "admin/menus/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.media.remove": {
                "uri": "admin/menus/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.index": {
                "uri": "admin/menus",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.create": {
                "uri": "admin/menus/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.store": {
                "uri": "admin/menus",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.show": {
                "uri": "admin/menus/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.edit": {
                "uri": "admin/menus/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.update": {
                "uri": "admin/menus/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.menus.destroy": {
                "uri": "admin/menus/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.roles.order": {
                "uri": "admin/roles/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.action": {
                "uri": "admin/roles/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.roles.update_order": {
                "uri": "admin/roles/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.roles.restore": {
                "uri": "admin/roles/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.relation": {
                "uri": "admin/roles/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.media.remove": {
                "uri": "admin/roles/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.roles.index": {
                "uri": "admin/roles",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.create": {
                "uri": "admin/roles/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.store": {
                "uri": "admin/roles",
                "methods": [
                    "POST"
                ]
            },
            "voyager.roles.show": {
                "uri": "admin/roles/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.edit": {
                "uri": "admin/roles/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.roles.update": {
                "uri": "admin/roles/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.roles.destroy": {
                "uri": "admin/roles/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.map-dots.order": {
                "uri": "admin/map-dots/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.action": {
                "uri": "admin/map-dots/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.map-dots.update_order": {
                "uri": "admin/map-dots/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.map-dots.restore": {
                "uri": "admin/map-dots/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.relation": {
                "uri": "admin/map-dots/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.media.remove": {
                "uri": "admin/map-dots/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.map-dots.index": {
                "uri": "admin/map-dots",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.create": {
                "uri": "admin/map-dots/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.store": {
                "uri": "admin/map-dots",
                "methods": [
                    "POST"
                ]
            },
            "voyager.map-dots.show": {
                "uri": "admin/map-dots/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.edit": {
                "uri": "admin/map-dots/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.map-dots.update": {
                "uri": "admin/map-dots/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.map-dots.destroy": {
                "uri": "admin/map-dots/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.gallery-photos.order": {
                "uri": "admin/gallery-photos/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.action": {
                "uri": "admin/gallery-photos/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gallery-photos.update_order": {
                "uri": "admin/gallery-photos/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gallery-photos.restore": {
                "uri": "admin/gallery-photos/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.relation": {
                "uri": "admin/gallery-photos/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.media.remove": {
                "uri": "admin/gallery-photos/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gallery-photos.index": {
                "uri": "admin/gallery-photos",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.create": {
                "uri": "admin/gallery-photos/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.store": {
                "uri": "admin/gallery-photos",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gallery-photos.show": {
                "uri": "admin/gallery-photos/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.edit": {
                "uri": "admin/gallery-photos/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gallery-photos.update": {
                "uri": "admin/gallery-photos/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.gallery-photos.destroy": {
                "uri": "admin/gallery-photos/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.albums.order": {
                "uri": "admin/albums/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.action": {
                "uri": "admin/albums/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.albums.update_order": {
                "uri": "admin/albums/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.albums.restore": {
                "uri": "admin/albums/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.relation": {
                "uri": "admin/albums/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.media.remove": {
                "uri": "admin/albums/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.albums.index": {
                "uri": "admin/albums",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.create": {
                "uri": "admin/albums/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.store": {
                "uri": "admin/albums",
                "methods": [
                    "POST"
                ]
            },
            "voyager.albums.show": {
                "uri": "admin/albums/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.edit": {
                "uri": "admin/albums/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.albums.update": {
                "uri": "admin/albums/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.albums.destroy": {
                "uri": "admin/albums/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.awards.order": {
                "uri": "admin/awards/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.action": {
                "uri": "admin/awards/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.awards.update_order": {
                "uri": "admin/awards/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.awards.restore": {
                "uri": "admin/awards/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.relation": {
                "uri": "admin/awards/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.media.remove": {
                "uri": "admin/awards/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.awards.index": {
                "uri": "admin/awards",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.create": {
                "uri": "admin/awards/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.store": {
                "uri": "admin/awards",
                "methods": [
                    "POST"
                ]
            },
            "voyager.awards.show": {
                "uri": "admin/awards/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.edit": {
                "uri": "admin/awards/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.awards.update": {
                "uri": "admin/awards/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.awards.destroy": {
                "uri": "admin/awards/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.books.order": {
                "uri": "admin/books/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.action": {
                "uri": "admin/books/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.books.update_order": {
                "uri": "admin/books/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.books.restore": {
                "uri": "admin/books/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.relation": {
                "uri": "admin/books/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.media.remove": {
                "uri": "admin/books/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.books.index": {
                "uri": "admin/books",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.create": {
                "uri": "admin/books/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.store": {
                "uri": "admin/books",
                "methods": [
                    "POST"
                ]
            },
            "voyager.books.show": {
                "uri": "admin/books/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.edit": {
                "uri": "admin/books/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.books.update": {
                "uri": "admin/books/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.books.destroy": {
                "uri": "admin/books/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.favorites.order": {
                "uri": "admin/favorites/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.action": {
                "uri": "admin/favorites/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.favorites.update_order": {
                "uri": "admin/favorites/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.favorites.restore": {
                "uri": "admin/favorites/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.relation": {
                "uri": "admin/favorites/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.media.remove": {
                "uri": "admin/favorites/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.favorites.index": {
                "uri": "admin/favorites",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.create": {
                "uri": "admin/favorites/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.store": {
                "uri": "admin/favorites",
                "methods": [
                    "POST"
                ]
            },
            "voyager.favorites.show": {
                "uri": "admin/favorites/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.edit": {
                "uri": "admin/favorites/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.favorites.update": {
                "uri": "admin/favorites/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.favorites.destroy": {
                "uri": "admin/favorites/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.gbooks.order": {
                "uri": "admin/gbooks/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.action": {
                "uri": "admin/gbooks/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gbooks.update_order": {
                "uri": "admin/gbooks/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gbooks.restore": {
                "uri": "admin/gbooks/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.relation": {
                "uri": "admin/gbooks/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.media.remove": {
                "uri": "admin/gbooks/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gbooks.index": {
                "uri": "admin/gbooks",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.create": {
                "uri": "admin/gbooks/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.store": {
                "uri": "admin/gbooks",
                "methods": [
                    "POST"
                ]
            },
            "voyager.gbooks.show": {
                "uri": "admin/gbooks/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.edit": {
                "uri": "admin/gbooks/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.gbooks.update": {
                "uri": "admin/gbooks/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.gbooks.destroy": {
                "uri": "admin/gbooks/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.monuments.order": {
                "uri": "admin/monuments/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.action": {
                "uri": "admin/monuments/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.monuments.update_order": {
                "uri": "admin/monuments/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.monuments.restore": {
                "uri": "admin/monuments/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.relation": {
                "uri": "admin/monuments/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.media.remove": {
                "uri": "admin/monuments/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.monuments.index": {
                "uri": "admin/monuments",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.create": {
                "uri": "admin/monuments/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.store": {
                "uri": "admin/monuments",
                "methods": [
                    "POST"
                ]
            },
            "voyager.monuments.show": {
                "uri": "admin/monuments/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.edit": {
                "uri": "admin/monuments/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.monuments.update": {
                "uri": "admin/monuments/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.monuments.destroy": {
                "uri": "admin/monuments/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.pictures.order": {
                "uri": "admin/pictures/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.action": {
                "uri": "admin/pictures/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.pictures.update_order": {
                "uri": "admin/pictures/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.pictures.restore": {
                "uri": "admin/pictures/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.relation": {
                "uri": "admin/pictures/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.media.remove": {
                "uri": "admin/pictures/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.pictures.index": {
                "uri": "admin/pictures",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.create": {
                "uri": "admin/pictures/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.store": {
                "uri": "admin/pictures",
                "methods": [
                    "POST"
                ]
            },
            "voyager.pictures.show": {
                "uri": "admin/pictures/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.edit": {
                "uri": "admin/pictures/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.pictures.update": {
                "uri": "admin/pictures/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.pictures.destroy": {
                "uri": "admin/pictures/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.relics.order": {
                "uri": "admin/relics/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.action": {
                "uri": "admin/relics/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.relics.update_order": {
                "uri": "admin/relics/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.relics.restore": {
                "uri": "admin/relics/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.relation": {
                "uri": "admin/relics/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.media.remove": {
                "uri": "admin/relics/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.relics.index": {
                "uri": "admin/relics",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.create": {
                "uri": "admin/relics/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.store": {
                "uri": "admin/relics",
                "methods": [
                    "POST"
                ]
            },
            "voyager.relics.show": {
                "uri": "admin/relics/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.edit": {
                "uri": "admin/relics/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.relics.update": {
                "uri": "admin/relics/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.relics.destroy": {
                "uri": "admin/relics/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.videos.order": {
                "uri": "admin/videos/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.action": {
                "uri": "admin/videos/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.videos.update_order": {
                "uri": "admin/videos/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.videos.restore": {
                "uri": "admin/videos/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.relation": {
                "uri": "admin/videos/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.media.remove": {
                "uri": "admin/videos/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.videos.index": {
                "uri": "admin/videos",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.create": {
                "uri": "admin/videos/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.store": {
                "uri": "admin/videos",
                "methods": [
                    "POST"
                ]
            },
            "voyager.videos.show": {
                "uri": "admin/videos/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.edit": {
                "uri": "admin/videos/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.videos.update": {
                "uri": "admin/videos/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.videos.destroy": {
                "uri": "admin/videos/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.movies.order": {
                "uri": "admin/movies/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.action": {
                "uri": "admin/movies/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.movies.update_order": {
                "uri": "admin/movies/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.movies.restore": {
                "uri": "admin/movies/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.relation": {
                "uri": "admin/movies/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.media.remove": {
                "uri": "admin/movies/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.movies.index": {
                "uri": "admin/movies",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.create": {
                "uri": "admin/movies/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.store": {
                "uri": "admin/movies",
                "methods": [
                    "POST"
                ]
            },
            "voyager.movies.show": {
                "uri": "admin/movies/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.edit": {
                "uri": "admin/movies/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.movies.update": {
                "uri": "admin/movies/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.movies.destroy": {
                "uri": "admin/movies/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.museums.order": {
                "uri": "admin/museums/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.action": {
                "uri": "admin/museums/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.museums.update_order": {
                "uri": "admin/museums/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.museums.restore": {
                "uri": "admin/museums/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.relation": {
                "uri": "admin/museums/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.media.remove": {
                "uri": "admin/museums/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.museums.index": {
                "uri": "admin/museums",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.create": {
                "uri": "admin/museums/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.store": {
                "uri": "admin/museums",
                "methods": [
                    "POST"
                ]
            },
            "voyager.museums.show": {
                "uri": "admin/museums/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.edit": {
                "uri": "admin/museums/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.museums.update": {
                "uri": "admin/museums/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.museums.destroy": {
                "uri": "admin/museums/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.questions.order": {
                "uri": "admin/questions/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.action": {
                "uri": "admin/questions/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.questions.update_order": {
                "uri": "admin/questions/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.questions.restore": {
                "uri": "admin/questions/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.relation": {
                "uri": "admin/questions/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.media.remove": {
                "uri": "admin/questions/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.questions.index": {
                "uri": "admin/questions",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.create": {
                "uri": "admin/questions/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.store": {
                "uri": "admin/questions",
                "methods": [
                    "POST"
                ]
            },
            "voyager.questions.show": {
                "uri": "admin/questions/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.edit": {
                "uri": "admin/questions/{id}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.questions.update": {
                "uri": "admin/questions/{id}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.questions.destroy": {
                "uri": "admin/questions/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.menus.builder": {
                "uri": "admin/menus/{menu}/builder",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.menus.order_item": {
                "uri": "admin/menus/{menu}/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.item.destroy": {
                "uri": "admin/menus/{menu}/item/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.menus.item.add": {
                "uri": "admin/menus/{menu}/item",
                "methods": [
                    "POST"
                ]
            },
            "voyager.menus.item.update": {
                "uri": "admin/menus/{menu}/item",
                "methods": [
                    "PUT"
                ]
            },
            "voyager.settings.index": {
                "uri": "admin/settings",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.settings.store": {
                "uri": "admin/settings",
                "methods": [
                    "POST"
                ]
            },
            "voyager.settings.update": {
                "uri": "admin/settings",
                "methods": [
                    "PUT"
                ]
            },
            "voyager.settings.delete": {
                "uri": "admin/settings/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.settings.move_up": {
                "uri": "admin/settings/{id}/move_up",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.settings.move_down": {
                "uri": "admin/settings/{id}/move_down",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.settings.delete_value": {
                "uri": "admin/settings/{id}/delete_value",
                "methods": [
                    "PUT"
                ]
            },
            "voyager.media.index": {
                "uri": "admin/media",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.media.files": {
                "uri": "admin/media/files",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.new_folder": {
                "uri": "admin/media/new_folder",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.delete": {
                "uri": "admin/media/delete_file_folder",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.move": {
                "uri": "admin/media/move_file",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.rename": {
                "uri": "admin/media/rename_file",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.upload": {
                "uri": "admin/media/upload",
                "methods": [
                    "POST"
                ]
            },
            "voyager.media.crop": {
                "uri": "admin/media/crop",
                "methods": [
                    "POST"
                ]
            },
            "voyager.bread.index": {
                "uri": "admin/bread",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.bread.create": {
                "uri": "admin/bread/{table}/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.bread.store": {
                "uri": "admin/bread",
                "methods": [
                    "POST"
                ]
            },
            "voyager.bread.edit": {
                "uri": "admin/bread/{table}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.bread.update": {
                "uri": "admin/bread/{id}",
                "methods": [
                    "PUT"
                ]
            },
            "voyager.bread.delete": {
                "uri": "admin/bread/{id}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.bread.relationship": {
                "uri": "admin/bread/relationship",
                "methods": [
                    "POST"
                ]
            },
            "voyager.bread.delete_relationship": {
                "uri": "admin/bread/delete_relationship/{id}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.index": {
                "uri": "admin/database",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.create": {
                "uri": "admin/database/create",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.store": {
                "uri": "admin/database",
                "methods": [
                    "POST"
                ]
            },
            "voyager.database.show": {
                "uri": "admin/database/{database}",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.edit": {
                "uri": "admin/database/{database}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.database.update": {
                "uri": "admin/database/{database}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.database.destroy": {
                "uri": "admin/database/{database}",
                "methods": [
                    "DELETE"
                ]
            },
            "voyager.compass.index": {
                "uri": "admin/compass",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.compass.post": {
                "uri": "admin/compass",
                "methods": [
                    "POST"
                ]
            },
            "voyager.voyager_assets": {
                "uri": "admin/voyager-assets",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.index": {
                "uri": "admin/entities",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.chapters.index": {
                "uri": "admin/chapters",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.blocks.index": {
                "uri": "admin/blocks",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.edit": {
                "uri": "admin/entities/{entity}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.update": {
                "uri": "admin/entities/{entity}",
                "methods": [
                    "PUT",
                    "PATCH"
                ]
            },
            "voyager.entities.order": {
                "uri": "admin/entities/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.action": {
                "uri": "admin/entities/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.update_order": {
                "uri": "admin/entities/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.restore": {
                "uri": "admin/entities/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.relation": {
                "uri": "admin/entities/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.media.remove": {
                "uri": "admin/entities/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.create": {
                "uri": "admin/entities/{entity}/chapters/create",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.store": {
                "uri": "admin/entities/{entity}/chapters",
                "methods": [
                    "POST"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.edit": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.update": {
                "uri": "admin/entities/{entity}/chapters/{chapter}",
                "methods": [
                    "PUT",
                    "PATCH"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.destroy": {
                "uri": "admin/entities/{entity}/chapters/{chapter}",
                "methods": [
                    "DELETE"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.order": {
                "uri": "admin/entities/{entity}/chapters/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.action": {
                "uri": "admin/entities/{entity}/chapters/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.update_order": {
                "uri": "admin/entities/{entity}/chapters/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.restore": {
                "uri": "admin/entities/{entity}/chapters/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id"
                }
            },
            "voyager.entities.chapters.relation": {
                "uri": "admin/entities/{entity}/chapters/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.media.remove": {
                "uri": "admin/entities/{entity}/chapters/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.create": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/create",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.store": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks",
                "methods": [
                    "POST"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.edit": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.update": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}",
                "methods": [
                    "PUT",
                    "PATCH"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.destroy": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}",
                "methods": [
                    "DELETE"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.action": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.update_order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.restore": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.relation": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.media.remove": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.create": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/create",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.store": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots",
                "methods": [
                    "POST"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.edit": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/{map_dot}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.update": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/{map_dot}",
                "methods": [
                    "PUT",
                    "PATCH"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.destroy": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/{map_dot}",
                "methods": [
                    "DELETE"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.action": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.update_order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.restore": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.map_dots.relation": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.map_dots.media.remove": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/map_dots/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.create": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/create",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.store": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos",
                "methods": [
                    "POST"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.edit": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/{gallery_photo}/edit",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.update": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/{gallery_photo}",
                "methods": [
                    "PUT",
                    "PATCH"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.destroy": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/{gallery_photo}",
                "methods": [
                    "DELETE"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id",
                    "block": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/order",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.action": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/action",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.update_order": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/order",
                "methods": [
                    "POST"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.restore": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/{id}/restore",
                "methods": [
                    "GET",
                    "HEAD"
                ],
                "bindings": {
                    "entity": "id",
                    "chapter": "id"
                }
            },
            "voyager.entities.chapters.blocks.gallery_photos.relation": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/relation",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            },
            "voyager.entities.chapters.blocks.gallery_photos.media.remove": {
                "uri": "admin/entities/{entity}/chapters/{chapter}/blocks/{block}/gallery_photos/remove",
                "methods": [
                    "POST"
                ]
            },
            "voyager.call": {
                "uri": "admin/call",
                "methods": [
                    "GET",
                    "HEAD"
                ]
            }
        },
        "location": ".//instruction"
    },
    "text": "Для перехода по&nbsp;страницам проведите по&nbsp;экрану ВВЕРХ или нажмите на&nbsp;иконку в&nbsp;левом нижнем углу<br/>В&nbsp;экспозиции будет много интерактивных материалов и&nbsp;фотографии  — смелее жмите на&nbsp;иконки–подсказки и&nbsp;открывайте их!<br/> Для входа в&nbsp;экспозицию перейдите на&nbsp;следующий экран.",
    "doptext": "Дополнительные материалы&nbsp;и&nbsp;справки",
    "biotext": "Для выбора события в&nbsp;разделе<br/>“БИОГРАФИЯ” нажмите сюда",
    "begtext": "Мне&nbsp;всё&nbsp;понятно.&nbsp;Начнём!",
    "entity": {
        "data": {
            "id": 5,
            "sort": 100,
            "title": "Битва за Ленинград",
            "chapters": [
                {
                    "id": 26,
                    "title": "ЛЕНИНГРАДСКИЙ ФРОНТ",
                    "since": "1941",
                    "until": "1945",
                    "years": "1941-1945",
                    "description": null,
                    "bg": "",
                    "blocks": [
                        {
                            "id": 781,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ЛЕНИНГРАДСКИЙ ФРОНТ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Летом 1941 года на северо-западе начались боевые действия войск СССР по обороне Ленинграда против вооружённых сил Германии и Финляндии, сражения, которые сопровождались жесточайшей блокадой города на Неве.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1944",
                            "video": "",
                            "width": 185.1851851851852,
                            "height": 100,
                            "bg": "./storage/blocks/November2022/jE6QJcpMu9XoC0G938LU.jpg",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": "Блокада Ленинграда",
                            "wiki_photo": "",
                            "wiki_text": "<p>Военная блокада города немецкими и финскими войсками и их союзниками во время Великой Отечественной войны.</p>\r\n<p>Длилась с 8 сентября 1941 года по 27 января 1944 года (блокадное кольцо было прорвано 18 января 1943 года).</p>",
                            "wiki_sign": null
                        },
                        {
                            "id": 782,
                            "type": 1,
                            "sort": 20,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "МАРШАЛ ЛЕНИНГРАДСКОЙ ПОБЕДЫ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>25 апреля 1942 года Леонид Говоров был назначен командующим Ленинградской группой войск Ленинградского фронта, непосредственно обороняющей Ленинград, а в июне &ndash; командующим всем Ленинградским фронтом.</p>\r\n<p>Перед Говоровым встала задача оборонять город, оказавшийся в кольце вражеской блокады.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 160,
                            "height": 100,
                            "bg": "./storage/blocks/December2022/IIqwpRsSH0k579qI0101.png",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 785,
                            "type": 3,
                            "sort": 30,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "О блокаде Ленинграда",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Рассказывает Алесь Адамович, соавтор &laquo;Блокадной книги&raquo;</p>",
                            "sign": "Фрагмент из д/ф «Леонид Александрович Говоров. О жизненном пути маршала», 1989 год",
                            "since": "1942",
                            "until": "1942",
                            "video": "./storage/blocks/GOVOROV_Leningrad/00_Govorov_Adamoch_Intro.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 22,
                    "title": "УКРЕПЛЕНИЕ ОБОРОНЫ ЛЕНИНГРАДА",
                    "since": "1941",
                    "until": "1942",
                    "years": "1941-1942",
                    "description": null,
                    "bg": "",
                    "blocks": [
                        {
                            "id": 758,
                            "type": 3,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "Оборона Ленинграда",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Документальная кинохроника</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "./storage/blocks/В_хроника_Ленинград в блокаде 01_1.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 755,
                            "type": 1,
                            "sort": 20,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 1,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "УКРЕПЛЕНИЕ ОБОРОНЫ ЛЕНИНГРАДА",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Леонид Александрович Говоров приступил к командованию Ленинградским фронтом в тяжелое время. Немцы методично осыпали город на Неве тысячами снарядов, а советские войска в то время испытывали дефицит и в боеприпасах, и в продовольствии. Резервов не было, а все, что находилось, сразу же отправлялось на передовую. В условиях полной блокады.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/November2021/1MAtdFCc45XvLZJxpq9U.jpg",
                                "./storage/blocks/November2021/CUdTydgRyECooyEfhA74.jpg",
                                "./storage/blocks/November2021/yhLsWmqLRkQtDzxvaijm.jpg",
                                "./storage/blocks/November2021/WXwL8YXvBrcAlG6p6QpA.jpg",
                                "./storage/blocks/November2021/ZOnd8inPtasB5TDl1q1J.jpg",
                                "./storage/blocks/November2021/mvPuv9JcLPgRurOSi6Fn.jpg",
                                "./storage/blocks/November2021/eFmRr6fhw6VhngNkWXqK.jpg",
                                "./storage/blocks/November2021/pFM5uMJJKNIgcLTnui07.jpg",
                                "./storage/blocks/November2021/rTW1RnwNa4WjsJtMAUj5.jpg",
                                "./storage/blocks/November2021/5kHElm2RXBKKnrz8d4IS.jpg",
                                "./storage/blocks/November2021/mVzpHaUXdC0TmcfzwF1x.jpg",
                                "./storage/blocks/November2021/mk4yOEnrnFoO3lSnw6J3.jpg",
                                "./storage/blocks/November2021/zKK7fuQRuwd5l0GpMgYN.jpg",
                                "./storage/blocks/November2021/Ew2uH2iUSvhrgd8JEIGu.jpg",
                                "./storage/blocks/November2021/HqNTQqtqjnAwn8oSti9W.jpg",
                                "./storage/blocks/November2021/jqNhEbKoDaA0rX4VsUZk.jpg",
                                "./storage/blocks/November2021/vHjpVtCmhHEtzVDBtT7S.jpg",
                                "./storage/blocks/November2021/wMHFWIfn53D9wOuk7VXw.jpg",
                                "./storage/blocks/November2021/RLjYcLdVWLrVQVT4odcx.jpg",
                                "./storage/blocks/November2021/pm226QAaIJp4MqEtszLx.jpg",
                                "./storage/blocks/November2021/lFqSD7qcKAjDslmneWyW.jpg",
                                "./storage/blocks/November2021/Y1fch6tzOxRBa7rm5ran.jpg",
                                "./storage/blocks/November2021/tAMatGUSSzXJJSVe8MUA.jpg",
                                "./storage/blocks/November2021/QKPSoFRu20ONtLDyLLhY.jpg",
                                "./storage/blocks/November2021/iwTedDrSx7SEMgfKAvkK.jpg",
                                "./storage/blocks/November2021/18jnmNPdEGVRrYN1A7DY.jpg",
                                "./storage/blocks/November2021/HawAFUbRTA1B7cOLiMXu.jpg",
                                "./storage/blocks/November2021/NYq25j4MS9NEe8lmAK8r.jpg",
                                "./storage/blocks/November2021/yCiz9HzPnqGwe6c7NzsO.jpg",
                                "./storage/blocks/November2021/uloQ5qBXQKRWeruuwZC1.jpg",
                                "./storage/blocks/November2021/vbvuR4eTmv09s8eEAQFS.jpg",
                                "./storage/blocks/November2021/ghB7Y3mzd64BwKTfXfDK.jpg",
                                "./storage/blocks/November2021/umfSIi6HkSdZsDV9L2GA.jpg",
                                "./storage/blocks/November2021/HnjgKalhUFmP96M3COkz.jpg",
                                "./storage/blocks/November2021/jk9Wovq7oqZrIAZXFygI.jpg",
                                "./storage/blocks/November2021/5DTNuozFHuvbHXaTcZuO.jpg",
                                "./storage/blocks/November2021/pLLLi9keFXMvbgZBgOFk.jpg",
                                "./storage/blocks/November2021/1GNrueRkmUA2NympbPRy.jpg",
                                "./storage/blocks/November2021/xWZdVbZRGLmqkfQKIdQN.jpg",
                                "./storage/blocks/November2021/XNnEzxYbHkVv2hasooTL.jpg",
                                "./storage/blocks/November2021/7UGmdOBXEB7w21StVQDT.jpg",
                                "./storage/blocks/November2021/zEZgygInluQsceiJRJNB.jpg",
                                "./storage/blocks/November2021/iLWzxGUMPBgbn7hSgbI6.jpg",
                                "./storage/blocks/November2021/Mzzlmkz3NVXP0KCQ2OKI.jpg",
                                "./storage/blocks/November2021/8DEdULCyTZyEspfOghB8.jpg",
                                "./storage/blocks/November2021/NJuiErXWqMcy4DlFGb8S.jpg",
                                "./storage/blocks/November2021/stGm85fAnh8k0dkiBT4P.jpg",
                                "./storage/blocks/November2021/VPfGbVp4ZtuSs6CzM2fq.jpg",
                                "./storage/blocks/November2021/y7FM6Whrubgf1bEU7vEn.jpg",
                                "./storage/blocks/November2021/p6owFLs0DETDvf09H9K8.jpg",
                                "./storage/blocks/November2021/0en9sIPnkNBQO3WNquh4.jpg",
                                "./storage/blocks/November2021/tb5ncZNHMprz1N9gEJx2.jpg",
                                "./storage/blocks/November2021/Yf8d7e26Vf9p3Ltg3jww.jpg",
                                "./storage/blocks/November2021/6MbV8PRAGY5rsYXpVTML.jpg",
                                "./storage/blocks/November2021/TfpDFfzhevMIfnGNpJhE.jpg",
                                "./storage/blocks/November2021/5eb1PUIbolazi1UNG0BM.jpg",
                                "./storage/blocks/November2021/vmt4JvLmjCdLXJk2QzJM.jpg",
                                "./storage/blocks/November2021/7p3H9cP0DawgCA5aj20L.jpg",
                                "./storage/blocks/November2021/N6Ar4yM3ptSq6YbYY11g.jpg",
                                "./storage/blocks/November2021/keEh3W2fTywpWz4Lt5Ju.jpg",
                                "./storage/blocks/November2021/VFSBivLsWlzeHw8xzGly.jpg",
                                "./storage/blocks/November2021/TWs4dapiMTUKSj6jbQCp.jpg",
                                "./storage/blocks/November2021/twIHRyyZmzypecUVq7io.jpg",
                                "./storage/blocks/November2021/QKSnyxcq82439ff3Hncx.jpg",
                                "./storage/blocks/November2021/CMd74uKn8au5IYfNaCwb.jpg",
                                "./storage/blocks/November2021/ke5argqfnSQ5kGG4VttR.jpg",
                                "./storage/blocks/November2021/R5G5qqZjMbEexUnr4yIM.jpg",
                                "./storage/blocks/November2021/lfJ67gJSA5fBdq2Cu3vO.jpg",
                                "./storage/blocks/November2021/9Bmt1ad8MExC1eY9bCoI.jpg",
                                "./storage/blocks/November2021/WI849lorBF59BI9eITK3.jpg",
                                "./storage/blocks/November2021/NPMzYllAtiT7DQKkXVZ0.jpg",
                                "./storage/blocks/November2021/8cncbr3rGkZDEAJ1RHb2.jpg",
                                "./storage/blocks/November2021/adtLNPGsmXISoxW3CNhV.jpg",
                                "./storage/blocks/November2021/qkBMA2e3tuVPDc5uQTmh.jpg",
                                "./storage/blocks/November2021/RCYDj7tMyopVADNnoLj7.jpg",
                                "./storage/blocks/November2021/UTOwsNK0HZuidi1z93oE.jpg",
                                "./storage/blocks/November2021/zmymEYpQk0puip99OrpL.jpg",
                                "./storage/blocks/November2021/Jr1HNcmhJvAfl9uIH6oA.jpg",
                                "./storage/blocks/November2021/j2SrHCWBWfdjZbiJltPY.jpg",
                                "./storage/blocks/November2021/t4xN2CAEdh1r2JVgFjcz.jpg",
                                "./storage/blocks/November2021/FIZauKDJe6vmecYusmWl.jpg",
                                "./storage/blocks/November2021/LhxDtAOI3fc2FUfxORLr.jpg",
                                "./storage/blocks/November2021/rinik3o5p8t1CoquAKNy.jpg",
                                "./storage/blocks/November2021/7oh6MIvOkOSKYlTrSmDb.jpg",
                                "./storage/blocks/November2021/59etojXhJfv8tXFFQvVw.jpg",
                                "./storage/blocks/November2021/cIhsTuh1RqArma0yoy5g.jpg",
                                "./storage/blocks/November2021/woB5dslL8ReS9ODPgCfL.jpg",
                                "./storage/blocks/November2021/1dK5f0icjwePG8T6uSCV.jpg",
                                "./storage/blocks/November2021/dETI5P5BxPOEgs2N1hMY.jpg",
                                "./storage/blocks/November2021/jpNFZ98MPncqVC3qCeAS.jpg",
                                "./storage/blocks/November2021/6cm7z9ktgQ00ZNTlrsef.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": "Воспоминания",
                            "doc_photo": "",
                            "doc_text": "<p>&laquo;Л. А. Говоров был настоящим артиллеристом, то есть человеком точного расчёта, ясной и трезвой мысли. Он рассказывал мне, что учился в Петроградском политехническом институте. Он очень любил Ленинград, и было в нём что-то от классического ленинградца &ndash; сдержанный, хорошо скрытая страсть. Я увидел не бравого вояку, а скорее, математика или инженера, хорошего русского интеллигента&raquo;.</p>\r\n<p>(Из воспоминаний известного советского писателя Ильи Эренбурга)</p>\r\n<p>&laquo;Уже после первых встреч с новым командующим мы поняли: Говоров не терпит поверхностности и резко, в лицо высказывает своё мнение. А слушать умеет очень внимательно&raquo;.</p>\r\n<p>(Из воспоминаний Б. В. Бычевского, сослуживца Л. А. Говорова по Ленинградскому фронту, генерал-лейтенанта)</p>",
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 786,
                            "type": 3,
                            "sort": 30,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "О кабинете Л. А. Говорова в Смольном",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Фрагмент из д/ф &laquo;Леонид Александрович Говоров. О жизненном пути маршала&raquo;, 1989 год</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "./storage/blocks/GOVOROV_Leningrad/00_Govorov_Smolniy_1942.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 783,
                            "type": 1,
                            "sort": 40,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "УКРЕПЛЕНИЕ ОБОРОНЫ ЛЕНИНГРАДА",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Говоров начал с укрепления обороны и сделал невозможное: измотанные войска и истощённый город создали мощнейшую линию обороны в кратчайшие сроки. Командующий Ленинградским фронтом полностью сосредоточился на повышении эффективности борьбы с вражеской артиллерией: создал Ленинградский артиллерийский корпус, добился выделения фронту двух авиационных эскадрилий, проследил за созданием фронтовых резервов.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 149.92503748125938,
                            "height": 100,
                            "bg": "./storage/blocks/December2022/R3s8OWWagzB6dEwAe0hF.png",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 788,
                            "type": 3,
                            "sort": 50,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "О блокадном Ленинграде",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Рассказывает Алесь Адамович, соавтор &laquo;Блокадной книги&raquo;</p>\r\n<p>Фрагмент из д/ф &laquo;Леонид Александрович Говоров. О жизненном пути маршала&raquo;, 1989 год</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "./storage/blocks/GOVOROV_Leningrad/00_Govorov_Leto_1942_Prikaz.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 784,
                            "type": 1,
                            "sort": 60,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "УКРЕПЛЕНИЕ ОБОРОНЫ ЛЕНИНГРАДА",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Говоров настолько внимательно и скрупулёзно разрабатывал каждый план, что враги так и не смогли прорвать оборону.</p>\r\n<p>Тайно переброшенная на Ораниенбаумский плацдарм тяжёлая артиллерия советских войск вместе с заработавшей корабельной артиллерией Балтийского флота неожиданно открытым огнём заставила немцев передислоцироваться в срочном порядке.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 131.06159895150722,
                            "height": 100,
                            "bg": "./storage/blocks/December2022/XtXnjkAgKSj3TqbFv2nd.png",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 789,
                            "type": 3,
                            "sort": 70,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "О Л. А. Говорове как о командующем Ленинградским фронтом",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Рассказывает Алесь Адамович, соавтор &laquo;Блокадной книги&raquo;, и Афанасий Щеглов, генерал армии</p>\r\n<p>Фрагмент из д/ф &laquo;Леонид Александрович Говоров. О жизненном пути маршала&raquo;, 1989 год</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "./storage/blocks/GOVOROV_Leningrad/00_Govorov_Adamoch_O_Leningrade.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 27,
                    "title": "ВСТУПЛЕНИЕ В ПАРТИЮ",
                    "since": "1942",
                    "until": "1942",
                    "years": "1942",
                    "description": null,
                    "bg": "",
                    "blocks": [
                        {
                            "id": 756,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 2,
                            "bg2": "",
                            "bg_margin": 3,
                            "bg2_margin": 0,
                            "parallax": 300,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ВСТУПЛЕНИЕ В ПАРТИЮ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Занимая ответственные должности, Говоров не состоял в рядах партии, что для того времени было не характерно. С учётом его боевых заслуг, в июле 1942 года без прохождения кандидатского стажа Говоров был принят в члены ВКП(б).</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 156.22317596566523,
                            "height": 100,
                            "bg": "./storage/blocks/November2021/2YrXEvPFMgcRGHCNFC7n.jpg",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": "Из письма Л. А. Говорова жене Лидии Ивановне",
                            "doc_photo": "",
                            "doc_text": "<p>&laquo;Это очень значительное событие в моей жизни &ndash; ты знаешь, какое значение я придавал званию члена партии. Настроение у меня боевое, впереди большое сражение, нужно много сил, но мы все-таки победим. На мне ответственность за Ленинград, и я не отдам его врагу&raquo;.</p>",
                            "doc_sign": "Июнь, 1942 год.",
                            "wiki_title": "ВКП(б)",
                            "wiki_photo": "",
                            "wiki_text": "<p>ВКП(б), или Всесоюзная коммунистическая партия (большевиков) &ndash; официальное название КПСС (Коммунистической партии Советского Союза) с 1925 по 1952 годы.</p>",
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 28,
                    "title": "ЛЕНИНГРАДСКАЯ СИМФОНИЯ",
                    "since": "1942",
                    "until": "1942",
                    "years": "1942",
                    "description": null,
                    "bg": "",
                    "blocks": [
                        {
                            "id": 754,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 2,
                            "bg2": "",
                            "bg_margin": 3,
                            "bg2_margin": 0,
                            "parallax": 300,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ЛЕНИНГРАДСКАЯ СИМФОНИЯ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>В августе 1942 года немцы планировали захватить Ленинград, но их планам не суждено было сбыться.</p>\r\n<p>Мощнейшей моральной поддержкой для ленинградцев и важным событием для укрепления боевого духа защитников города стало исполнение Седьмой симфонии Дмитрия Шостаковича 9 августа в зале Ленинградской филармонии. Партитуру симфонии доставили в город на самолёте.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 149.6567505720824,
                            "height": 100,
                            "bg": "./storage/blocks/November2021/7pP095oJVTGPHgQ7pPIr.jpg",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": "Ленинградская симфония",
                            "wiki_photo": "./storage/blocks/December2022/5k6gfCoJjhtVJvgraZVI.png",
                            "wiki_text": "<p>Симфония № 7 &laquo;Ленинградская&raquo; &mdash; симфония Д. Д. Шостаковича в 4 частях, одно из важнейших его произведений, созданное в 1941 году.</p>\r\n<p>Первые три части симфонии были закончены в сентябре 1941 года в блокадном Ленинграде. 1 октября композитор вместе с семьёй был вывезен через Москву в Куйбышев, где 27 декабря 1941 года и была закончена симфония. Её премьера состоялась 5 марта 1942 года в Куйбышеве.</p>",
                            "wiki_sign": null
                        },
                        {
                            "id": 757,
                            "type": 3,
                            "sort": 20,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "Концерт в блокадном Ленинграде",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Рассказывают внуки маршала Алексей и Леонид Говоровы, директор Музея обороны и блокады Ленинграда Елена Лезик</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "./storage/blocks/В_05-симфония_1.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 790,
                            "type": 1,
                            "sort": 30,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": null,
                            "title2": null,
                            "title3": null,
                            "text": "<p>Для проведения концерта Говоровым была разработана специальная операция под кодовым названием &laquo;Шквал&raquo; для мощного артиллерийского подавления противника.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 154.08320493066256,
                            "height": 100,
                            "bg": "./storage/blocks/December2022/jUXp6FQgmnSGoNgPpw6h.png",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 759,
                            "type": 6,
                            "sort": 40,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "Ленинградская государственная филармония",
                            "title2": null,
                            "title3": null,
                            "text": null,
                            "sign": "подпись тест",
                            "since": "",
                            "until": "",
                            "video": "",
                            "width": 200,
                            "height": 100,
                            "bg": "./storage/blocks/January2022/K3XJZU2iABVims4W1SLF.jpeg",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 29,
                    "title": "СИНЯВИНСКАЯ ОПЕРАЦИЯ",
                    "since": "1942",
                    "until": "1942",
                    "years": "1942",
                    "description": null,
                    "bg": "",
                    "blocks": [
                        {
                            "id": 760,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 2,
                            "bg2": "",
                            "bg_margin": 3,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "СИНЯВИНСКАЯ ОПЕРАЦИЯ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Всё лето 1942 года по приказу Ставки ВГК Говоров проводит подготовку сил Ленинградского фронта к участию в Синявинской наступательной операции. Её цель &ndash; деблокада Ленинграда с суши и срыв операции немецких войск &laquo;Северное сияние&raquo;.</p>\r\n<p>Для выполнения этой задачи Говорову пришлось применить все свои знания, опыт и силы.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/January2022/Dlm7loqwqhK21t9Y1uHN.jpg",
                                "./storage/blocks/January2022/YlhP46LFSNLvMigkZJW4.jpg",
                                "./storage/blocks/January2022/et64AE8lee9cRTDkeImM.jpg",
                                "./storage/blocks/January2022/0dHsUZxXTwHkAmHAZObd.jpg",
                                "./storage/blocks/January2022/ELuqdixcrMlGHnPqhBoY.jpg",
                                "./storage/blocks/January2022/vMsGgk24jrQiPVILTado.jpg",
                                "./storage/blocks/January2022/Ey13O8gYS0CgeCzyPEuy.jpg",
                                "./storage/blocks/January2022/LDxiS0U53ZANoEw5PvQB.jpg",
                                "./storage/blocks/January2022/wu2u0OyAWcqzHZx5kd2r.jpg",
                                "./storage/blocks/January2022/Bx1ruVZmG1Y45XNMZuKz.jpg",
                                "./storage/blocks/January2022/fWEBOfyUOmSQYiRRhkhq.jpg",
                                "./storage/blocks/January2022/BmA0ZA8PpU1duGuG7pfX.jpg",
                                "./storage/blocks/January2022/C82SD4M7RX9RVXYaSUe4.jpg",
                                "./storage/blocks/January2022/cSPzhXIjPp69qvCm2Q76.jpg",
                                "./storage/blocks/January2022/22jgLIyOYS8SbkWCzQpG.jpg",
                                "./storage/blocks/January2022/JaK7AR8dUz0bVCPAGzly.jpg",
                                "./storage/blocks/January2022/zO4e2KiO79tjEs2vwN7H.jpg",
                                "./storage/blocks/January2022/AoCshm8cbPqQ5bP2VtXF.jpg",
                                "./storage/blocks/January2022/tvYeXaLJL80TRGQNOsKq.jpg",
                                "./storage/blocks/January2022/szlqSvDGfPa7qSsuM66Y.jpg",
                                "./storage/blocks/January2022/IgMWMS9PAoCbAbukY8iV.jpg",
                                "./storage/blocks/January2022/al81fUS5FGRexvqwHofj.jpg",
                                "./storage/blocks/January2022/cMHY2EqE02PbJq1tSd1z.jpg",
                                "./storage/blocks/January2022/ASzsTXfaUfEM3JAuzm2c.jpg",
                                "./storage/blocks/January2022/8SzEwHOUU00II8oQm90Q.jpg",
                                "./storage/blocks/January2022/kvEmwpjFRmvA0RAHla5c.jpg",
                                "./storage/blocks/January2022/N5EF5B9ySZZShl4wa3H1.jpg",
                                "./storage/blocks/January2022/cEyCEEyGCOCPEyv2SbJz.jpg",
                                "./storage/blocks/January2022/7zhaBq9SoPmeS8CesOKk.jpg",
                                "./storage/blocks/January2022/aJuJ6sSlCmb6H1Yuw7wu.jpg",
                                "./storage/blocks/January2022/nVxVOQYF8GHqVcKevSaj.jpg",
                                "./storage/blocks/January2022/7EbjBlR4cwnXRmSZXv2l.jpg",
                                "./storage/blocks/January2022/qAeNkZVZD3rKcmSzboV0.jpg",
                                "./storage/blocks/January2022/zjNwUCES3yvl8GkzRAES.jpg",
                                "./storage/blocks/January2022/bZNJycNJjaGkxQZGbhJN.jpg",
                                "./storage/blocks/January2022/ovD5eFrnLsLnF7iiSOoX.jpg",
                                "./storage/blocks/January2022/pqxvm9OVpeBlDZXRUgjk.jpg",
                                "./storage/blocks/January2022/j015PeOtd1ERDPIVU0wc.jpg",
                                "./storage/blocks/January2022/n1iLUaJBTWYYloxRVq2C.jpg",
                                "./storage/blocks/January2022/PQy72hFPJxi16IdlTJjn.jpg",
                                "./storage/blocks/January2022/doNcrJZM8W65GXIqlLR8.jpg",
                                "./storage/blocks/January2022/A8tfr78GdKvQqQqn1sBc.jpg",
                                "./storage/blocks/January2022/wDCXc98dRblBpIy7oYQM.jpg",
                                "./storage/blocks/January2022/NRBDw84NnVowzl0NcmO6.jpg",
                                "./storage/blocks/January2022/N9jqlKnnrNw0o8MdJk13.jpg",
                                "./storage/blocks/January2022/gI6alOzDtf2MpsMgvnGz.jpg",
                                "./storage/blocks/January2022/h4swx5Dl4qPLZXIOfhq5.jpg",
                                "./storage/blocks/January2022/ZvI1aAQs4JtbnSB1bWdI.jpg",
                                "./storage/blocks/January2022/1NYnQPKYFKleRfcvENIy.jpg",
                                "./storage/blocks/January2022/ZL50piSG8qmycpk4aV2i.jpg",
                                "./storage/blocks/January2022/Qafu5Twer5LGwHH7CPSS.jpg",
                                "./storage/blocks/January2022/vCnE63cc5FS4kdgMpoTz.jpg",
                                "./storage/blocks/January2022/5DomhWPrgEDYJy6ix7t4.jpg",
                                "./storage/blocks/January2022/s4rDL2PmkDapefUZNN0A.jpg",
                                "./storage/blocks/January2022/3SBsgCqoku3aOnm7G72h.jpg",
                                "./storage/blocks/January2022/FmswDYJmgUqi9rLGIcqY.jpg",
                                "./storage/blocks/January2022/xnp5QddpQpBcR6PJkPmc.jpg",
                                "./storage/blocks/January2022/jDBYGnGQVazeTEr2tpQi.jpg",
                                "./storage/blocks/January2022/Ft7wWv31dKjSSHVyR243.jpg",
                                "./storage/blocks/January2022/ehKhn6oJxkQNvUQgCLhZ.jpg",
                                "./storage/blocks/January2022/HqDPjS5oo1fNKSTpw7K5.jpg",
                                "./storage/blocks/January2022/kCH20NqGt2Ks59pfPfRN.jpg",
                                "./storage/blocks/January2022/nve7b31MMpCw4hhms7aW.jpg",
                                "./storage/blocks/January2022/qnpsqEfpME3L9ZZhOxdk.jpg",
                                "./storage/blocks/January2022/T7CdC9K2pwgwQEPR2PSh.jpg",
                                "./storage/blocks/January2022/3L9lnJtHBl1Z0O4c1Unh.jpg",
                                "./storage/blocks/January2022/RmRwfSVQjfRXjODOh9m5.jpg",
                                "./storage/blocks/January2022/AIVZ7rPeDmy7qbzG6ZKA.jpg",
                                "./storage/blocks/January2022/QgmPZoIbAWOeQXOsRcZy.jpg",
                                "./storage/blocks/January2022/gAo2UpANEeTxO5FBXAeb.jpg",
                                "./storage/blocks/January2022/Up17ClnP6v6yJdH6UChg.jpg",
                                "./storage/blocks/January2022/4EDeDUxkWQqxJ5vgQzBF.jpg",
                                "./storage/blocks/January2022/U41zEKQOvVLFjg7NxwMM.jpg",
                                "./storage/blocks/January2022/jjJs3DC6MZbXvgEEaFok.jpg",
                                "./storage/blocks/January2022/k1zdNi97lij30VNibLUK.jpg",
                                "./storage/blocks/January2022/kdFKCPkKhJCdBtXSt44H.jpg",
                                "./storage/blocks/January2022/rj6yMqcipRUsT76rZU5I.jpg",
                                "./storage/blocks/January2022/yhzL88tDePQRcnLh9jXF.jpg",
                                "./storage/blocks/January2022/lO8w4zxEjJnEbtSV77Kk.jpg",
                                "./storage/blocks/January2022/WAYJyxjjofZAF0DSSKKT.jpg",
                                "./storage/blocks/January2022/Jcv6TNDaXj2VYuaqKN9l.jpg",
                                "./storage/blocks/January2022/9ReZWEyaIt8ercZ4rVB6.jpg",
                                "./storage/blocks/January2022/k8hUSjzut5ccSp6wHyWj.jpg",
                                "./storage/blocks/January2022/X5LWXhYkjA2es3BNyedG.jpg",
                                "./storage/blocks/January2022/zpbA07REUpJtjOYVNesT.jpg",
                                "./storage/blocks/January2022/TrKqh5wnAuVJKkIBA8qD.jpg",
                                "./storage/blocks/January2022/01C6NqjXPWE38MVWxcT2.jpg",
                                "./storage/blocks/January2022/jPuvZaOz8h3bO4YsZdou.jpg",
                                "./storage/blocks/January2022/440AhGxz0Ls0LKaia40V.jpg",
                                "./storage/blocks/January2022/e5Wccccz3oF6VtI3Fvmb.jpg",
                                "./storage/blocks/January2022/MbMgJR4cHE9PB2BkRsHw.jpg",
                                "./storage/blocks/January2022/3y18otU0kyVtLjrjlBub.jpg",
                                "./storage/blocks/January2022/ZrfmfevK8JktvNt34oux.jpg",
                                "./storage/blocks/January2022/sqdM0tDZdUhsz7YuYn8E.jpg",
                                "./storage/blocks/January2022/JMYmqbxLRA46EedscIJB.jpg",
                                "./storage/blocks/January2022/5z3b18fvVU3wI5zsgJ41.jpg",
                                "./storage/blocks/January2022/XJm8fMbZveqzyZjl5yyg.jpg",
                                "./storage/blocks/January2022/HoYwdgJLBYoEyDhdqsYw.jpg",
                                "./storage/blocks/January2022/DMe0ysTFYemypJcr8gIk.jpg",
                                "./storage/blocks/January2022/s91EhJjikayKhnlzOM9s.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": "Ставка ВГК",
                            "wiki_photo": "",
                            "wiki_text": "<p>Ставка ВГК (Ставка Верховного Главнокомандования) &ndash; чрезвычайный орган высшего военного управления, осуществлявший в годы Великой Отечественной войны стратегическое руководство советскими вооружёнными силами.</p>",
                            "wiki_sign": null
                        },
                        {
                            "id": 762,
                            "type": 1,
                            "sort": 20,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "СИНЯВИНСКАЯ ОПЕРАЦИЯ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>В ходе кровопролитных боёв к концу сентября 1942 года стало очевидно, что Ленинградский и Волховский (командующий &ndash; К. А. Мерецков) фронты не смогут решить задачу по прорыву блокады в условиях лесисто-болотистой местности в осенний период. Командование этих фронтов получило приказ отойти на исходные позиции, но планы Вермахта по захвату Ленинграда штурмом были окончательно сорваны.</p>\r\n<p>В октябре Говоров приступает к разработке новой операции &laquo;Искра&raquo;.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/November2021/oV6Z7tS4ZOji9MvB2F7m.jpg",
                                "./storage/blocks/November2021/5UXZ8jGbFle1BBs2qhpu.jpg",
                                "./storage/blocks/November2021/LN88gQSQUJy7GXjGjWEJ.jpg",
                                "./storage/blocks/November2021/Qo3oF49Yu7E3SNj8g7bg.jpg",
                                "./storage/blocks/November2021/YlXuy6VYNsHrR8rDUiKq.jpg",
                                "./storage/blocks/November2021/1X1MTavp0BdimNqjmITl.jpg",
                                "./storage/blocks/November2021/t0t6b1UaRSogEDwpvYY8.jpg",
                                "./storage/blocks/November2021/OqbenKr1E7bqHp2112C2.jpg",
                                "./storage/blocks/November2021/CUirPntErmBXCOfKKApz.jpg",
                                "./storage/blocks/November2021/EMN7yGxepd63OeQAaLbQ.jpg",
                                "./storage/blocks/November2021/lpLWtJNwJ5NMwZT3lHKI.jpg",
                                "./storage/blocks/November2021/1aeCuBrd1dcUBSs5XkEm.jpg",
                                "./storage/blocks/November2021/PLmpJiAtX36d4tf8N8QG.jpg",
                                "./storage/blocks/November2021/E78niA9qwLTery4tSykg.jpg",
                                "./storage/blocks/November2021/4M9HKT1wsRD4qSLRoJPb.jpg",
                                "./storage/blocks/November2021/2Mvo6XKqNPrC89dmcVda.jpg",
                                "./storage/blocks/November2021/5d2OnnRnGLnPCWWQB0sD.jpg",
                                "./storage/blocks/November2021/TiaxPbzPHqIb3TScn1VU.jpg",
                                "./storage/blocks/November2021/ETMlml8CcZjT86szN23p.jpg",
                                "./storage/blocks/November2021/aZgshG3PWQsT9bowxMR4.jpg",
                                "./storage/blocks/November2021/E8CbnRc9vW3nsQdh9iaj.jpg",
                                "./storage/blocks/November2021/0igXdXq7VPUmZsszD5NK.jpg",
                                "./storage/blocks/November2021/01iM0MUlvTxg6wBsehif.jpg",
                                "./storage/blocks/November2021/HgnKu8c7q0fqGhzES8Ad.jpg",
                                "./storage/blocks/November2021/ZvwmnVwx8IKHis8A8SXz.jpg",
                                "./storage/blocks/November2021/RlmfuDgQhXm5xqW8l8CR.jpg",
                                "./storage/blocks/November2021/9A8upg8ymDlQZSrNb6u3.jpg",
                                "./storage/blocks/November2021/Nt29nIRUCnW7w2fBcuMS.jpg",
                                "./storage/blocks/November2021/4Qp7vSDQdn1HBSeKdpKR.jpg",
                                "./storage/blocks/November2021/MrSNAT1WxHEsVg42GCYk.jpg",
                                "./storage/blocks/November2021/hjliKdEaseU5MLrzcPhA.jpg",
                                "./storage/blocks/November2021/HWgymLYmDySEvsqrDoXM.jpg",
                                "./storage/blocks/November2021/Xx0NSwlAHakM6FBOLnYB.jpg",
                                "./storage/blocks/November2021/GyrYJqEPgwJVFon1wSKe.jpg",
                                "./storage/blocks/November2021/hMWMFRSGS6jlto4uhVI7.jpg",
                                "./storage/blocks/November2021/BcXOOH5qcAfs7hgvais7.jpg",
                                "./storage/blocks/November2021/WIb1VfJYp1o5LTDb4P5N.jpg",
                                "./storage/blocks/November2021/Z0V6GIeaWirQhRvrtWLP.jpg",
                                "./storage/blocks/November2021/QyspeKItjrSchiZQ1e1O.jpg",
                                "./storage/blocks/November2021/aJ7diUFHA5cNdTOhAE6A.jpg",
                                "./storage/blocks/November2021/ymPMVZ4hN0GlksmNoxWz.jpg",
                                "./storage/blocks/November2021/cD2FwJMwwvsh44b42hUy.jpg",
                                "./storage/blocks/November2021/NdpsIVHN3wO2Rftari1d.jpg",
                                "./storage/blocks/November2021/QzJHrzH1gmaXy1rVFuNd.jpg",
                                "./storage/blocks/November2021/1G3Pjb0umL7aQwXdQsAB.jpg",
                                "./storage/blocks/November2021/gbWTuRCbeSDCkQGqiSif.jpg",
                                "./storage/blocks/November2021/CYbCFBrGNAMMQieGvFmb.jpg",
                                "./storage/blocks/November2021/v2Q3cZSDuGKMqnIDO4k4.jpg",
                                "./storage/blocks/November2021/NzdWQB18cs99foUlhyGF.jpg",
                                "./storage/blocks/November2021/RbWRJRD1h8XQHpM0zqn3.jpg",
                                "./storage/blocks/November2021/hqSteM2Au11BadhhBQWZ.jpg",
                                "./storage/blocks/November2021/lFOv5fKhnz4IJ2QaJ6ik.jpg",
                                "./storage/blocks/November2021/7KKr9cNnPQbAFwS1HhmS.jpg",
                                "./storage/blocks/November2021/Rk1e9HAqQwCY0vK5zRE2.jpg",
                                "./storage/blocks/November2021/KBky1ecZY3jX4flP3xbP.jpg",
                                "./storage/blocks/November2021/kulxoIXZ9vfKryrcfnrA.jpg",
                                "./storage/blocks/November2021/9rW1gxOlpc0SRufy2XLy.jpg",
                                "./storage/blocks/November2021/Jf8QRWlj17ewYNN1vMpU.jpg",
                                "./storage/blocks/November2021/mGlnw9RlvC4cFRsNsalw.jpg",
                                "./storage/blocks/November2021/5ikhwE0T1SJQs1t72IG2.jpg",
                                "./storage/blocks/November2021/oFj7XWURpqWkB7fGLugQ.jpg",
                                "./storage/blocks/November2021/on3YzItZPiQhR7PdSTXL.jpg",
                                "./storage/blocks/November2021/S5UWAtq8UOXnc8Y5Xh25.jpg",
                                "./storage/blocks/November2021/LilM0nzFB7wFyYftGJye.jpg",
                                "./storage/blocks/November2021/J70k9lkeXpAoEuqI96fu.jpg",
                                "./storage/blocks/November2021/g01Fyov5Zxq5tjbnh0Rn.jpg",
                                "./storage/blocks/November2021/fMM1QNmQYEKnkkrdVGs3.jpg",
                                "./storage/blocks/November2021/4KKlwhkyh8U8bhG6xZDC.jpg",
                                "./storage/blocks/November2021/XFS7daEHn1kk3jTpEAE5.jpg",
                                "./storage/blocks/November2021/KIFClkBXwclyHMKo7F84.jpg",
                                "./storage/blocks/November2021/QKcxoovnC0i1wVaZq0uK.jpg",
                                "./storage/blocks/November2021/7mD8ZHp7ULclvKxO1iDM.jpg",
                                "./storage/blocks/November2021/SLxpeNkK6ANvkMAHNIcZ.jpg",
                                "./storage/blocks/November2021/6XLIF2UrMpNKR7jGcCM3.jpg",
                                "./storage/blocks/November2021/KqYsrZ93MEVojYz0eC5w.jpg",
                                "./storage/blocks/November2021/uwb1XH9RhH7wIlR0MTQw.jpg",
                                "./storage/blocks/November2021/9ueto9qfvc6JNclqWT6n.jpg",
                                "./storage/blocks/November2021/TMx5nHQM9ReM235WcT8p.jpg",
                                "./storage/blocks/November2021/QtYxW55f9JhAQZwGa6eV.jpg",
                                "./storage/blocks/November2021/PNysqkbviwuPTRcYTWZH.jpg",
                                "./storage/blocks/November2021/JJtO7EkRiwUZXBRcZmsu.jpg",
                                "./storage/blocks/November2021/4f0DhsxbeK0FSB3YOtAs.jpg",
                                "./storage/blocks/November2021/AWHN4YeYtJJUXhZVCM9A.jpg",
                                "./storage/blocks/November2021/zlgiYdwSEYUfQrt96OWK.jpg",
                                "./storage/blocks/November2021/cqKYywrs1bgQyTW6e8EK.jpg",
                                "./storage/blocks/November2021/BsyiOqmmAiUOgrMhzNPa.jpg",
                                "./storage/blocks/November2021/7gWvpmPZob9vXqoAnb76.jpg",
                                "./storage/blocks/November2021/UfsrbcVodUPAq88daqNH.jpg",
                                "./storage/blocks/November2021/Kl8jDgz1VnO5bmGDs5C1.jpg",
                                "./storage/blocks/November2021/AIaVj4IBaafoWpUr3bnA.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 23,
                    "title": "ОПЕРАЦИЯ «ИСКРА»",
                    "since": "1942",
                    "until": "1943",
                    "years": "1942-1943",
                    "description": null,
                    "bg": "./storage/chapters/October2021/kth9I1QtE9rMBXcbbomk.jpg",
                    "blocks": [
                        {
                            "id": 764,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 3,
                            "bg2_margin": 0,
                            "parallax": 300,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ОПЕРАЦИЯ «ИСКРА»",
                            "title2": null,
                            "title3": null,
                            "text": "<p>2 декабря 1942 года план операции, получившей название &laquo;Искра&raquo;, был утверждён ставкой ВГК.</p>\r\n<p>Цель операции &ndash; встречными ударами Ленинградского и Волховского фронтов рассечь группировку противника в районе Синявинского выступа, соединиться южнее Ладожского озера и прорвать блокаду Ленинграда.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1943",
                            "video": "",
                            "width": 143.88489208633092,
                            "height": 100,
                            "bg": "./storage/blocks/November2021/RomgpZuC8i2job2BqQaB.jpg",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": "Из воспоминаний Б. В. Бычевского, сослуживца Л. А. Говорова, начальника инженерных войск Ленинградского фронта",
                            "doc_photo": "",
                            "doc_text": "<p>&laquo;С напряжённостью и страстностью, угадываемой за внешним спокойствием, готовил Говоров операцию по прорыву блокады. Извлечено много уроков из осенних боёв. Зима даёт преимущество &ndash; не нужны лодки, понтоны, но зима создаёт и много проблем. За сколько минут солдаты пробегут по льду до занятого врагом берега? Пять, семь, или восемь минут? Но это с автоматом, винтовкой, а со станковым пулемётом или миномётом? Кричать на бегу &laquo;ура&raquo; (в атаку молча не идут) или сорвёшь дыхание в мороз? Тот берег высокий, обрывистый, покрыт льдом. Сколько нужно на каждый полк, а в полку на батальон, штурмовых лестниц, верёвок с крючьями, шипов на ботинки? Танкисты и сапёры решают свою задачу &ndash; переправы тяжёлых танков по льду, ещё не имеющему расчётной прочности. В часах и минутах выражены задачи артиллеристов&raquo;.</p>",
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 793,
                            "type": 3,
                            "sort": 20,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "О военных операциях",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Рассказывает Сергей Говоров, сын Л. А. Говорова, и генерал армии Афанасий Щеглов</p>\r\n<p>Фрагмент из д/ф &laquo;Леонид Александрович Говоров. О жизненном пути маршала&raquo;, 1989 год</p>",
                            "sign": null,
                            "since": "1943",
                            "until": "1943",
                            "video": "./storage/blocks/GOVOROV_Leningrad/00_Govorov_Iskra.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 767,
                            "type": 1,
                            "sort": 30,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 1,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ОПЕРАЦИЯ «ИСКРА»",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Операция &laquo;Искра&raquo; началась 12 января 1943 года, войска Ленинградского и Волховского фронтов сровняли позиции противника с землёй за пару часов. 18 января советские части двух фронтов соединились.</p>",
                            "sign": null,
                            "since": "1943",
                            "until": "1943",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/November2021/Szzxq25nqnlxXYl5PptE.jpg",
                                "./storage/blocks/November2021/Xgk0OkRqGpDQWZxjyMK5.jpg",
                                "./storage/blocks/November2021/m58rAe2IOjFubzkiF1BH.jpg",
                                "./storage/blocks/November2021/lps3ynqNTR8vtMzlTrIw.jpg",
                                "./storage/blocks/November2021/BugfDnpfk23QWD52Jw6D.jpg",
                                "./storage/blocks/November2021/cZbVmNHxvEgKsGIjLayR.jpg",
                                "./storage/blocks/November2021/G4gMoamFmdVo9pN35gNT.jpg",
                                "./storage/blocks/November2021/ct2jHp6LDXqHY8sw2YyW.jpg",
                                "./storage/blocks/November2021/lerAWEY7slWXSHjTZLRe.jpg",
                                "./storage/blocks/November2021/v25ppX3KoPJeXb7e5Iou.jpg",
                                "./storage/blocks/November2021/95SBIvaZp4QvOjzTi0o8.jpg",
                                "./storage/blocks/November2021/MiI4nUAQVjKdQ8H4o7AJ.jpg",
                                "./storage/blocks/November2021/lc3OMF3UiFQxkJqmLwYk.jpg",
                                "./storage/blocks/November2021/O7ZYEl2IIuEXnzl8IKyt.jpg",
                                "./storage/blocks/November2021/2rhp91DBrAI6A86D4PTL.jpg",
                                "./storage/blocks/November2021/CftubJQLWSgF3lqacGKx.jpg",
                                "./storage/blocks/November2021/YgCrZnjpkpI5Tm2O1Apj.jpg",
                                "./storage/blocks/November2021/fqGWWAa82JTn3rUgQ4rm.jpg",
                                "./storage/blocks/November2021/d9BIc0AxA5eMWiV6T6T9.jpg",
                                "./storage/blocks/November2021/T1qeYmwjYcfGXEuPKZYs.jpg",
                                "./storage/blocks/November2021/3ncrtG6Bgh5zQDmCrT73.jpg",
                                "./storage/blocks/November2021/PZoEXeK3Sc2AbRmk2nPg.jpg",
                                "./storage/blocks/November2021/B8NXTs0tKLTib5WPixIU.jpg",
                                "./storage/blocks/November2021/VQizwXkKLol8TJdH9fHR.jpg",
                                "./storage/blocks/November2021/trDRsMByyedaM5wVQ4W0.jpg",
                                "./storage/blocks/November2021/O3nZz3n3VLWYCqa7gZHI.jpg",
                                "./storage/blocks/November2021/qlCkcg7pFv3Qdosshdt4.jpg",
                                "./storage/blocks/November2021/LRQ7YPxUH9OrskmVjP5E.jpg",
                                "./storage/blocks/November2021/pjJ5wKyU4wvG7pMn0eHz.jpg",
                                "./storage/blocks/November2021/kBrQ3njk2nHXYHdvTbEo.jpg",
                                "./storage/blocks/November2021/7IXLLXMRVHpa1J0Cs3Gz.jpg",
                                "./storage/blocks/November2021/Z0XNUsPv8VwzsDnJAkwa.jpg",
                                "./storage/blocks/November2021/tNFzIQRzzhunglipPnsy.jpg",
                                "./storage/blocks/November2021/WL6HznSaUGCdB3tgSMWN.jpg",
                                "./storage/blocks/November2021/XAA1VxeZruC9GVu2a1Jq.jpg",
                                "./storage/blocks/November2021/lfv5i8p9l3aJNbn6FOh1.jpg",
                                "./storage/blocks/November2021/6sMDx6AI7nwjpadoN1Z5.jpg",
                                "./storage/blocks/November2021/J4h5ElupC5jm9iy6fcWr.jpg",
                                "./storage/blocks/November2021/HvJeMaWDKgnJk0KiUorb.jpg",
                                "./storage/blocks/November2021/MG9grsgYtg7nyntbmPUX.jpg",
                                "./storage/blocks/November2021/N5Z3Z97Kwa42LgDWS9uA.jpg",
                                "./storage/blocks/November2021/qWcfztcP3Uh9nHHbFmSr.jpg",
                                "./storage/blocks/November2021/PyAxUriJGXfBXLO2j4U3.jpg",
                                "./storage/blocks/November2021/g0LMepTsK9JrS1K1my45.jpg",
                                "./storage/blocks/November2021/gVAYNHA3liLBJrZntqLS.jpg",
                                "./storage/blocks/November2021/GmoBP1pMyvxnfW9eaYBK.jpg",
                                "./storage/blocks/November2021/gXDxmXtwJ3QIX7q5Ic5S.jpg",
                                "./storage/blocks/November2021/VLeIbtGvAyAUDwBMEUsR.jpg",
                                "./storage/blocks/November2021/yfFkoacmj8UWbSkNKP4K.jpg",
                                "./storage/blocks/November2021/4OPTgMa7GUTHr3EJ2Qi5.jpg",
                                "./storage/blocks/November2021/7lA4A0l5hHTRmTWYMAKo.jpg",
                                "./storage/blocks/November2021/kG9ZWzvvtam79Cwh4DK6.jpg",
                                "./storage/blocks/November2021/jADrYkjiENoUlvxOJHLk.jpg",
                                "./storage/blocks/November2021/WHfYoruMohFPXM8Vjp5m.jpg",
                                "./storage/blocks/November2021/lhdY5B1thauvo9Yf2XP3.jpg",
                                "./storage/blocks/November2021/2KpCUkPJrAW2uGnZi1dO.jpg",
                                "./storage/blocks/November2021/BFXYqlUdT1xeloI3EtOk.jpg",
                                "./storage/blocks/November2021/Q63SNkA6kpibLYQVkTW9.jpg",
                                "./storage/blocks/November2021/oYsYFX3lWdRpjwlalIf7.jpg",
                                "./storage/blocks/November2021/Yzfj7mzGSj1OwiblcHmR.jpg",
                                "./storage/blocks/November2021/MiokYNlJNCNtD14zeGeW.jpg",
                                "./storage/blocks/November2021/JFvReLkvR3kugcGnXsti.jpg",
                                "./storage/blocks/November2021/ZFNGFlfqarhSmbZdvIFT.jpg",
                                "./storage/blocks/November2021/IwH8cHWtQjvGvlfnoslk.jpg",
                                "./storage/blocks/November2021/TossCbkHrsdDHQIpzfkc.jpg",
                                "./storage/blocks/November2021/wgXSESFXhrS0HtUYBj3s.jpg",
                                "./storage/blocks/November2021/YsLwiD2JgeveFX5eUVtN.jpg",
                                "./storage/blocks/November2021/Db5DttrWYIDsZFiXR1Te.jpg",
                                "./storage/blocks/November2021/yPyAWQlvHmCcCVyl4qpZ.jpg",
                                "./storage/blocks/November2021/8FwK4HmNddqNmqYVqviJ.jpg",
                                "./storage/blocks/November2021/19aXv7NSCzhlLtwdjvq0.jpg",
                                "./storage/blocks/November2021/cG1btD226OlXViweZFlP.jpg",
                                "./storage/blocks/November2021/KWUQWHYmK8XXtNNmlZwx.jpg",
                                "./storage/blocks/November2021/3Yt0J77iAF2rWewnEteP.jpg",
                                "./storage/blocks/November2021/KGdP15HohBfbI6WNJoNE.jpg",
                                "./storage/blocks/November2021/rr1c7Wco95bxSz803Kos.jpg",
                                "./storage/blocks/November2021/JvhdqOD7dDmjgvNr6xrV.jpg",
                                "./storage/blocks/November2021/6P4up871bf0amDCQW8U0.jpg",
                                "./storage/blocks/November2021/cuEnzvubeP3kXFAOW88c.jpg",
                                "./storage/blocks/November2021/YZE5q2OPD6MqMmVIAJXB.jpg",
                                "./storage/blocks/November2021/bsK8PqAIzM3bceEsuOSv.jpg",
                                "./storage/blocks/November2021/BRdle3nhORU0teytWU5k.jpg",
                                "./storage/blocks/November2021/Rc8cajR56vLYY57DE8gt.jpg",
                                "./storage/blocks/November2021/ZBKfjv4VGfHwNSbUryKH.jpg",
                                "./storage/blocks/November2021/CYzGnFJFyr2AL7iP1xkF.jpg",
                                "./storage/blocks/November2021/C89nhb2TdDsrhBD4p2h2.jpg",
                                "./storage/blocks/November2021/7vIBQkBmVY07T4lOCfA2.jpg",
                                "./storage/blocks/November2021/w5T3PXRthhfIi8Q57B0M.jpg",
                                "./storage/blocks/November2021/WGu5fwWZJA95XfG6kiXw.jpg",
                                "./storage/blocks/November2021/cILjDz5ueq6IZukF8wfO.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": "Из воспоминаний Б. В. Бычевского, сослуживца Л. А. Говорова по Ленинградскому фронту",
                            "doc_photo": "",
                            "doc_text": "<p>&laquo;Сражение началось одновременным броском через Неву по льду четырёх дивизий первого эшелона на участке 13 километров после 2 часов 20 минут ураганного огня всей сконцентрированной Говоровым артиллерии. Военный совет фронта разрешил генералу Симоняку, чья дивизия наступала в центре, вывести на берег Невы сводный оркестр, и бойцы поднялись в атаку со штурмовыми лестницами под звуки &laquo;Интернационала&raquo;. Семь суток наступали наши войска и от Невы, и из-за Ладоги. И вот, наконец, 18 января 1943 года кольцо блокады Ленинграда разорвано&raquo;.</p>",
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 768,
                            "type": 3,
                            "sort": 40,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "Прорыв блокады Ленинграда",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Фрагмент фильма &laquo;Великая победа под Ленинградом&raquo;, 1944 год</p>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "./storage/blocks/В_хроника_Ленинград декабрь 1943 (фрагмент фильма «Великая победа под Ленинградом»,  1944)_1.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 794,
                            "type": 1,
                            "sort": 50,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ПРОРЫВ БЛОКАДЫ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Блокада была прорвана. Проанализировав действия своих войск,</p>\r\n<p>Говоров начал подготовку новой операции и одновременно предупредил своих подчиненных: &laquo;Тот, кто допускает неоправданные потери и тем лишает свою часть боеспособности, не выполнив поставленную задачу, совершает преступление. Командующим армиям под личную ответственность не разрешать атак без разведки противника и не обеспеченных огнём...&raquo;.</p>",
                            "sign": null,
                            "since": "1943",
                            "until": "1943",
                            "video": "",
                            "width": 159.23566878980893,
                            "height": 100,
                            "bg": "./storage/blocks/December2022/87a5E0X9Dv9MyT5BUKS9.png",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 769,
                            "type": 3,
                            "sort": 60,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "Выступление Говорова",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Выступление Л. А. Говорова перед гвардейцами после прорыва блокады Ленинграда</p>",
                            "sign": null,
                            "since": "1943",
                            "until": "1943",
                            "video": "./storage/blocks/В_05_хроника-02_1.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 770,
                            "type": 5,
                            "sort": 70,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 1,
                            "bg2": "",
                            "bg_margin": 3,
                            "bg2_margin": 5,
                            "parallax": 300,
                            "parallax2": 500,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": null,
                            "title2": null,
                            "title3": null,
                            "text": "<p>15 января 1943 года Л. А. Говорову присвоено звание &laquo;Генерал-полковник&raquo;.</p>\r\n<p>28 января 1943 года за операцию по прорыву блокады Ленинграда Говоров награждён орденом Суворова I степени.</p>\r\n<p>17 ноября 1943 года Говорову присвоено звание &laquo;Генерал армии&raquo;.</p>",
                            "sign": null,
                            "since": "1943",
                            "until": "1943",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/November2021/fm8veprRDZxoewM3d59e.jpg",
                                "./storage/blocks/November2021/qz9XmBxbSZ6SMGzsEVnt.jpg",
                                "./storage/blocks/November2021/GBRsA083pUDucxQgKewL.jpg",
                                "./storage/blocks/November2021/tKx8wLzEPqjSFGjKUTaR.jpg",
                                "./storage/blocks/November2021/aUEJBufwxNuklWTNYb1B.jpg",
                                "./storage/blocks/November2021/KPQEgBvk7r02rJkR4BoZ.jpg",
                                "./storage/blocks/November2021/CvWhiT6CUepd31VsHJmp.jpg",
                                "./storage/blocks/November2021/BDmsnKzjQ3LGzOXZ4dka.jpg",
                                "./storage/blocks/November2021/f6yO8JGO65QSFnUhIBy8.jpg",
                                "./storage/blocks/November2021/E88QVTuK2Hpo8rEg1lJv.jpg",
                                "./storage/blocks/November2021/5jcAPqEzvfZepjU4yDF1.jpg",
                                "./storage/blocks/November2021/1OzjogGCMcaj9CWsUjTe.jpg",
                                "./storage/blocks/November2021/o4u91Mp4HOSJEIgcJiyX.jpg",
                                "./storage/blocks/November2021/JTtsROVx5GCgy0HgrgIq.jpg",
                                "./storage/blocks/November2021/ExZhPH3x4X365asGPWEu.jpg",
                                "./storage/blocks/November2021/05Enn11kYGWTZdfiNG7O.jpg",
                                "./storage/blocks/November2021/FMgAfX2hsqinR9wJNXQ7.jpg",
                                "./storage/blocks/November2021/7wilmpiD1NOZ8NBLOIOd.jpg",
                                "./storage/blocks/November2021/UrbBJWOeVmqquKMzXRJC.jpg",
                                "./storage/blocks/November2021/75g4wZZ9cbAHMPjogieH.jpg",
                                "./storage/blocks/November2021/xoqKsLi2uhf3CvDO1MpV.jpg",
                                "./storage/blocks/November2021/JtBM7yf6AmWHL1qWJL9F.jpg",
                                "./storage/blocks/November2021/XuEMV11sWO7dZLFaqcxs.jpg",
                                "./storage/blocks/November2021/JtfmPww5zZ1y8W2dpM5f.jpg",
                                "./storage/blocks/November2021/mLPIfHKmU6nXP9xD9MRp.jpg",
                                "./storage/blocks/November2021/z8MtZs9AD67JC1wz0zYn.jpg",
                                "./storage/blocks/November2021/Ond6jOuYbq6ZIS1TpTsG.jpg",
                                "./storage/blocks/November2021/aMDv415aZ7GwhOs1vQ97.jpg",
                                "./storage/blocks/November2021/1RdPpXHgIrVITl6Y32Gw.jpg",
                                "./storage/blocks/November2021/5xRMZwhRGKODJSZPZQSI.jpg",
                                "./storage/blocks/November2021/VuBSwNKcpbIr0nsX5FUZ.jpg",
                                "./storage/blocks/November2021/SxFZxWXem1iLYtVUaxx0.jpg",
                                "./storage/blocks/November2021/K5ONCsPhgLs2HNZGZLFB.jpg",
                                "./storage/blocks/November2021/VJgKV6GDcaQ2h3Q6xZ6P.jpg",
                                "./storage/blocks/November2021/yopBMrLzJJzGAwmdYtOe.jpg",
                                "./storage/blocks/November2021/kY1K3VBSt1vQlgfuY6PO.jpg",
                                "./storage/blocks/November2021/icyqTa6B9GMhGpqlLgdl.jpg",
                                "./storage/blocks/November2021/Vgqo8HMiO595VQtfv9gJ.jpg",
                                "./storage/blocks/November2021/ZAPHJmWJbNFDLhYboqOf.jpg",
                                "./storage/blocks/November2021/9HhIeGq0VwlzJxqDCAHO.jpg",
                                "./storage/blocks/November2021/MOPlFz5HRDZ1lkURpxdb.jpg",
                                "./storage/blocks/November2021/KRkoZSyMOgUa1R0cOVHH.jpg",
                                "./storage/blocks/November2021/1oIa2RcpJ6hdOH1ctFQm.jpg",
                                "./storage/blocks/November2021/pHXOG66FNLFZ4rn8q5hT.jpg",
                                "./storage/blocks/November2021/CrwpYxucOzLdO8PAZz5c.jpg",
                                "./storage/blocks/November2021/iS9y8x93aObjo0e1GsFW.jpg",
                                "./storage/blocks/November2021/6aKRN3pEhAnnPPbyYbGq.jpg",
                                "./storage/blocks/November2021/H1UI67xcnKijHJ2sLCE9.jpg",
                                "./storage/blocks/November2021/JzooROJJui66iKoVJxM2.jpg",
                                "./storage/blocks/November2021/2pZlSW0YO3Sx3rdS5Z12.jpg",
                                "./storage/blocks/November2021/wBDiekTIzgbs8ivd3030.jpg",
                                "./storage/blocks/November2021/dG0h9PxNKyk9XhiTVnJ8.jpg",
                                "./storage/blocks/November2021/nNPcSJy7A4SgsBdbuA03.jpg",
                                "./storage/blocks/November2021/TKqs3YQvmXl8AhaSr4Wq.jpg",
                                "./storage/blocks/November2021/8stpWLB7mHan6QtjTXte.jpg",
                                "./storage/blocks/November2021/dvmyZQVVM51LrqqsVZEl.jpg",
                                "./storage/blocks/November2021/z5V4vncQPmSx9IjDagOH.jpg",
                                "./storage/blocks/November2021/1dlatlRhZ2Cy580vqZWD.jpg",
                                "./storage/blocks/November2021/HLbqnyTonnypJOM2KNe2.jpg",
                                "./storage/blocks/November2021/zBVVCwWEmoULc37cHMNP.jpg",
                                "./storage/blocks/November2021/UxDdNg7Ln3bScSycNJXY.jpg",
                                "./storage/blocks/November2021/R1iIHuFSpkZsmW2rFpTL.jpg",
                                "./storage/blocks/November2021/QcR5Zsgb7C2EZN83bcR3.jpg",
                                "./storage/blocks/November2021/o1HsZ6SKaVw0uFvFeWv2.jpg",
                                "./storage/blocks/November2021/5H2DcyJiZKcCyM8jKcxf.jpg",
                                "./storage/blocks/November2021/EA2CaYdtez7A5oGnaJaQ.jpg",
                                "./storage/blocks/November2021/6Xei6RZ0GbCVGW3A0npY.jpg",
                                "./storage/blocks/November2021/AypWzJTmpQupq6FlKnEs.jpg",
                                "./storage/blocks/November2021/9DzRM5SXsoyL1RQ4g47a.jpg",
                                "./storage/blocks/November2021/WvxKkiYMxJ0NrzX895bb.jpg",
                                "./storage/blocks/November2021/dKI1kGgDs5WDpKNr6a6k.jpg",
                                "./storage/blocks/November2021/bNKRgM29mhKUdk8LOPaA.jpg",
                                "./storage/blocks/November2021/ONjtp6vFFUecsnSMxXgt.jpg",
                                "./storage/blocks/November2021/Fg34MgXoG7mvuhDZ200S.jpg",
                                "./storage/blocks/November2021/Bf73jQzYrph4IdG0XWOz.jpg",
                                "./storage/blocks/November2021/2OTxqQLe3lKxJncN6y1I.jpg",
                                "./storage/blocks/November2021/Q88hUGnMNXCTH9TJaJdx.jpg",
                                "./storage/blocks/November2021/BhjfsmPoFHbZK7lgF055.jpg",
                                "./storage/blocks/November2021/92iAk3gyYWi27oWB1uH3.jpg",
                                "./storage/blocks/November2021/8hxY8IaAqyzsQcekhM8V.jpg",
                                "./storage/blocks/November2021/kAewl1viwlIosbwTITHO.jpg",
                                "./storage/blocks/November2021/eP47Mt1OTYTlVO3vU82f.jpg",
                                "./storage/blocks/November2021/Gh9r7l6bu5piNORuueb0.jpg",
                                "./storage/blocks/November2021/jjaphjdMfkrjaej8dI8U.jpg",
                                "./storage/blocks/November2021/g58HEzEHpRwu74HY5SSr.jpg",
                                "./storage/blocks/November2021/WGnnzwKdD7qbI9niEqnY.jpg",
                                "./storage/blocks/November2021/hgyW69I2F72GHw8Pd0tW.jpg",
                                "./storage/blocks/November2021/tT77gMzge9PxlQ53FDJq.jpg",
                                "./storage/blocks/November2021/kBDHrxSjOvxBqeMHjYsr.jpg",
                                "./storage/blocks/November2021/IWANdZa4OFRpITRJBSyV.jpg"
                            ],
                            "photos": [
                                {
                                    "sort": 100,
                                    "title": "Л. А. Говоров и А. А. Жданов",
                                    "top": null,
                                    "height": null,
                                    "width": 140.18691588785046,
                                    "description": null,
                                    "photo": "./storage/gallery-photos/December2022/NSKOtCVsZ4H3g9iP6lb6.jpeg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                },
                                {
                                    "sort": 200,
                                    "title": "На выставке трофеев Ленинградского фронта, 1943 год",
                                    "top": null,
                                    "height": null,
                                    "width": 71.5,
                                    "description": "<p>&nbsp;</p>\r\n<div id=\"urban_overlay\"></div>",
                                    "photo": "./storage/gallery-photos/December2022/gn9l46Y1C9g1NhUqLrPm.jpeg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                },
                                {
                                    "sort": 300,
                                    "title": "Трофейные немецкие орудия, 1943 год",
                                    "top": null,
                                    "height": null,
                                    "width": 156.03217158176943,
                                    "description": "<p>&nbsp;</p>\r\n<div id=\"urban_overlay\"></div>",
                                    "photo": "./storage/gallery-photos/December2022/L09GtlzZr5CRiA7AWGx1.jpeg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                },
                                {
                                    "sort": 400,
                                    "title": "Вручение гвардейского знамени после прорыва блокады",
                                    "top": null,
                                    "height": null,
                                    "width": 131.92612137203167,
                                    "description": "<p>Генерал-полковник Л. А. Говоров и генерал-майор Н. П. Симоняк, 1943 год</p>\r\n<div id=\"urban_overlay\" style=\"left: -10px; top: -10px; width: 0px; height: 0px;\"></div>",
                                    "photo": "./storage/gallery-photos/December2022/HVu4iLLiQ85HTt0ttAAI.jpeg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                }
                            ],
                            "dots": [],
                            "doc_title": "Орден Суворова",
                            "doc_photo": "./storage/blocks/December2022/ilm4ss989pxryGDoR1gf.jpeg",
                            "doc_text": "<p>Орден Суворова I степени был учреждён в 1942 году. Им награждались командующие фронтами и армиями, их заместители, начальники штабов, начальники родов войск (артиллерии, воздушных сил, бронетанковых и миномётных) фронтов и армий за выдающиеся успехи в деле управления войсками.</p>",
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 31,
                    "title": "ПОДАРОК ОТ СТАЛИНА",
                    "since": "1943",
                    "until": "1943",
                    "years": "1943",
                    "description": null,
                    "bg": "",
                    "blocks": [
                        {
                            "id": 765,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 1,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ПОДАРОК ОТ СТАЛИНА",
                            "title2": null,
                            "title3": null,
                            "text": "<p>На заключительном этапе подготовки операции &laquo;Искра&raquo; Говоров был на очередном докладе у Сталина, где докладывал Верховному Главнокомандующему о нехватке боевой техники: Ленинградскому фронту нужны были танки. Сталин ответил, что танками помочь пока не может и протянул Говорову чернильницу, выполненную в виде танка&hellip;</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/November2021/0TdTfuI7o9yntDEt49na.jpg",
                                "./storage/blocks/November2021/KV2grX7oqxaO6WiF9DGa.jpg",
                                "./storage/blocks/November2021/w7yE6mfXlwQnqh5nApMM.jpg",
                                "./storage/blocks/November2021/IOl4uSqvwbjIH7bMdv9W.jpg",
                                "./storage/blocks/November2021/14tYOxBq7IwmrgLj5CvX.jpg",
                                "./storage/blocks/November2021/FQgVjThMyvznlAc4eEN0.jpg",
                                "./storage/blocks/November2021/Ko6SGHmkCxFJQyQdAwYb.jpg",
                                "./storage/blocks/November2021/ZeZ3KcaB7o1eRyjI4Igr.jpg",
                                "./storage/blocks/November2021/Thoi9TS9IQ1gGH7Ie9q8.jpg",
                                "./storage/blocks/November2021/SynMT3MbtFvYWcH8OXmX.jpg",
                                "./storage/blocks/November2021/57rqBH3r4q80F9zVBZlY.jpg",
                                "./storage/blocks/November2021/dvlHnQYmg4O7BhawaBUd.jpg",
                                "./storage/blocks/November2021/GUbbaHtCBY1vdAafStmU.jpg",
                                "./storage/blocks/November2021/Ewb4WVAqRsxbzltKFW5Q.jpg",
                                "./storage/blocks/November2021/vIpuUsrbny8uetrSX6NJ.jpg",
                                "./storage/blocks/November2021/HhPFmzOydGsET0HH7xXZ.jpg",
                                "./storage/blocks/November2021/ClzRPDAIqBTZX9eyGRXu.jpg",
                                "./storage/blocks/November2021/BeMGhwiBLRNcTpde5aLu.jpg",
                                "./storage/blocks/November2021/PIcY7Jkia3qXTc7Wqg4t.jpg",
                                "./storage/blocks/November2021/5A2qfjEdJworGswVYUD7.jpg",
                                "./storage/blocks/November2021/HKLRN3moqTmUdLC1PxZJ.jpg",
                                "./storage/blocks/November2021/vLgDNH65iWT6wrOllyNn.jpg",
                                "./storage/blocks/November2021/UcdPu5AXhPyGYxeAnHCV.jpg",
                                "./storage/blocks/November2021/R3XyTzFdWynuofFXMUYG.jpg",
                                "./storage/blocks/November2021/oW2bmIZE6DCPHDQobIs5.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 771,
                            "type": 1,
                            "sort": 20,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 1,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": null,
                            "title2": null,
                            "title3": null,
                            "text": "<p>Но настоящие танки для операции по прорыву блокады Говоров вскоре всё же получил.</p>",
                            "sign": null,
                            "since": "1942",
                            "until": "1942",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/November2021/lZmdJ0y0PoSjEw3PDj0L.jpg",
                                "./storage/blocks/November2021/ecumB0qT02n7FUaUfXw2.jpg",
                                "./storage/blocks/November2021/2PP7OgMPtRdfeIVow5Id.jpg",
                                "./storage/blocks/November2021/SjO97zy8udvxGqhHbo7l.jpg",
                                "./storage/blocks/November2021/D2tMx9dA9kz0VcBQ2N7M.jpg",
                                "./storage/blocks/November2021/a7ZaNqgVWUgd0veDJ0sx.jpg",
                                "./storage/blocks/November2021/uGKtde8323R5xJhHR1hH.jpg",
                                "./storage/blocks/November2021/MX6aUKBYlIAwMWDadFlq.jpg",
                                "./storage/blocks/November2021/hK9uSJcwBmyDAUlknPIa.jpg",
                                "./storage/blocks/November2021/rJDDIFpIQ6zer5Krxyl9.jpg",
                                "./storage/blocks/November2021/W2QVSXoLniqs3retWodD.jpg",
                                "./storage/blocks/November2021/BxzPEXQxD5PepE5KmMM2.jpg",
                                "./storage/blocks/November2021/PE8pQWrLxYt6TJJ3zKDO.jpg",
                                "./storage/blocks/November2021/JGyume8v4GNGdGUC0WJA.jpg",
                                "./storage/blocks/November2021/EUbnklfvKMo7DIHQAPtQ.jpg",
                                "./storage/blocks/November2021/ax3TFjBJpBuYxYra6myf.jpg",
                                "./storage/blocks/November2021/ufgNmlO7zRNoCMeCzNtY.jpg",
                                "./storage/blocks/November2021/oyTBjx72desGxYzpQbOP.jpg",
                                "./storage/blocks/November2021/GhJzXmDIpBxzbqzRiRJG.jpg",
                                "./storage/blocks/November2021/DTGFA3Gh7ylZekE41L0j.jpg",
                                "./storage/blocks/November2021/lUdrybri3ZQj8zfJcoFV.jpg",
                                "./storage/blocks/November2021/4tG45ZgbqWXjphpl2U3L.jpg",
                                "./storage/blocks/November2021/SIrtaT8qwNv855E3PsmL.jpg",
                                "./storage/blocks/November2021/sX6DUVVl8POcMbsITSMd.jpg",
                                "./storage/blocks/November2021/bKN9XrTLqxVceUK19956.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 766,
                            "type": 3,
                            "sort": 30,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "О подарке Сталина",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Рассказывает Алексей Говоров, внук маршала Говорова</p>",
                            "sign": null,
                            "since": "",
                            "until": "",
                            "video": "./storage/blocks/В_05-интервью-05_1.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 24,
                    "title": "ЛЕНИНГРАДСКО-НОВГОРОДСКАЯ ОПЕРАЦИЯ",
                    "since": "1944",
                    "until": "1944",
                    "years": "1944",
                    "description": null,
                    "bg": "./storage/chapters/October2021/oF4hdZp6slYfbfyNGmF8.jpg",
                    "blocks": [
                        {
                            "id": 772,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 1,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ЛЕНИНГРАДСКО-НОВГОРОДСКАЯ ОПЕРАЦИЯ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Неоднократно пытаясь прорвать кольцо блокады, войска смогли сделать это только в январе 1944 года. Говоров буквально чувствовал врага: он мог предугадать действия противника даже по карте. Смело перегруппировывая войска, меняя направления главных ударов, Говоров успешно выполнял поставленные перед ним задачи.</p>\r\n<p>14 января 1944 года войска Ленинградского фронта приступили к осуществлению Ленинградско-Новгородской операции, разработанной при активном участии Говорова и предполагающей полное снятие блокады и освобождение Ленинграда.</p>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "",
                            "width": 149.2537313432836,
                            "height": 100,
                            "bg": "./storage/blocks/December2022/J6V1uTAqZoFrWxWqModj.jpg",
                            "images": [
                                "./storage/blocks/November2021/WERi9CqmEa3WiuDQ7NiB.jpg",
                                "./storage/blocks/November2021/aGvKlJvp7022Xhj4G6G5.jpg",
                                "./storage/blocks/November2021/X8pnhqyWfUh61bygpfOa.jpg",
                                "./storage/blocks/November2021/RXPyEFxNKXCl67dlbGY6.jpg",
                                "./storage/blocks/November2021/jonb7yVol5BL3rmNi21K.jpg",
                                "./storage/blocks/November2021/FraTD7ScRodxvJCm9Rwx.jpg",
                                "./storage/blocks/November2021/vcMGkLKfW6PVLpwBkmi5.jpg",
                                "./storage/blocks/November2021/YpFZkkyimIfK1boptr1j.jpg",
                                "./storage/blocks/November2021/ZDaimKTR1UqaCtd2pwTY.jpg",
                                "./storage/blocks/November2021/ISyUX8LiJz3Mrni0du21.jpg",
                                "./storage/blocks/November2021/3d6M3Tjafx5e26HbkqnM.jpg",
                                "./storage/blocks/November2021/c0x5hG7gDCn4JWiNolOv.jpg",
                                "./storage/blocks/November2021/P77XxBCv0yPANPMxtaFW.jpg",
                                "./storage/blocks/November2021/JHMBpD1HUhT8CKTw1Ccj.jpg",
                                "./storage/blocks/November2021/aiE0vb7reacBCvbwio06.jpg",
                                "./storage/blocks/November2021/U8BALTDhJHfiL7iwDjbw.jpg",
                                "./storage/blocks/November2021/d8fzFd1iQKF8sgezXHTf.jpg",
                                "./storage/blocks/November2021/rag9wqGpXpPTlTVYf5Nn.jpg",
                                "./storage/blocks/November2021/2P8vASMAoqoDeLtVyVgu.jpg",
                                "./storage/blocks/November2021/ok7HHtI9e78hEpN3b943.jpg",
                                "./storage/blocks/November2021/ZcC0gw1AhUFXlFOajKwz.jpg",
                                "./storage/blocks/November2021/qGGV47Ph6xaGxlskAkTq.jpg",
                                "./storage/blocks/November2021/igif71dJDDrzqzebnFld.jpg",
                                "./storage/blocks/November2021/0eTZItJBc19gXiNjNfbY.jpg",
                                "./storage/blocks/November2021/opoCTMVGZcG1yQXTW1SZ.jpg",
                                "./storage/blocks/November2021/BZtNGqbK7z7mPC1ehSQj.jpg",
                                "./storage/blocks/November2021/bhd5WhVNEA2WwdhoOkLf.jpg",
                                "./storage/blocks/November2021/giqcqEUbfJBO0WWO98E1.jpg",
                                "./storage/blocks/November2021/4xIash40r3nyBEt22AYy.jpg",
                                "./storage/blocks/November2021/xGYW0yCLeP0R7R549YlB.jpg",
                                "./storage/blocks/November2021/C418PWWvmVPQqkuX4cs6.jpg",
                                "./storage/blocks/November2021/l4fgLodK86fFtL0fE4PU.jpg",
                                "./storage/blocks/November2021/Cjo9bVQGdTg8Xe7IMgtu.jpg",
                                "./storage/blocks/November2021/mSpBtaH4zV7rSSFY7OY1.jpg",
                                "./storage/blocks/November2021/zLScxDUyTQ6zsYeHFLsH.jpg",
                                "./storage/blocks/November2021/LjIfdE6Crj45Ap9fs35S.jpg",
                                "./storage/blocks/November2021/E0FXipZy4KErcORYVaXs.jpg",
                                "./storage/blocks/November2021/2ofrGm4MuNuSQTBr5H7l.jpg",
                                "./storage/blocks/November2021/A3NJmQtApWXNYLgZtRIG.jpg",
                                "./storage/blocks/November2021/IVa4dgLtUDlgIJfaaX5K.jpg",
                                "./storage/blocks/November2021/mzxiSnasoKuezIpJBSRt.jpg",
                                "./storage/blocks/November2021/hqU4FfNCVXhfncFGElJV.jpg",
                                "./storage/blocks/November2021/xeZn1zQwdDX4mY9P8Iro.jpg",
                                "./storage/blocks/November2021/OXF90ElYJkzsaJZIQDHs.jpg",
                                "./storage/blocks/November2021/B6Zla4bXd2JCtKlYAjz8.jpg",
                                "./storage/blocks/November2021/2qutxiRHU1kxtq93nG25.jpg",
                                "./storage/blocks/November2021/LTgTAvRYpUDRsPVXvMij.jpg",
                                "./storage/blocks/November2021/xbHbWzNAHTDRN0d0vFqR.jpg",
                                "./storage/blocks/November2021/Ww2OO3DhHT56i1bq66cp.jpg",
                                "./storage/blocks/November2021/TPaBobY6npAK7AJc568n.jpg",
                                "./storage/blocks/November2021/TCf2Uc9xqsKocHW9ZMnh.jpg",
                                "./storage/blocks/November2021/ZKfWxRCDa8QEpFCt9Brq.jpg",
                                "./storage/blocks/November2021/oyoy5w2KNEV0JpQOrgCG.jpg",
                                "./storage/blocks/November2021/OdJG5qow2bayiSS4iGPI.jpg",
                                "./storage/blocks/November2021/NrOqPhxE6XJKhw3jrnWg.jpg",
                                "./storage/blocks/November2021/wK199Z9Cc2AedTnuROW3.jpg",
                                "./storage/blocks/November2021/fHbCQjzqemEK1FNvg5Tc.jpg",
                                "./storage/blocks/November2021/pWyj3tpv7L0eSxQDYPEv.jpg",
                                "./storage/blocks/November2021/LBHx14Ai5mPtp6N0Plzu.jpg",
                                "./storage/blocks/November2021/141U9QnVXZzFnazap128.jpg",
                                "./storage/blocks/November2021/WJwc1QCplg6DEvxnWVWZ.jpg",
                                "./storage/blocks/November2021/nJ4nzNruNOU2ZWYkToGW.jpg",
                                "./storage/blocks/November2021/0BqRtr4j4ipZn4PReJ9C.jpg",
                                "./storage/blocks/November2021/IdwoKtAgjiucNvKxzTxH.jpg",
                                "./storage/blocks/November2021/GodQvI1y3H0rxfMWk83y.jpg",
                                "./storage/blocks/November2021/QilnIMWlqVNzOnebiyOI.jpg",
                                "./storage/blocks/November2021/s7CH0uPdniAehAPtRotb.jpg",
                                "./storage/blocks/November2021/BDovYFMLLQwAV3QuUy3m.jpg",
                                "./storage/blocks/November2021/z3VyzAQZQdaF4Wq9zlIJ.jpg",
                                "./storage/blocks/November2021/qUmobBMPuR2IiIyXVzEs.jpg",
                                "./storage/blocks/November2021/BkIiFmsHzmjLT0AhlS87.jpg",
                                "./storage/blocks/November2021/hF4RTcOUUOiwODtJ93GR.jpg",
                                "./storage/blocks/November2021/VYBa4XzH6E2TVBn5rtVS.jpg",
                                "./storage/blocks/November2021/kfNP8TmbZn5TjDUtm7B5.jpg",
                                "./storage/blocks/November2021/Gdwbdz6Fc1aTAsDbZf34.jpg",
                                "./storage/blocks/November2021/III2aM98pzVVTWaHMyaY.jpg",
                                "./storage/blocks/November2021/5mUfjAe3Y23JpcvEUjBX.jpg",
                                "./storage/blocks/November2021/dIBMdvvwOTkojZ81dFfX.jpg",
                                "./storage/blocks/November2021/zRxiwd9J7a4lJe5DSjK7.jpg",
                                "./storage/blocks/November2021/HTWiXYOnInDGzW8Jh3St.jpg",
                                "./storage/blocks/November2021/3sMe72Ig0G4yyar2zttd.jpg",
                                "./storage/blocks/November2021/FAbai6TB8Gi4q5feyp0v.jpg",
                                "./storage/blocks/November2021/LZBDDPAlVM71mmQPxP32.jpg",
                                "./storage/blocks/November2021/mOchybwPDc93b7tGNDw0.jpg",
                                "./storage/blocks/November2021/o2Sq21456bebPp9kOclp.jpg",
                                "./storage/blocks/November2021/DEoivw3dHMxXy1J3w0px.jpg",
                                "./storage/blocks/November2021/AWtzQjdURxZvNuDUZ9Rp.jpg",
                                "./storage/blocks/November2021/yQJyg9kFVQ2YpNGGXZ6L.jpg",
                                "./storage/blocks/November2021/G9rdKH3X00aEAtNhL7T7.jpg",
                                "./storage/blocks/November2021/fKj5EL71kZkiuBQtJyJM.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 763,
                            "type": 3,
                            "sort": 20,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "О бункере в Смольном и «Январском громе»",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Рассказывают Леонид Говоров, внук маршала Говорова, и Николай Третьяков, директор Историко-мемориального музея &laquo;Смольный&raquo;</p>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "./storage/blocks/В_05-интервью-01_1.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 776,
                            "type": 1,
                            "sort": 30,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 1,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "«ЯНВАРСКИЙ ГРОМ»",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Одним из этапов Ленинградско-Новгородской операции был &laquo;Январский гром&raquo;. В ходе наступления против немецкой армии советские войска под руководством Леонида Говорова отбросили врага подальше от Ленинграда и освободили Красное Село, Красногвардейск, Пушкин, Ропшу и Слуцк, полностью освободив Ленинград от блокады.</p>\r\n<p>Развивая наступление, войска Говорова прошли на запад 220 &ndash; 280 км, почти полностью были освобождены Ленинградская область и часть Калининской области.</p>\r\n<p>21 февраля 1944 года за успех в проведении операции по снятию блокады Ленинграда Говоров награждён вторым орденом Суворова I степени.</p>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/November2021/T5wK3Z0sTbJTMqv6p1Oq.jpg",
                                "./storage/blocks/November2021/F0b39gTA1vsvg2ymOJVX.jpg",
                                "./storage/blocks/November2021/6bs53aL8ia3stJsGLSMU.jpg",
                                "./storage/blocks/November2021/MKiedRuKNr9Eo17gvu52.jpg",
                                "./storage/blocks/November2021/a0Qe1szM7vHn3e09fVwV.jpg",
                                "./storage/blocks/November2021/5J5nu5ytANNQBEoKiSXG.jpg",
                                "./storage/blocks/November2021/LVgZRpEbMDhBt4bSgcyy.jpg",
                                "./storage/blocks/November2021/D4OYLQxHUf16X7ria51w.jpg",
                                "./storage/blocks/November2021/5Wy42EQ2aQRiIFNkT43Z.jpg",
                                "./storage/blocks/November2021/ilRdyOaszvCohSDbkenp.jpg",
                                "./storage/blocks/November2021/87Ki2L8mxJ1E7fKpUAHr.jpg",
                                "./storage/blocks/November2021/nx5sASIGBL21yisV9gCF.jpg",
                                "./storage/blocks/November2021/Pum0g1ip219vMJ8zVOWN.jpg",
                                "./storage/blocks/November2021/cZeSEuGm6KS0evZe03SC.jpg",
                                "./storage/blocks/November2021/bPyyO3RYF3CZlHnkyjz9.jpg",
                                "./storage/blocks/November2021/otcfMoE75V7Q2Ur3Rxke.jpg",
                                "./storage/blocks/November2021/roKK1EaRzpJUlxRocrlb.jpg",
                                "./storage/blocks/November2021/7Ey62WYXl2J3hzpLaOa9.jpg",
                                "./storage/blocks/November2021/ih6lFIk4sR18ZnZoiFGG.jpg",
                                "./storage/blocks/November2021/VGcJ13XTL2WKUS7Bcux8.jpg",
                                "./storage/blocks/November2021/n8Rxlv4spOAs2Zq9LmCh.jpg",
                                "./storage/blocks/November2021/s3uWNu8AMDxsOjJ03tp1.jpg",
                                "./storage/blocks/November2021/Jq4vqagMPpo4XXHODLEP.jpg",
                                "./storage/blocks/November2021/LWmz9pQttM5VTRwxzV3b.jpg",
                                "./storage/blocks/November2021/28S3kKSJwq4BR8FLLkGx.jpg",
                                "./storage/blocks/November2021/56ySMqZexC9Fxo8jIVqI.jpg",
                                "./storage/blocks/November2021/CjED552eXwuGUe1ZNqXH.jpg",
                                "./storage/blocks/November2021/o7awsztnKDcqpUTQcY6k.jpg",
                                "./storage/blocks/November2021/2i47fW2WLKax90bVu39z.jpg",
                                "./storage/blocks/November2021/y8jpeBSq1ydTDAeU4FBj.jpg",
                                "./storage/blocks/November2021/pClXfNJMXtgKebN0AHRk.jpg",
                                "./storage/blocks/November2021/1jSpinMiT4GsWO9s45oW.jpg",
                                "./storage/blocks/November2021/xphkF7cjuOXoiMYeZD2R.jpg",
                                "./storage/blocks/November2021/waAdMrK2G7bLSsA6UYX6.jpg",
                                "./storage/blocks/November2021/N5tVQjTqpnINUEWshKJ7.jpg",
                                "./storage/blocks/November2021/RSctYqPMa3u22BFtoBLc.jpg",
                                "./storage/blocks/November2021/84jkAru35gk5EM5YgnRj.jpg",
                                "./storage/blocks/November2021/sEmLjovzT3DWMtPygAYo.jpg",
                                "./storage/blocks/November2021/LmJmhHyB16d1ZsSNJFfT.jpg",
                                "./storage/blocks/November2021/LDxFLhY71mrhkVU37Bha.jpg",
                                "./storage/blocks/November2021/sIUgS3IZCaumGq7KRCOl.jpg",
                                "./storage/blocks/November2021/aplvXASSlD5GxdyQWo3d.jpg",
                                "./storage/blocks/November2021/XSadC5Xzss1ws0HJ6N3U.jpg",
                                "./storage/blocks/November2021/aodu89r47L6zegMZzKTQ.jpg",
                                "./storage/blocks/November2021/Z5y0PAcQSXTWBup0SbL4.jpg",
                                "./storage/blocks/November2021/gUqnaWw5WVoIdj0qU6fc.jpg",
                                "./storage/blocks/November2021/0hafciSChnXrldadavYM.jpg",
                                "./storage/blocks/November2021/nQkjgMji6QPbWRtoFRBH.jpg",
                                "./storage/blocks/November2021/RnvbdO9qBmjE0Gs0C82x.jpg",
                                "./storage/blocks/November2021/66BCjunAgKtlsSS7UTv5.jpg",
                                "./storage/blocks/November2021/ewX0M2J5P9DzXAJMj8h6.jpg",
                                "./storage/blocks/November2021/RHoPC9dtkJishEHYnlxE.jpg",
                                "./storage/blocks/November2021/UxqQlyvwC9cxnNdUxi0Z.jpg",
                                "./storage/blocks/November2021/LHfPSaovVVIwrrIaLZNH.jpg",
                                "./storage/blocks/November2021/3JP3xWLcgbtQS0Txfr1r.jpg",
                                "./storage/blocks/November2021/bMNE0CNrVWbgubAdxyOk.jpg",
                                "./storage/blocks/November2021/nIFuXc9ztLRRX1BgUmvh.jpg",
                                "./storage/blocks/November2021/HFYAeurhLCT70yBICUmG.jpg",
                                "./storage/blocks/November2021/KWnmCa8rSIq3arB08opz.jpg",
                                "./storage/blocks/November2021/u7yeXa7eDfnGwNRVEw0F.jpg",
                                "./storage/blocks/November2021/jZOszUd7cf3j1N4ny3hc.jpg",
                                "./storage/blocks/November2021/rLe2dRoddZVesnp0t3IE.jpg",
                                "./storage/blocks/November2021/pd9AlAHS0XnWJvO413XR.jpg",
                                "./storage/blocks/November2021/hXNYP6bmQrZe9cOkYnTF.jpg",
                                "./storage/blocks/November2021/vLoP7iLUg8DHRJbD35Pd.jpg",
                                "./storage/blocks/November2021/OJfVXdxcqTBos9CcpyYn.jpg",
                                "./storage/blocks/November2021/efCJlGXgfUNKh2oMTs3y.jpg",
                                "./storage/blocks/November2021/MPcTm4yi5pQSlHP4j35K.jpg",
                                "./storage/blocks/November2021/d2x1OKiTyk2NzxXY8tI4.jpg",
                                "./storage/blocks/November2021/uVRO9suPxiruwqtxQFeW.jpg",
                                "./storage/blocks/November2021/TA6aMND9ZQtj5Y0lMPh0.jpg",
                                "./storage/blocks/November2021/AizDhFJbre5xrsz4xct5.jpg",
                                "./storage/blocks/November2021/679DmWl6LxBdh7LGv9yD.jpg",
                                "./storage/blocks/November2021/nO3Bb536sXLhaRf3eRNV.jpg",
                                "./storage/blocks/November2021/4MIAu4iLtaIpySBya7zO.jpg",
                                "./storage/blocks/November2021/or49C8EPXm4ZR79ev7Bq.jpg",
                                "./storage/blocks/November2021/rbaX9Q6vXy3s59AmJwLJ.jpg",
                                "./storage/blocks/November2021/A7HmdwjFJw7HTQ2mFFek.jpg",
                                "./storage/blocks/November2021/3EgglCTRqd65XeX9K33e.jpg",
                                "./storage/blocks/November2021/DmBU2si89F2y3xlKW8DC.jpg",
                                "./storage/blocks/November2021/fSYFXsipN2exfDHqAA21.jpg",
                                "./storage/blocks/November2021/wcNyaTFBMD23jQ9Jzsnj.jpg",
                                "./storage/blocks/November2021/mazngG9qsA43BqF46GmR.jpg",
                                "./storage/blocks/November2021/bJJIiY7rhfy67UegZrjA.jpg",
                                "./storage/blocks/November2021/q1yXupP9BwzCV3HIJVWr.jpg",
                                "./storage/blocks/November2021/HehkuAwwk1xatzPjkwZi.jpg",
                                "./storage/blocks/November2021/Ew2FJ5RLdaiGLEp5xPVZ.jpg",
                                "./storage/blocks/November2021/JBKNhUtp7jcDFnRxjgMq.jpg",
                                "./storage/blocks/November2021/Nri4ns6vGhfk7OofSgNK.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": "Награды",
                            "doc_photo": "./storage/blocks/November2021/Q5N3fQ9BUwfrWoe3DQ6I.jpg",
                            "doc_text": "<p>Материалы из личного дела.</p>",
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 795,
                            "type": 3,
                            "sort": 40,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "Снятие блокады Ленинграда",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Рассказывает Алесь Адамович, соавтор &laquo;Блокадной книги&raquo;</p>\r\n<p>Фрагмент из д/ф &laquo;Леонид Александрович Говоров. О жизненном пути маршала&raquo;, 1989 год</p>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "./storage/blocks/GOVOROV_Leningrad/00_Govorov_Snyatie_Blokady.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 774,
                            "type": 1,
                            "sort": 50,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 1,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ЛЕНИНГРАДСКО-НОВГОРОДСКАЯ ОПЕРАЦИЯ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>27 января 1944 года в Ленинграде состоялся салют в ознаменование окончательного снятия блокады. Приказ на проведение салюта отдал командующий ленинградским фронтом Леонид Александрович Говоров.</p>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/November2021/rQi8ilO2lSNQcPTiTUUB.jpg",
                                "./storage/blocks/November2021/nPNhYLkM6Rt0UJtfmgu2.jpg",
                                "./storage/blocks/November2021/t19axMOiKWW5MVrbQRIP.jpg",
                                "./storage/blocks/November2021/Y9l0wXpccM5okXxTqEho.jpg",
                                "./storage/blocks/November2021/0eY7tGbQSPVYIolk7SAG.jpg",
                                "./storage/blocks/November2021/mz07W1sKASwVPDmo5EKL.jpg",
                                "./storage/blocks/November2021/LvSxUeu8RaTCyEFhednd.jpg",
                                "./storage/blocks/November2021/2Om63IFXHaj8BF8BNl3L.jpg",
                                "./storage/blocks/November2021/fXhGIvK8eCo7dqxrZksH.jpg",
                                "./storage/blocks/November2021/dictr9lNyEQjRwIRNir6.jpg",
                                "./storage/blocks/November2021/x4VYLmNgNh0NhmEDih0w.jpg",
                                "./storage/blocks/November2021/ly39gE014nKnhjtlR1DP.jpg",
                                "./storage/blocks/November2021/JoQQr4sVF2LAsG8s9qnH.jpg",
                                "./storage/blocks/November2021/rycPcc7VRrOelSGpMNfC.jpg",
                                "./storage/blocks/November2021/1gLEMrxvxtOVgoBisrox.jpg",
                                "./storage/blocks/November2021/LDEc2sn27omcPmO7wyMa.jpg",
                                "./storage/blocks/November2021/LinM5sneNhIh3aXIGH9u.jpg",
                                "./storage/blocks/November2021/aCgt0H9Im4aqRbgYUm69.jpg",
                                "./storage/blocks/November2021/FjhENZOEyDKQZ9yKhcxB.jpg",
                                "./storage/blocks/November2021/oA0sTkp61vzqdCFAFpvn.jpg",
                                "./storage/blocks/November2021/lLbP0zpwAR3rQgMubxFd.jpg",
                                "./storage/blocks/November2021/cxgv07tNbmKeMX0rM6rD.jpg",
                                "./storage/blocks/November2021/PoNwbIPg8vfYU2txmDNf.jpg",
                                "./storage/blocks/November2021/yyqBN6eUC6FCEp8w5BRW.jpg",
                                "./storage/blocks/November2021/o5qQAyKvXXWu3TBYTjHA.jpg",
                                "./storage/blocks/November2021/51uCLrMI0nTryKHxwTvp.jpg",
                                "./storage/blocks/November2021/TZyKPWlEGbwFvyobsqkS.jpg",
                                "./storage/blocks/November2021/tlCC7a1P2BCbNv7kEcGp.jpg",
                                "./storage/blocks/November2021/cHjqrCVmsYck4B9IlEcX.jpg",
                                "./storage/blocks/November2021/w18JwG1jdK6B70HQWSo4.jpg",
                                "./storage/blocks/November2021/9mjbUvxsnuUE3hjStguk.jpg",
                                "./storage/blocks/November2021/7mkpNRwqXSUDF2KfQda6.jpg",
                                "./storage/blocks/November2021/X6VEraPzBq3IeNeysWCP.jpg",
                                "./storage/blocks/November2021/mvVxobIPrXAHlCqTxsbp.jpg",
                                "./storage/blocks/November2021/vqH8ViWHqtSMivx9kZoP.jpg",
                                "./storage/blocks/November2021/CN5rHmebUYJ3fSNl6jNW.jpg",
                                "./storage/blocks/November2021/rodNJm2kSaJGkdeaTYsG.jpg",
                                "./storage/blocks/November2021/DrgxpyrjASklci5cRWk3.jpg",
                                "./storage/blocks/November2021/EvJe7i35jiY5PCp1Xd19.jpg",
                                "./storage/blocks/November2021/foCDOMcfCF9smaAhPn8C.jpg",
                                "./storage/blocks/November2021/NA7RKFmCR1wgfoa1AWN3.jpg",
                                "./storage/blocks/November2021/OcWZ6cLZXVzShccGNQaE.jpg",
                                "./storage/blocks/November2021/Zo1iFqm7z8BiYxiWO01j.jpg",
                                "./storage/blocks/November2021/un1ItMOUktwtTrT0bWLU.jpg",
                                "./storage/blocks/November2021/kPYL9ie3nV9C9ch8AUfG.jpg",
                                "./storage/blocks/November2021/UuJUmulSWANlqzo1sOrv.jpg",
                                "./storage/blocks/November2021/QdovAro7UJAnSvCeJ23b.jpg",
                                "./storage/blocks/November2021/HFaS1xtZQKvCzYNW8ZSc.jpg",
                                "./storage/blocks/November2021/zLR9F0qwpS0XBdoo1k2s.jpg",
                                "./storage/blocks/November2021/PAx9AFmtzt4mhMDJugTu.jpg",
                                "./storage/blocks/November2021/CtOnHhCQvlj1Fpz4rMzy.jpg",
                                "./storage/blocks/November2021/0BHIViI6U2DZgbTO0UlR.jpg",
                                "./storage/blocks/November2021/K4hLa4WMgq9rX9FZfpul.jpg",
                                "./storage/blocks/November2021/RVUCHLZzah5wcUTIJ70R.jpg",
                                "./storage/blocks/November2021/7A9O2czqBeUoD8zYMj60.jpg",
                                "./storage/blocks/November2021/OyLprAJYiukL4qvOJy0L.jpg",
                                "./storage/blocks/November2021/rlkMjGG8XEYEad6GlXpS.jpg",
                                "./storage/blocks/November2021/WgLkhf8vvJdxWXIWTKyB.jpg",
                                "./storage/blocks/November2021/Q5Tnpi8j6uCzhEFIXBEI.jpg",
                                "./storage/blocks/November2021/t3zfkRUyq3uHPXqn1wLg.jpg",
                                "./storage/blocks/November2021/05YXtVUrMRCuoSqieAUK.jpg",
                                "./storage/blocks/November2021/oUdWYwNdLbpFC1wr3sfP.jpg",
                                "./storage/blocks/November2021/gsmFUmao0eM1kqJv0MyE.jpg",
                                "./storage/blocks/November2021/EOUyPO5AefxD2odvpXEj.jpg",
                                "./storage/blocks/November2021/Wa6czxo7NX0lMOHDgvCW.jpg",
                                "./storage/blocks/November2021/3xlPbeIe0okZNgq9TKcb.jpg",
                                "./storage/blocks/November2021/CqzhY175Dp4yYBNRBhyI.jpg",
                                "./storage/blocks/November2021/70xb11aQDtbQMfGkjoPX.jpg",
                                "./storage/blocks/November2021/gO9FCSAATubhgCox6uZ1.jpg",
                                "./storage/blocks/November2021/ed2ClZsIgSGSbogU5S5c.jpg",
                                "./storage/blocks/November2021/qSMxCu15fDUg3R85c384.jpg",
                                "./storage/blocks/November2021/uO09yrhjKNoem1lC8DZI.jpg",
                                "./storage/blocks/November2021/ML3TlX37zlEbDXmUpzTu.jpg",
                                "./storage/blocks/November2021/mJsgAmgAVrmPPzySo4C2.jpg",
                                "./storage/blocks/November2021/irxWp9cGHkioRxjDHFtY.jpg",
                                "./storage/blocks/November2021/5ufLMOLTisoiYGlxfuLq.jpg",
                                "./storage/blocks/November2021/hhBTovDc5jMXmsDdsjYZ.jpg",
                                "./storage/blocks/November2021/XfCN1MkwrfQDr91eNvkD.jpg",
                                "./storage/blocks/November2021/V3MhQEQDuKnpVClVuXXe.jpg",
                                "./storage/blocks/November2021/iBLqusqWTol5rdCenRRr.jpg",
                                "./storage/blocks/November2021/aDxnS2zzd2fSSXNaSEeI.jpg",
                                "./storage/blocks/November2021/7XRxUEFED4Vs9oS8LdKx.jpg",
                                "./storage/blocks/November2021/u8Fx9JTwb0GvSAnXooAe.jpg",
                                "./storage/blocks/November2021/lYMxuy6tH2537FLsC0yt.jpg",
                                "./storage/blocks/November2021/raqTbneBBOT84TGVonoc.jpg",
                                "./storage/blocks/November2021/GD7yIkuYRpIEBNRuZEKc.jpg",
                                "./storage/blocks/November2021/Fqc07ckzbsHZ4RwjIcla.jpg",
                                "./storage/blocks/November2021/7MN6dAqLrUYRuC24f31I.jpg",
                                "./storage/blocks/November2021/HogObxTwiQTVz4NETv3D.jpg",
                                "./storage/blocks/November2021/EneraRfyG1Hh4mxSYxj8.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 775,
                            "type": 3,
                            "sort": 60,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "Праздничный салют в Ленинграде",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Документальная кинохроника</p>",
                            "sign": null,
                            "since": "1943",
                            "until": "1943",
                            "video": "./storage/blocks/В_хроника_Салют в Ленинграде. 27 января 1944 года_1.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 777,
                            "type": 3,
                            "sort": 70,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "Выступление маршала Говорова в 1946 году",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Празднование, посвящённое годовщине снятия блокады Ленинграда. 1946 год</p>",
                            "sign": null,
                            "since": "1946",
                            "until": "1946",
                            "video": "./storage/blocks/В_05_хроника-13_1.mp4",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 30,
                    "title": "ВЫБОРГСКАЯ ОПЕРАЦИЯ",
                    "since": "1944",
                    "until": "1944",
                    "years": "1944",
                    "description": null,
                    "bg": "",
                    "blocks": [
                        {
                            "id": 778,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 2,
                            "bg2": "",
                            "bg_margin": 2,
                            "bg2_margin": 0,
                            "parallax": 200,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ВЫБОРГСКАЯ ОПЕРАЦИЯ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>10 июня 1944 года войска Ленинградского фронта под руководством Л. А. Говорова начали Выборгскую наступательную операцию с целью вывода из войны Финляндии.</p>\r\n<div id=\"urban_overlay\" style=\"left: -10px; top: -10px; width: 0px; height: 0px;\"></div>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "",
                            "images": [
                                "./storage/blocks/January2022/zq72zj9MloLpBkFpzgo4.jpg",
                                "./storage/blocks/January2022/bggEHE10dbGg3pEYp5ul.jpg",
                                "./storage/blocks/January2022/cEnnCRzgcwOjoOpzZWrG.jpg",
                                "./storage/blocks/January2022/9TfBVfTOGCdBqI1xB1Vk.jpg",
                                "./storage/blocks/January2022/zAfTY4AATJnYQelWHftY.jpg",
                                "./storage/blocks/January2022/bEhXqYWHupwvwn3lmr7x.jpg",
                                "./storage/blocks/January2022/6vDMcOr0eOxastJSRC5d.jpg",
                                "./storage/blocks/January2022/hP2wfhthOkQmquizxsJN.jpg",
                                "./storage/blocks/January2022/oPwU9euO8nuMmDt98hL2.jpg",
                                "./storage/blocks/January2022/UL5e0JHAl4JIO2tXcL6t.jpg",
                                "./storage/blocks/January2022/TobwBHkHLietmXjPOajq.jpg",
                                "./storage/blocks/January2022/sLvAeG25li26yVLu8io7.jpg",
                                "./storage/blocks/January2022/AdUJsHkhvBkZUES87cLp.jpg",
                                "./storage/blocks/January2022/OrMfPGohxBx3amAzUZs3.jpg",
                                "./storage/blocks/January2022/vCNQ8RSlU9f5kUMlakng.jpg",
                                "./storage/blocks/January2022/93KH433BPSjnmiwHEHG5.jpg",
                                "./storage/blocks/January2022/jBoNEvQsXgQPhGBfvtVI.jpg",
                                "./storage/blocks/January2022/V7oepXd9qjZHvsdrJcgX.jpg",
                                "./storage/blocks/January2022/g3gdlnDw0hBQpSknKAA4.jpg",
                                "./storage/blocks/January2022/UaroiU1LjTXBxLmfEacy.jpg",
                                "./storage/blocks/January2022/mgO9EOMUDNZ22dcQ6xh7.jpg",
                                "./storage/blocks/January2022/LymbOdPDLPqtCcqxza8O.jpg",
                                "./storage/blocks/January2022/8bCCG6X4KaDZMHGWmmpl.jpg",
                                "./storage/blocks/January2022/DQe3QfMeASd2UWRbnr1w.jpg",
                                "./storage/blocks/January2022/VNtqq69unX3nNTup79Rw.jpg",
                                "./storage/blocks/January2022/fHzu04Z2NLzRtExo9Ttn.jpg",
                                "./storage/blocks/January2022/xIXZBxFZWcLfHZMxD7gv.jpg",
                                "./storage/blocks/January2022/p6GjqpRreZMupfgnN9Ix.jpg",
                                "./storage/blocks/January2022/7ZKfHFiAAvZIwri6aNVh.jpg",
                                "./storage/blocks/January2022/Fr6FjJyG4sXTM1mYf82o.jpg",
                                "./storage/blocks/January2022/62fPn9cUTHelnglTTRNT.jpg",
                                "./storage/blocks/January2022/UWEU8Ga5HU3AMuAY6SG2.jpg",
                                "./storage/blocks/January2022/bZnkC3qmu3cZf61IMP7H.jpg",
                                "./storage/blocks/January2022/NUvqFaVPsQYnH1bbAn4K.jpg",
                                "./storage/blocks/January2022/XeJwyHFRhunm8Dyc8OE7.jpg",
                                "./storage/blocks/January2022/iVtDNWWVJLHLNLk1gpFE.jpg",
                                "./storage/blocks/January2022/tRjKrbo9CwLqZU0fHG3T.jpg",
                                "./storage/blocks/January2022/zof07Aqk0wqd0qX7FjCk.jpg",
                                "./storage/blocks/January2022/6UHKhIcrOOLy4HFjepYf.jpg",
                                "./storage/blocks/January2022/s8h3OHJgafOCZxYdqlNB.jpg",
                                "./storage/blocks/January2022/jf76fa032Lf1ekcTdDfG.jpg",
                                "./storage/blocks/January2022/AW5KVTjTCRHOhxEBZM9T.jpg",
                                "./storage/blocks/January2022/8UiwlUbltBUACTaM6ytp.jpg",
                                "./storage/blocks/January2022/xFIpqnfZINScuXwnFWKY.jpg",
                                "./storage/blocks/January2022/iVeEoHTHKk4y6Hjrtt9k.jpg",
                                "./storage/blocks/January2022/b4eMfwyQJHPH90IQ1iG1.jpg",
                                "./storage/blocks/January2022/GUoG1JkdR95BOLYYEnxU.jpg",
                                "./storage/blocks/January2022/YG20yDDo7Th8R8MZsamI.jpg",
                                "./storage/blocks/January2022/wjPIHZfKrr218ozgYkTj.jpg",
                                "./storage/blocks/January2022/pxmOh7xeZDQliq8m2Fin.jpg",
                                "./storage/blocks/January2022/jLynddYKZrcrnCVRfD34.jpg",
                                "./storage/blocks/January2022/cF6MuGqCcySjI9pyTLqo.jpg",
                                "./storage/blocks/January2022/Bk0NTlYdn8hsIo9eU9AB.jpg",
                                "./storage/blocks/January2022/GECJMYuDei71INXOiaCw.jpg",
                                "./storage/blocks/January2022/UUpp4e8qhWNj724iDAux.jpg",
                                "./storage/blocks/January2022/5Of8KCoJFantTC1d1ZJZ.jpg",
                                "./storage/blocks/January2022/C9mBKADLbBDAqAj2K3JF.jpg",
                                "./storage/blocks/January2022/ADDgARhKuJwR8VBbZ5Y9.jpg",
                                "./storage/blocks/January2022/clF5qCtqlVfWjPJTka2j.jpg",
                                "./storage/blocks/January2022/gEgNFKKADKpRJu0vBoIW.jpg",
                                "./storage/blocks/January2022/QkUyJArUVGBb8uMmvErF.jpg",
                                "./storage/blocks/January2022/97hgBfvw4dExG1yMDpOZ.jpg",
                                "./storage/blocks/January2022/o3xSbLRexQfsAgmYgXX7.jpg",
                                "./storage/blocks/January2022/6WcUHhkwipmABLaCdZAS.jpg",
                                "./storage/blocks/January2022/dYXYi040jqDBTCkuOjrm.jpg",
                                "./storage/blocks/January2022/lZWz1gPHUa0qGT29tnKa.jpg",
                                "./storage/blocks/January2022/KxdmfdAm37AaKt5gRjZX.jpg",
                                "./storage/blocks/January2022/Xt3HI1B9PprUdD9aBOrX.jpg",
                                "./storage/blocks/January2022/tzRClfFfnw87V2INusIL.jpg",
                                "./storage/blocks/January2022/cIdZqc80rfYemNwNTjDb.jpg",
                                "./storage/blocks/January2022/nF9lMKdwVpy3z6MwSIVt.jpg",
                                "./storage/blocks/January2022/b3pemgSbV3Q1A9J8lhgE.jpg",
                                "./storage/blocks/January2022/gMMiVmBWHEdvfSSFaveQ.jpg",
                                "./storage/blocks/January2022/idEA3T3kimsRrnnxx3SQ.jpg",
                                "./storage/blocks/January2022/b1yuv0UXIIy26aYtIfJh.jpg",
                                "./storage/blocks/January2022/mKDFR1LEJXFtafg3uAzq.jpg",
                                "./storage/blocks/January2022/JMJcbaBxf5nVb17abmEz.jpg",
                                "./storage/blocks/January2022/ltjhrth91ctoEpkWgaxM.jpg",
                                "./storage/blocks/January2022/dG8tpB15YGNohT6gLvYp.jpg",
                                "./storage/blocks/January2022/ij7mc50P8ZbLQBe0qhvK.jpg",
                                "./storage/blocks/January2022/Lfcm5syhZIWyCyK15JVE.jpg",
                                "./storage/blocks/January2022/Qt2VLGrCQGpuWnSNRRCz.jpg",
                                "./storage/blocks/January2022/NejUJ9lBJQ8cyXNVotxl.jpg",
                                "./storage/blocks/January2022/5TvFXCXsNltBtavBIPh7.jpg",
                                "./storage/blocks/January2022/LuTilWOMmQLlGTBqYdNg.jpg",
                                "./storage/blocks/January2022/BVnTdmHx0Xqh2qepQvXT.jpg",
                                "./storage/blocks/January2022/ssUL6IzhUXczG4bkDnPD.jpg",
                                "./storage/blocks/January2022/GsE6tlyMI8Bv7lykUIUq.jpg",
                                "./storage/blocks/January2022/x4d6uVM894okTxU9H3RY.jpg",
                                "./storage/blocks/January2022/zXZy4KDixRruAjbrLrO0.jpg",
                                "./storage/blocks/January2022/h7MmYvPYMStLMmt1d5lw.jpg",
                                "./storage/blocks/January2022/4d478lMmDfdwqCO7SRIf.jpg",
                                "./storage/blocks/January2022/F1Sj5E5jju1fxfC6EBqY.jpg",
                                "./storage/blocks/January2022/AmfSjxD9UIDgp5lvrP4B.jpg",
                                "./storage/blocks/January2022/IWFX59xZA07h04GAnOie.jpg",
                                "./storage/blocks/January2022/P4QyPiNmEFjZMikzjFfQ.jpg",
                                "./storage/blocks/January2022/yv9YDCf7TF2qdKCHrrKd.jpg",
                                "./storage/blocks/January2022/d5NV5ufwt1ElPwT80vlA.jpg",
                                "./storage/blocks/January2022/2i0xwwTMcQ6D2m9ssVSO.jpg",
                                "./storage/blocks/January2022/cA1ko1NpZ7PbPaO1bI7h.jpg"
                            ],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": "Выборгская операция",
                            "wiki_photo": "",
                            "wiki_text": "<p>Выборгская операция 1944 года проведена 10 &ndash;&nbsp;20 июня правым крылом Ленинградского фронта при взаимодействии с Балтийским фронтом и Ладожской военной флотилией с целью освобождения Карело-Финской ССР и северной части Ленинградской области. В ходе операции советские войска прорвали оборону противника, продвинулись на глубину 110 &ndash; 130 км и 20 июня овладели городом Выборг. Создались благоприятные условия для проведения Свирско-Петрозаводской операции.</p>\r\n<p>Выборгская операция &ndash; пример последовательного прорыва укреплённой многополосной обороны в условиях лесисто-болотистой местности. Особенности операции: предварительное разрушение долговременных сооружений противника в главной полосе обороны огнём артиллерии и ударами авиации, широкое применение штурмовых отрядов и групп.</p>\r\n<div id=\"urban_overlay\" style=\"left: -10px; top: -10px; width: 0px; height: 0px;\"></div>",
                            "wiki_sign": null
                        }
                    ]
                },
                {
                    "id": 25,
                    "title": "ВЫВОД ФИНЛЯНДИИ ИЗ ВОЙНЫ",
                    "since": "1944",
                    "until": "1944",
                    "years": "1944",
                    "description": null,
                    "bg": "",
                    "blocks": [
                        {
                            "id": 780,
                            "type": 1,
                            "sort": 10,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 2,
                            "bg2": "",
                            "bg_margin": 2,
                            "bg2_margin": 5,
                            "parallax": 200,
                            "parallax2": 500,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ВЫВОД ФИНЛЯНДИИ ИЗ ВОЙНЫ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Войска Ленинградского фронта вынудили врага перебросить на Карельский перешеек значительные силы из Южной Карелии. Это изменило соотношение сил в пользу войск Карельского фронта и создало благоприятные предпосылки для успеха их удара.&nbsp;</p>\r\n<div id=\"urban_overlay\" style=\"left: -10px; top: -10px; width: 0px; height: 0px;\"></div>\r\n<div id=\"urban_overlay\"></div>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "",
                            "width": 157.48031496062993,
                            "height": 100,
                            "bg": "./storage/blocks/December2022/J3DEyUZGzeXaXx6c5dP6.png",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 779,
                            "type": 4,
                            "sort": 20,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": null,
                            "title2": null,
                            "title3": null,
                            "text": null,
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "",
                            "width": 150,
                            "height": 100,
                            "bg": "./storage/blocks/November2021/kwudKWyoNBESFqRgIQSW.jpg",
                            "images": [],
                            "photos": [],
                            "dots": [
                                {
                                    "sort": null,
                                    "title": "Подготовка к операции",
                                    "top": 30,
                                    "left": 30,
                                    "width": 159.7444089456869,
                                    "description": "<p>Говоровым был проведён крупный отвлекающий манёвр с демонстрацией готовящегося удара в районе Нарвы.</p>",
                                    "photo": "./storage/map-dots/December2022/Z01dIpd8129KxPrXzngA.jpg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                },
                                {
                                    "sort": null,
                                    "title": "Прорыв «Линии Маннергейма»",
                                    "top": 40,
                                    "left": 40,
                                    "width": 145.4500737825873,
                                    "description": "<p>За десять дней боёв войска Ленинградского фронта под командованием Говорова прорвали три полосы обороны &laquo;линии Маннергейма&raquo;.</p>\r\n<p>Войска Ленинградского фронта получили приказ ставки ВГК овладеть Выборгом.</p>",
                                    "photo": "./storage/map-dots/December2022/EGAUUKXgM7Vk3KwGBKNN.jpg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                },
                                {
                                    "sort": null,
                                    "title": "Подготовка к операции",
                                    "top": 73,
                                    "left": 28,
                                    "width": 150.82956259426848,
                                    "description": "<p>Одновременно с отвлекающим манёвром Говорова, Балтийский флот осуществил скрытную переброску частей 21-й армии на Карельский перешеек.</p>\r\n<p>Финны были застигнуты врасплох.</p>",
                                    "photo": "./storage/map-dots/December2022/6itlQS6BDHcMTYvlGGLM.jpg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                },
                                {
                                    "sort": null,
                                    "title": "Награждение",
                                    "top": 88,
                                    "left": 68,
                                    "width": 69.7,
                                    "description": "<p>18 июня 1944 года за достигнутые успехи Л. А. Говорову присвоено звание &laquo;Маршал Советского Союза&raquo;.</p>\r\n<p>27 июля он был награжден орденом Кутузова I степени.</p>",
                                    "photo": "./storage/map-dots/December2022/8HKQ5dNMGCWEHuZlE8iC.jpg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                },
                                {
                                    "sort": null,
                                    "title": "Карельский перешеек",
                                    "top": 30,
                                    "left": 70,
                                    "width": 138.16925734024178,
                                    "description": "<p>Войска Ленинградского фронта вынудили врага перебросить на Карельский перешеек значительные силы из Южной Карелии.</p>\r\n<p>Это изменило соотношение сил в пользу войск Карельского фронта и создало благоприятные предпосылки для успеха их удара.</p>",
                                    "photo": "./storage/map-dots/December2022/rz83RJoQzeUuN2qcd0Eb.jpeg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                },
                                {
                                    "sort": null,
                                    "title": "Капитуляция Финляндии",
                                    "top": 90,
                                    "left": 65,
                                    "width": 163.9344262295082,
                                    "description": "<p>4 сентября правительство Финляндии достигло договорённости с Советским правительством о прекращении военных действий.</p>\r\n<p>19 сентября 1944 года соглашение подписал А. А. Жданов.</p>",
                                    "photo": "./storage/map-dots/December2022/gfea6AsNvz5r42fwLDGN.jpg",
                                    "media": "",
                                    "music": "",
                                    "sign": null
                                }
                            ],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        },
                        {
                            "id": 796,
                            "type": 1,
                            "sort": 30,
                            "bg_duration_in": null,
                            "bg_duration_out": null,
                            "bg_delay_in": null,
                            "bg_delay_out": null,
                            "bg_effect_in": null,
                            "bg_effect_out": null,
                            "bg_type": 0,
                            "bg2": "",
                            "bg_margin": 0,
                            "bg2_margin": 0,
                            "parallax": 0,
                            "parallax2": 0,
                            "duration_in": null,
                            "duration_out": null,
                            "delay_in": null,
                            "delay_out": null,
                            "effect": null,
                            "effect_out": null,
                            "title": "ВЫВОД ФИНЛЯНДИИ ИЗ ВОЙНЫ",
                            "title2": null,
                            "title3": null,
                            "text": "<p>Финляндия вышла из войны с СССР с заключением Договора о перемирии, подписанного 19 сентября 1944 года в Москве.</p>\r\n<p>После этого Финляндия, неудовлетворенная темпами вывода немецких войск со своей территории, начала военные действия против Германии.</p>",
                            "sign": null,
                            "since": "1944",
                            "until": "1944",
                            "video": "",
                            "width": 145.77751892836343,
                            "height": 100,
                            "bg": "./storage/blocks/December2022/u2AnnorSv2OM936dfkCV.jpg",
                            "images": [],
                            "photos": [],
                            "dots": [],
                            "doc_title": null,
                            "doc_photo": "",
                            "doc_text": null,
                            "doc_sign": null,
                            "wiki_title": null,
                            "wiki_photo": "",
                            "wiki_text": null,
                            "wiki_sign": null
                        }
                    ]
                }
            ]
        }
    },
    "chapter": {
        "data": {
            "id": 27,
            "title": "ВСТУПЛЕНИЕ В ПАРТИЮ",
            "since": "1942",
            "until": "1942",
            "years": "1942",
            "description": null,
            "bg": "",
            "blocks": [
                {
                    "id": 756,
                    "type": 1,
                    "sort": 10,
                    "bg_duration_in": null,
                    "bg_duration_out": null,
                    "bg_delay_in": null,
                    "bg_delay_out": null,
                    "bg_effect_in": null,
                    "bg_effect_out": null,
                    "bg_type": 2,
                    "bg2": "",
                    "bg_margin": 3,
                    "bg2_margin": 0,
                    "parallax": 300,
                    "parallax2": 0,
                    "duration_in": null,
                    "duration_out": null,
                    "delay_in": null,
                    "delay_out": null,
                    "effect": null,
                    "effect_out": null,
                    "title": "ВСТУПЛЕНИЕ В ПАРТИЮ",
                    "title2": null,
                    "title3": null,
                    "text": "<p>Занимая ответственные должности, Говоров не состоял в рядах партии, что для того времени было не характерно. С учётом его боевых заслуг, в июле 1942 года без прохождения кандидатского стажа Говоров был принят в члены ВКП(б).</p>",
                    "sign": null,
                    "since": "1942",
                    "until": "1942",
                    "video": "",
                    "width": 156.22317596566523,
                    "height": 100,
                    "bg": "./storage/blocks/November2021/2YrXEvPFMgcRGHCNFC7n.jpg",
                    "images": [],
                    "photos": [],
                    "dots": [],
                    "doc_title": "Из письма Л. А. Говорова жене Лидии Ивановне",
                    "doc_photo": "",
                    "doc_text": "<p>&laquo;Это очень значительное событие в моей жизни &ndash; ты знаешь, какое значение я придавал званию члена партии. Настроение у меня боевое, впереди большое сражение, нужно много сил, но мы все-таки победим. На мне ответственность за Ленинград, и я не отдам его врагу&raquo;.</p>",
                    "doc_sign": "Июнь, 1942 год.",
                    "wiki_title": "ВКП(б)",
                    "wiki_photo": "",
                    "wiki_text": "<p>ВКП(б), или Всесоюзная коммунистическая партия (большевиков) &ndash; официальное название КПСС (Коммунистической партии Советского Союза) с 1925 по 1952 годы.</p>",
                    "wiki_sign": null
                }
            ]
        }
    }
}