export default [
  {
    title: '2.3.1 - Common Kestrel',
    publish: '10 March, 2020',
    logs: {
      Fix: ['Main Navigation collapse issue when navigating between pages from mobile devices'],
      Migration: {
        Replace: [
          '<code>NavbarVerticalMenu.js</code>',
          '<code>CodeHighlight.js</code>',
          '<code>src/components/changelog/**/*.*</code>'
        ]
      }
    }
  },
  {
    title: '2.3.0 - Lesser Kestrel',
    publish: '27 February, 2020',
    logs: {
      New: ['<strong>Feature</strong>: Navbar vertical collapsed'],
      Update: ['<strong>Doc</strong>: Lottie', '<strong>Doc</strong>: Dropzone'],
      Migration: {
        Replace: [
          '<code>package.json</code>',
          '<code>public/index.html</code>',
          '<code>public/css/**/*.*</code>',
          '<code>src/assets/scss/**/*.*</code>',
          '<code>src/Main.js</code>',
          '<code>src/helpers/toggleStylesheet.js</code>',
          '<code>src/components/dashboard/LeafletMap.js</code>',
          '<code>src/components/navbar/NavbarTop.js</code>',
          '<code>src/components/navbar/NavbarVertical.js</code>',
          '<code>src/components/navbar/NavbarVerticalMenu.js</code>',
          '<code>src/components/navbar/NavbarVerticalMenuItem.js</code>',
          '<code>src/components/changelog/**/*.*</code>'
        ],
        Add: [
          '<code>src/components/navbar/ToggleButton.js</code>',
          '<code>src/components/common/CodeHighlight.js</code>'
        ]
      }
    }
  },
  {
    title: '2.2.0 - Laggar',
    publish: '10 February, 2020',
    logs: {
      New: [
        '<strong>Plugin</strong>: <code>React leaflet map</code>',
        '<strong>Plugin</strong>: <code>leaflet-markercluster</code>',
        '<strong>Plugin</strong>: <code>leaflet.tilelayer.colorfilter</code>',
        '<strong>Plugin</strong>: <code>react-scrollbars-custom</code>',
        '<strong>Component</strong>: Custom Scrollbar',
        '<strong>Doc</strong>: React Hook Form',
        '<strong>Doc</strong>: Custom Scroll Bar',
        '<strong>Doc</strong>: Leaflet Map',
        '<strong>Doc</strong>: Echart Map'
      ],
      Update: [
        '<strong>Component</strong>: Disable Button',
        '<strong>Component</strong>: Purchases Table',
        '<strong>Component</strong>: Leaflet Map (Dashboard alt)',
        '<strong>Page</strong>: products List',
        '<strong>Doc</strong>: Echart'
      ]
    }
  },
  {
    title: '2.1.0 - Saker',
    publish: '20 January, 2020',
    logs: {
      New: [
        '<strong>Page</strong>: Authentication step wizard',
        '<strong>Plugin</strong>: <code>react-hook-form</code>'
      ]
    }
  },
  {
    title: '2.0.0 - Lanner',
    publish: '01 January, 2020',
    logs: {
      New: [
        '<strong>Component</strong>: Running Projects (Dashboard alt)',
        '<strong>Component</strong>: Total Sales (Dashboard alt)',
        '<strong>Mode</strong>: Dark',
        '<strong>Doc</strong>: Plyr',
        '<strong>Doc</strong>: Slick Carousel'
      ],
      Update: ['<strong>Doc</strong>: Echart']
    }
  },
  {
    title: '1.3.0 - Aplomado',
    publish: '18 December, 2019',
    logs: {
      New: ['<strong>Page</strong>: Feed', '<strong>Plugin</strong>: Plyr']
    }
  },
  {
    title: '1.2.0 - Kestrels',
    publish: '11 December, 2019',
    logs: {
      New: [
        '<strong>Page</strong>: Product List',
        '<strong>Page</strong>: Product Grid',
        '<strong>Page</strong>: Product Details',
        '<strong>Page</strong>: Orders',
        '<strong>Page</strong>: Order Details',
        '<strong>Page</strong>: Customers',
        '<strong>Page</strong>: Shopping Cart',
        '<strong>Page</strong>: Checkout',
        '<strong>Page</strong>: Favorite Items',
        'Counter on cart icon'
      ],
      Update: [
        '<strong>CSS</strong>: Bootstrap to <code>v4.4.1</code>',
        '<strong>Js</strong>: <code>utils.js</code>',
        'Top nav badge icons'
      ]
    }
  },
  {
    title: '1.1.0 - Gyrfalcon',
    publish: '04 November, 2019',
    logs: {
      New: [
        '<strong>Page</strong>: Dashboard Alt',
        '<strong>Page</strong>: Inbox',
        '<strong>Page</strong>: Email detail',
        '<strong>Page</strong>: Compose',
        '<strong>Plugin</strong>: Bulk select',
        '<strong>Plugin</strong>: WYSIWYG Editor',
        '<strong>Plugin</strong>: Progressbar'
      ],
      Fix: ['Redirect to 404'],
      Update: [
        'Add autoprefixer configuration in <code>package.json</code>',
        'Update autoprefixer configuration in <code>gulpfile.js</code>',
        '<strong>Js</strong>: <code>utils.js</code>'
      ]
    }
  },
  {
    title: '1.0.0 - initial release',
    publish: '30 September, 2019',
    children: 'Nothing to see here.'
  }
];
