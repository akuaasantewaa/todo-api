export const permission = [
    {
        role: 'user',
        actions: [
            'get_dashboard',
            'update_dashboard',
            'add_ads',
            'update_ad',
            'get_ad'
        ]
    },
    {
        role: 'admin',
        actions: [
            'get_dashboard',
            'update_dashboard',
            'add_ad',
            'update_ad',
            'get_ad',
            'get_ads',
            'delete_ad'
        ]
    }
]