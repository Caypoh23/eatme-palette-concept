const GLYPHS = {"users": "<svg aria-hidden=\"true\" data-navigation-icon=\"users\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><circle cx=\"8.5\" cy=\"8\" fill=\"none\" r=\"3.5\" stroke=\"black\" stroke-width=\"3\"></circle><path d=\"M2 19.75a6.5 6.5 0 0 1 13 0v.25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-.25Z\" fill=\"none\" stroke=\"black\" stroke-width=\"3\"></path></g></mask><g mask=\"url(#__ID__)\"><circle cx=\"16.5\" cy=\"7.5\" r=\"3\"></circle><path d=\"M11.5 19.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-.5Z\"></path></g><circle cx=\"8.5\" cy=\"8\" r=\"3.5\"></circle><path d=\"M2 19.75a6.5 6.5 0 0 1 13 0v.25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-.25Z\"></path></svg>", "user-plus": "<svg aria-hidden=\"true\" data-navigation-icon=\"user-plus\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><circle cx=\"9\" cy=\"8\" r=\"3.5\"></circle><path d=\"M2.5 19.75a6.5 6.5 0 0 1 13 0v.25a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-.25Z\"></path><path d=\"M19.5 8.25v6M16.5 11.25h6\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.25\"></path></svg>", "user-x": "<svg aria-hidden=\"true\" data-navigation-icon=\"user-x\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><circle cx=\"9\" cy=\"8\" r=\"3.5\"></circle><path d=\"M2.5 19.75a6.5 6.5 0 0 1 13 0v.25a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-.25Z\"></path><path d=\"m17 8.75 4.5 4.5M21.5 8.75l-4.5 4.5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.25\"></path></svg>", "home": "<svg aria-hidden=\"true\" data-navigation-icon=\"home\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><rect height=\"8\" rx=\"1.2\" width=\"4\" x=\"10\" y=\"15.5\"></rect></g></mask><g mask=\"url(#__ID__)\"><path d=\"M11 3.2a1.5 1.5 0 0 1 2 0l8.1 7.1c.5.45.2 1.3-.5 1.3h-1.1v7.9a2.5 2.5 0 0 1-2.5 2.5H7a2.5 2.5 0 0 1-2.5-2.5v-7.9H3.4c-.7 0-1-.85-.5-1.3L11 3.2Z\"></path></g></svg>", "building": "<svg aria-hidden=\"true\" data-navigation-icon=\"building\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><path d=\"M15.25 7.5v15\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></path><path d=\"M7 7h4M7 10.5h4M7 14h4\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.75\"></path><rect height=\"5\" rx=\"0.75\" width=\"2.5\" x=\"7.75\" y=\"17.5\"></rect></g></mask><g mask=\"url(#__ID__)\"><rect height=\"19\" rx=\"2\" width=\"11\" x=\"3.5\" y=\"2.5\"></rect><rect height=\"13\" rx=\"2\" width=\"8\" x=\"12.5\" y=\"8.5\"></rect></g></svg>", "store": "<svg aria-hidden=\"true\" data-navigation-icon=\"store\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><rect height=\"7\" rx=\"1\" width=\"4\" x=\"10\" y=\"15.5\"></rect></g></mask><g mask=\"url(#__ID__)\"><path d=\"M5.4 3h13.2c.6 0 1.1.35 1.35.9L21.5 9a2.4 2.4 0 0 1-4.75 0 2.4 2.4 0 0 1-4.75 0 2.4 2.4 0 0 1-4.75 0A2.4 2.4 0 0 1 2.5 9l1.55-5.1c.2-.55.75-.9 1.35-.9Z\"></path><path d=\"M4.5 12.75h15v6.75a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-6.75Z\"></path></g></svg>", "gear": "<svg aria-hidden=\"true\" data-navigation-icon=\"gear\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><circle cx=\"12\" cy=\"12\" r=\"3.25\"></circle></g></mask><g mask=\"url(#__ID__)\"><path d=\"M19.03 10.25L21.63 10.47A9.75 9.75 0 0 1 21.63 13.53L19.03 13.75A7.25 7.25 0 0 1 18.21 15.73L19.89 17.73A9.75 9.75 0 0 1 17.73 19.89L15.73 18.21A7.25 7.25 0 0 1 13.75 19.03L13.53 21.63A9.75 9.75 0 0 1 10.47 21.63L10.25 19.03A7.25 7.25 0 0 1 8.27 18.21L6.27 19.89A9.75 9.75 0 0 1 4.11 17.73L5.79 15.73A7.25 7.25 0 0 1 4.97 13.75L2.37 13.53A9.75 9.75 0 0 1 2.37 10.47L4.97 10.25A7.25 7.25 0 0 1 5.79 8.27L4.11 6.27A9.75 9.75 0 0 1 6.27 4.11L8.27 5.79A7.25 7.25 0 0 1 10.25 4.97L10.47 2.37A9.75 9.75 0 0 1 13.53 2.37L13.75 4.97A7.25 7.25 0 0 1 15.73 5.79L17.73 4.11A9.75 9.75 0 0 1 19.89 6.27L18.21 8.27A7.25 7.25 0 0 1 19.03 10.25Z\" stroke=\"currentColor\" stroke-linejoin=\"round\"></path></g></svg>", "id-badge": "<svg aria-hidden=\"true\" data-navigation-icon=\"id-badge\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><circle cx=\"8.25\" cy=\"10.25\" r=\"2.25\"></circle><path d=\"M4.75 16.5a3.5 3.5 0 0 1 7 0v.25h-7Z\"></path><path d=\"M14.25 10h4.25M14.25 14h3\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.75\"></path></g></mask><g mask=\"url(#__ID__)\"><rect height=\"15\" rx=\"2.5\" width=\"20\" x=\"2\" y=\"4.5\"></rect></g></svg>", "phone": "<svg aria-hidden=\"true\" data-navigation-icon=\"phone\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M5.5 3h2.6a1 1 0 0 1 .94.66l1.36 3.67a1 1 0 0 1-.3 1.12L8.3 10.02a11.5 11.5 0 0 0 5.68 5.68l1.57-1.8a1 1 0 0 1 1.12-.3l3.67 1.36a1 1 0 0 1 .66.94v2.6A2.5 2.5 0 0 1 18.5 21 15.5 15.5 0 0 1 3 5.5 2.5 2.5 0 0 1 5.5 3Z\"></path></svg>", "chef-hat": "<svg aria-hidden=\"true\" data-navigation-icon=\"chef-hat\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><circle cx=\"7.25\" cy=\"11\" r=\"3.75\"></circle><circle cx=\"12\" cy=\"8.25\" r=\"4.75\"></circle><circle cx=\"16.75\" cy=\"11\" r=\"3.75\"></circle><rect height=\"6.5\" width=\"10\" x=\"7\" y=\"10\"></rect><rect height=\"3.75\" rx=\"1.25\" width=\"10\" x=\"7\" y=\"17.75\"></rect></svg>", "cooking-pot": "<svg aria-hidden=\"true\" data-navigation-icon=\"cooking-pot\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M4 10.75A8 4.25 0 0 1 20 10.75Z\"></path><rect height=\"3.5\" rx=\"1\" width=\"3.5\" x=\"10.25\" y=\"3.75\"></rect><rect height=\"8.75\" rx=\"3\" width=\"16\" x=\"4\" y=\"12.25\"></rect><rect height=\"2.25\" rx=\"1.1\" width=\"3.5\" x=\"1.25\" y=\"13.5\"></rect><rect height=\"2.25\" rx=\"1.1\" width=\"3.5\" x=\"19.25\" y=\"13.5\"></rect></svg>", "package": "<svg aria-hidden=\"true\" data-navigation-icon=\"package\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><path d=\"M3 7.25 12 12l9-4.75M12 12v10\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></path><path d=\"m7.5 4.9 9 4.75\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></path></g></mask><g mask=\"url(#__ID__)\"><path d=\"M12 2.5 21 7.25v9.5L12 21.5l-9-4.75v-9.5L12 2.5Z\" stroke=\"currentColor\" stroke-linejoin=\"round\"></path></g></svg>", "utensils": "<svg aria-hidden=\"true\" data-navigation-icon=\"utensils\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M4.5 2.75a.75.75 0 0 1 1.5 0V7h1.25V2.75a.75.75 0 0 1 1.5 0V7H10V2.75a.75.75 0 0 1 1.5 0V8A3.5 3.5 0 0 1 9 11.35v9.15a1 1 0 0 1-2 0v-9.15A3.5 3.5 0 0 1 4.5 8V2.75Z\"></path><path d=\"M19.25 2.6c-2.9.75-4.75 3.6-4.75 7.65v3.25a1 1 0 0 0 1 1H18v5.95a1 1 0 0 0 2 0V3.35a.75.75 0 0 0-.75-.75Z\"></path></svg>", "bowl": "<svg aria-hidden=\"true\" data-navigation-icon=\"bowl\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M2.75 11.25h18.5a1 1 0 0 1 1 1.05C21.9 17.3 17.4 20.5 12 20.5S2.1 17.3 1.75 12.3a1 1 0 0 1 1-1.05Z\"></path><path d=\"M9 2.75c-.75.85-.75 1.65 0 2.5s.75 1.65 0 2.5M15 2.75c-.75.85-.75 1.65 0 2.5s.75 1.65 0 2.5\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"></path></svg>", "apple": "<svg aria-hidden=\"true\" data-navigation-icon=\"apple\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M12 7.75c-1.6-1.35-3.85-1.75-5.55-.8C4.4 8.1 3.6 10.9 4.2 13.85 4.9 17.3 7.3 21 9.55 21c.9 0 1.5-.5 2.45-.5s1.55.5 2.45.5c2.25 0 4.65-3.7 5.35-7.15.6-2.95-.2-5.75-2.25-6.9-1.7-.95-3.95-.55-5.55.8Z\"></path><path d=\"M12.6 6.4c-.1-2.3 1.4-4.05 3.9-4.4.1 2.3-1.4 4.05-3.9 4.4Z\"></path></svg>", "truck": "<svg aria-hidden=\"true\" data-navigation-icon=\"truck\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><path d=\"M16.75 9.75h1.75l1.7 2.25h-3.45Z\"></path><circle cx=\"6.25\" cy=\"17.5\" r=\"3.75\"></circle><circle cx=\"17.75\" cy=\"17.5\" r=\"3.75\"></circle></g></mask><g mask=\"url(#__ID__)\"><rect height=\"12\" rx=\"1.75\" width=\"12.75\" x=\"1.75\" y=\"4.5\"></rect><path d=\"M15.5 8.25h3.1a1.5 1.5 0 0 1 1.2.6l1.9 2.55a1.5 1.5 0 0 1 .3.9v3.2a1 1 0 0 1-1 1h-5.5Z\"></path></g><path clip-rule=\"evenodd\" d=\"M6.25 14.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Zm0 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z\" fill-rule=\"evenodd\"></path><path clip-rule=\"evenodd\" d=\"M17.75 14.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Zm0 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z\" fill-rule=\"evenodd\"></path></svg>", "route": "<svg aria-hidden=\"true\" data-navigation-icon=\"route\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><circle cx=\"18.25\" cy=\"5.75\" r=\"1.1\"></circle></g></mask><g mask=\"url(#__ID__)\"><circle cx=\"5.75\" cy=\"18.25\" r=\"3\"></circle><circle cx=\"18.25\" cy=\"5.75\" r=\"3\"></circle><path d=\"M8.75 18.25H16a3.1 3.1 0 0 0 0-6.2H8a3.1 3.1 0 0 1 0-6.2h7.25\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.25\"></path></g></svg>", "scooter": "<svg aria-hidden=\"true\" data-navigation-icon=\"scooter\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><circle cx=\"6\" cy=\"17.75\" r=\"3.75\"></circle><circle cx=\"18.25\" cy=\"17.75\" r=\"3.75\"></circle></g></mask><g mask=\"url(#__ID__)\"><rect height=\"5.25\" rx=\"1.25\" width=\"7.5\" x=\"2.75\" y=\"4.25\"></rect><path d=\"M3 16.25V13.5A2.5 2.5 0 0 1 5.5 11h7.25a1 1 0 0 1 .97 1.24l-.97 4.01Z\"></path><path d=\"M12.5 16.25h3.4l1.7-9M15.5 6.25h3.25M17.6 7.25l.8 10.25\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.25\"></path></g><path clip-rule=\"evenodd\" d=\"M6 15a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Zm0 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z\" fill-rule=\"evenodd\"></path><path clip-rule=\"evenodd\" d=\"M18.25 15a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Zm0 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z\" fill-rule=\"evenodd\"></path></svg>", "map": "<svg aria-hidden=\"true\" data-navigation-icon=\"map\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><path d=\"M8.5 1.5v17M15.5 5.5v17\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></path></g></mask><g mask=\"url(#__ID__)\"><path d=\"M2.5 6.4a1 1 0 0 1 .55-.9L8.5 2.75l7 3.5 4.95-2.5a.75.75 0 0 1 1.05.67V17.6a1 1 0 0 1-.55.9L15.5 21.25l-7-3.5-4.95 2.5a.75.75 0 0 1-1.05-.67V6.4Z\"></path></g></svg>", "calendar": "<svg aria-hidden=\"true\" data-navigation-icon=\"calendar\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><path d=\"M2 9.5h20\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></path><circle cx=\"8\" cy=\"13.25\" r=\"1.25\"></circle><circle cx=\"12\" cy=\"13.25\" r=\"1.25\"></circle><circle cx=\"16\" cy=\"13.25\" r=\"1.25\"></circle><circle cx=\"8\" cy=\"17.25\" r=\"1.25\"></circle><circle cx=\"12\" cy=\"17.25\" r=\"1.25\"></circle></g></mask><g mask=\"url(#__ID__)\"><rect height=\"17\" rx=\"2.75\" width=\"18\" x=\"3\" y=\"4.25\"></rect><rect height=\"4.5\" rx=\"1.1\" width=\"2.25\" x=\"6.75\" y=\"2\"></rect><rect height=\"4.5\" rx=\"1.1\" width=\"2.25\" x=\"15\" y=\"2\"></rect></g></svg>", "chart": "<svg aria-hidden=\"true\" data-navigation-icon=\"chart\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><rect height=\"9\" rx=\"1.25\" width=\"4.5\" x=\"3\" y=\"12\"></rect><rect height=\"18\" rx=\"1.25\" width=\"4.5\" x=\"9.75\" y=\"3\"></rect><rect height=\"13\" rx=\"1.25\" width=\"4.5\" x=\"16.5\" y=\"8\"></rect></svg>", "circle-x": "<svg aria-hidden=\"true\" data-navigation-icon=\"circle-x\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><path d=\"m8.75 8.75 6.5 6.5M15.25 8.75l-6.5 6.5\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"></path></g></mask><g mask=\"url(#__ID__)\"><circle cx=\"12\" cy=\"12\" r=\"9.5\"></circle></g></svg>", "clock": "<svg aria-hidden=\"true\" data-navigation-icon=\"clock\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><path d=\"M12 7v5l3.25 2\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"></path></g></mask><g mask=\"url(#__ID__)\"><circle cx=\"12\" cy=\"12\" r=\"9.5\"></circle></g></svg>", "history": "<svg aria-hidden=\"true\" data-navigation-icon=\"history\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><path d=\"M12 9.5V12l1.75 1.25\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"></path></g></mask><g mask=\"url(#__ID__)\"><path d=\"M3.75 12A8.25 8.25 0 1 0 6.17 6.17\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.25\"></path><path d=\"M4.23 8.11 8.47 7.41 4.93 3.87Z\" stroke=\"currentColor\" stroke-linejoin=\"round\"></path><circle cx=\"12\" cy=\"12\" r=\"4.5\"></circle></g></svg>", "repeat": "<svg aria-hidden=\"true\" data-navigation-icon=\"repeat\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M4.25 12a7.75 7.75 0 0 1 13.23-5.48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.25\"></path><path d=\"M19.75 12a7.75 7.75 0 0 1-13.23 5.48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.25\"></path><path d=\"M19.5 2.75V8h-5.25l5.25-5.25ZM4.5 21.25V16h5.25L4.5 21.25Z\" stroke=\"currentColor\" stroke-linejoin=\"round\"></path></svg>", "ticket": "<svg aria-hidden=\"true\" data-navigation-icon=\"ticket\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><mask height=\"24\" id=\"__ID__\" maskUnits=\"userSpaceOnUse\" width=\"24\" x=\"0\" y=\"0\"><rect fill=\"white\" height=\"24\" width=\"24\"></rect><g fill=\"black\"><circle cx=\"2.5\" cy=\"12\" r=\"2.5\"></circle><circle cx=\"21.5\" cy=\"12\" r=\"2.5\"></circle><path d=\"m14.5 9.5-5 5\" fill=\"none\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.75\"></path><circle cx=\"9.6\" cy=\"9.6\" r=\"1.3\"></circle><circle cx=\"14.4\" cy=\"14.4\" r=\"1.3\"></circle></g></mask><g mask=\"url(#__ID__)\"><rect height=\"14\" rx=\"2.5\" width=\"19\" x=\"2.5\" y=\"5\"></rect></g></svg>"};
const PALETTE_VALUES = {"current": {"primary": "#00a973", "fill": "#00875c", "hover": "#00774f", "text": "#00774f", "textHover": "#006c48", "subtle": "#d2eee5", "subtleHover": "#c1e8dc", "bright": "#00ab75", "strong": "#006f4c", "button": "#008558", "pressed": "#005437"}, "graphite": {"primary": "#1c1c1e", "fill": "#1c1c1e", "hover": "#000000", "text": "#1c1c1e", "textHover": "#000000", "subtle": "#e9e9ee", "subtleHover": "#dcdce2", "bright": "#1c1c1e", "strong": "#1c1c1e", "button": "#1c1c1e", "pressed": "#000000"}, "blue": {"primary": "#2563eb", "fill": "#2563eb", "hover": "#1d4ed8", "text": "#1d4ed8", "textHover": "#1e40af", "subtle": "#e6eefe", "subtleHover": "#d4e2fd", "bright": "#3b82f6", "strong": "#2563eb", "button": "#2563eb", "pressed": "#1d4ed8"}, "indigo": {"primary": "#4f46e5", "fill": "#4f46e5", "hover": "#4338ca", "text": "#4338ca", "textHover": "#3730a3", "subtle": "#eef0ff", "subtleHover": "#e0e3ff", "bright": "#6366f1", "strong": "#4f46e5", "button": "#4f46e5", "pressed": "#4338ca"}, "warm": {"primary": "#c2410c", "fill": "#c2410c", "hover": "#9a3412", "text": "#9a3412", "textHover": "#7c2d12", "subtle": "#ffedd5", "subtleHover": "#fed7aa", "bright": "#ea580c", "strong": "#c2410c", "button": "#c2410c", "pressed": "#9a3412"}};
/* global GLYPHS, PALETTE_VALUES */
;(() => {
  'use strict'

  const PALETTES = [
    {
      key: 'current',
      name: 'Сейчас',
      note: 'Сейчас: фирменный зелёный — так админка и приложение выглядят сегодня.',
    },
    {
      key: 'graphite',
      name: 'Графит',
      recommended: true,
      note: 'Графит — самый нейтральный: чёрные кнопки и выбранное, серые подложки; цвет остаётся только у статусов. Не спорит с фото еды и с брендом будущих партнёров. Рекомендую к первому запуску.',
    },
    {
      key: 'blue',
      name: 'Синяя',
      note: 'Синяя — «как в системе»: привычный синий iOS и Android на кнопках, ссылках и выбранном.',
    },
    {
      key: 'indigo',
      name: 'Индиго',
      note: 'Индиго — нейтрально, но с характером: спокойный сине-фиолетовый акцент.',
    },
    {
      key: 'warm',
      name: 'Тёплая',
      note: 'Тёплая — «аппетитная»: терракотовый акцент ближе к еде; заметнее, но менее нейтральная.',
    },
  ]

  const ADMIN_SHOTS = [
    ['promocode-drawer', 'Создание промокода'],
    ['kitchen-calendar', 'План приготовления · выбор даты'],
    ['couriers', 'Курьеры'],
    ['promocodes', 'Промокоды'],
  ]

  const MOBILE_SHOTS = [
    ['program', 'Программа · меню дня'],
    ['order', 'Активный заказ'],
    ['delivery-time', 'Время доставки'],
    ['calculator', 'Подбор программы'],
  ]

  // Row label, where it shows, admin value key, mobile value key.
  const TOKEN_ROWS = [
    ['Кнопка', 'заливка главной кнопки', 'fill', 'button'],
    ['Нажатие', 'кнопка под пальцем или курсором', 'hover', 'pressed'],
    ['Ссылки и выбранное', 'текст-ссылка, рамка выбранного', 'text', 'strong'],
    ['Мягкая подложка', '«Добавить», «Применить», фон выбранного', 'subtle', 'subtle'],
    ['Фокус и переключатели', 'рамка поля в фокусе, включённый тумблер', 'fill', 'strong'],
  ]

  const SECTIONS = {
    home: 'Главная',
    building: 'Компании',
    gear: 'Настройки платформы и филиала',
    store: 'Филиалы',
    clock: 'Условия работы',
    'id-badge': 'Работники филиала',
    phone: 'Контактные данные',
    users: 'Клиенты',
    'user-plus': 'Потенциальные',
    repeat: 'Клиенты на продление',
    'user-x': 'Список отказников',
    'circle-x': 'Запросы на отмену',
    ticket: 'Промокоды',
    'cooking-pot': 'План приготовления',
    package: 'План фасовки',
    'chef-hat': 'Кухня',
    utensils: 'Типы приёмов пищи',
    bowl: 'Справочник блюд',
    apple: 'Программы питания',
    calendar: 'Планировщик питания',
    truck: 'Запланированные доставки',
    route: 'Настройка доставки',
    scooter: 'Курьеры',
    map: 'Зоны доставки',
    chart: 'Статистика продаж',
    history: 'История действий',
  }

  let serial = 0
  function glyph(name) {
    serial += 1
    return (GLYPHS[name] ?? '').split('__ID__').join(`g${serial}`)
  }

  function channel(value) {
    const c = value / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }

  function luminance(hex) {
    const n = Number.parseInt(hex.replace('#', ''), 16)
    return (
      0.2126 * channel((n >> 16) & 255) +
      0.7152 * channel((n >> 8) & 255) +
      0.0722 * channel(n & 255)
    )
  }

  function contrastWithWhite(hex) {
    return 1.05 / (luminance(hex) + 0.05)
  }

  let palette = 'graphite'
  let adminShot = ADMIN_SHOTS[0][0]

  function renderSwitch() {
    const host = document.getElementById('palette-switch')
    host.innerHTML = PALETTES.map(
      (p) =>
        `<button type="button" data-palette="${p.key}" aria-pressed="false"><span class="dot" style="background:${PALETTE_VALUES[p.key].fill}"></span>${p.name}${p.recommended ? ' <span class="star" title="Рекомендую">★</span>' : ''}</button>`,
    ).join('')
    host.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-palette]')
      if (button) setPalette(button.dataset.palette)
    })
  }

  function renderAdmin() {
    const main = document.getElementById('admin-main')
    main.src = `img/admin/${palette}-${adminShot}.webp`
    main.alt = ADMIN_SHOTS.find(([key]) => key === adminShot)?.[1] ?? ''
    const thumbs = document.getElementById('admin-thumbs')
    thumbs.innerHTML = ADMIN_SHOTS.map(
      ([key, label]) =>
        `<button type="button" class="thumb" data-shot="${key}" aria-pressed="${String(key === adminShot)}"><img src="img/admin/${palette}-${key}.webp" alt="" loading="lazy" />${label}</button>`,
    ).join('')
  }

  function renderPhones() {
    const host = document.getElementById('phones')
    const scrolls = [...host.querySelectorAll('.phone-screen')].map(
      (screen) => screen.scrollTop,
    )
    host.innerHTML = MOBILE_SHOTS.map(
      ([key, label]) =>
        `<figure class="phone-cell"><div class="phone"><div class="phone-screen" tabindex="0" aria-label="${label}"><img src="img/mobile/${palette}-${key}.webp" alt="${label}" /></div></div><figcaption>${label}</figcaption></figure>`,
    ).join('')
    host.querySelectorAll('.phone-screen').forEach((screen, index) => {
      const top = scrolls[index] ?? 0
      const image = screen.querySelector('img')
      const restore = () => {
        screen.scrollTop = top
      }
      if (image.complete) restore()
      else image.addEventListener('load', restore, { once: true })
    })
  }

  function cell(hex) {
    return `<span class="cell"><i style="background:${hex}"></i>${hex.toUpperCase()}</span>`
  }

  function renderTokens() {
    const head = `<thead><tr><th>Роль</th>${PALETTES.map((p) => `<th class="${p.key === palette ? 'is-current' : ''}">${p.name}</th>`).join('')}</tr></thead>`
    const rows = TOKEN_ROWS.map(([label, where, adminKey, mobileKey]) => {
      const cells = PALETTES.map((p) => {
        const values = PALETTE_VALUES[p.key]
        const admin = values[adminKey]
        const mobile = values[mobileKey]
        const content =
          admin === mobile
            ? cell(admin)
            : `${cell(admin)}<small class="cell-note">админка</small>${cell(mobile)}<small class="cell-note">мобилка</small>`
        return `<td class="${p.key === palette ? 'is-current' : ''}">${content}</td>`
      }).join('')
      return `<tr><th>${label}<small>${where}</small></th>${cells}</tr>`
    }).join('')
    const contrastRow = `<tr><th>Белый текст на кнопке<small>контраст, норма AA — 4,5:1</small></th>${PALETTES.map(
      (p) => {
        const ratio = contrastWithWhite(PALETTE_VALUES[p.key].fill)
        const ok = ratio >= 4.5
        return `<td class="${p.key === palette ? 'is-current' : ''}"><span class="aa ${ok ? 'aa-ok' : 'aa-low'}">${ratio.toFixed(1).replace('.', ',')}:1${ok ? ' ✓' : ''}</span></td>`
      },
    ).join('')}</tr>`
    document.getElementById('token-table').innerHTML =
      `${head}<tbody>${rows}${contrastRow}</tbody>`
  }

  function renderGlyphs() {
    document.getElementById('glyphs').innerHTML = Object.keys(SECTIONS)
      .map(
        (name) =>
          `<div class="glyph">${glyph(name)}<b>${SECTIONS[name]}</b><small>${name}</small></div>`,
      )
      .join('')
  }

  function setPalette(key) {
    palette = key
    for (const button of document.querySelectorAll('#palette-switch button'))
      button.setAttribute('aria-pressed', String(button.dataset.palette === key))
    document.getElementById('palette-note').textContent =
      PALETTES.find((p) => p.key === key)?.note ?? ''
    renderAdmin()
    renderPhones()
    renderTokens()
    history.replaceState(null, '', `#palette=${key}`)
  }

  document.getElementById('admin-thumbs').addEventListener('click', (event) => {
    const thumb = event.target.closest('[data-shot]')
    if (thumb === null) return
    adminShot = thumb.dataset.shot
    renderAdmin()
  })

  renderSwitch()
  renderGlyphs()
  const fromHash = /palette=([a-z]+)/.exec(location.hash)?.[1]
  setPalette(PALETTES.some((p) => p.key === fromHash) ? fromHash : 'graphite')

  // Warm the cache for the other palettes once the page is idle.
  const warm = () => {
    for (const p of PALETTES) {
      for (const [key] of MOBILE_SHOTS) new Image().src = `img/mobile/${p.key}-${key}.webp`
      for (const [key] of ADMIN_SHOTS) new Image().src = `img/admin/${p.key}-${key}.webp`
    }
  }
  if ('requestIdleCallback' in window) requestIdleCallback(warm)
  else setTimeout(warm, 1500)
})()
