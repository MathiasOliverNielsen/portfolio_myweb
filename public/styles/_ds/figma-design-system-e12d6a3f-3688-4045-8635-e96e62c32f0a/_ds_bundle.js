/* @ds-bundle: {"format":3,"namespace":"FigmaDesignSystem_e12d6a","components":[],"sourceHashes":{"ui_kits/figma-app/AppShell.jsx":"11334dfcc5aa","ui_kits/figma-app/Canvas.jsx":"ec3662fdb83f","ui_kits/figma-app/FilesBrowser.jsx":"c69f2074a75c","ui_kits/figma-app/LeftPanel.jsx":"00c667413134","ui_kits/figma-app/RightPanel.jsx":"8142f2b7c6f0","ui_kits/figma-app/Toolbar.jsx":"57b73aafea72"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FigmaDesignSystem_e12d6a = window.FigmaDesignSystem_e12d6a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/figma-app/AppShell.jsx
try { (() => {
// AppShell.jsx — Editor shell
// Exports: AppShell to window

const AppShell = ({
  fileName,
  onBack
}) => {
  const [activeTool, setActiveTool] = React.useState('move');
  const [selectedLayer, setSelectedLayer] = React.useState('f1-2-3');
  const [zoom, setZoom] = React.useState(100);
  return /*#__PURE__*/React.createElement("div", {
    style: appShellStyles.shell
  }, /*#__PURE__*/React.createElement(FigmaToolbar, {
    activeTool: activeTool,
    setActiveTool: setActiveTool,
    fileName: fileName,
    onBack: onBack,
    zoom: zoom,
    setZoom: setZoom
  }), /*#__PURE__*/React.createElement("div", {
    style: appShellStyles.body
  }, /*#__PURE__*/React.createElement(LeftPanel, {
    selectedLayer: selectedLayer,
    setSelectedLayer: setSelectedLayer
  }), /*#__PURE__*/React.createElement(FigmaCanvas, {
    activeTool: activeTool,
    selectedLayer: selectedLayer,
    setSelectedLayer: setSelectedLayer
  }), /*#__PURE__*/React.createElement(RightPanel, {
    selectedLayer: selectedLayer
  })));
};
const appShellStyles = {
  shell: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
    fontFamily: 'Inter, sans-serif',
    background: '#1E1E1E'
  },
  body: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden'
  }
};
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/figma-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/figma-app/Canvas.jsx
try { (() => {
// Canvas.jsx — Design canvas area
// Exports: FigmaCanvas to window

const FigmaCanvas = ({
  activeTool,
  selectedLayer,
  setSelectedLayer
}) => {
  const [pan, setPan] = React.useState({
    x: 0,
    y: 0
  });
  const [dragging, setDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState(null);
  const canvasRef = React.useRef(null);
  const cursor = activeTool === 'hand' ? 'grab' : activeTool === 'text' ? 'text' : activeTool === 'comment' ? 'crosshair' : 'default';
  const handleMouseDown = e => {
    if (activeTool === 'hand') {
      setDragging(true);
      setDragStart({
        x: e.clientX - pan.x,
        y: e.clientY - pan.y
      });
    }
  };
  const handleMouseMove = e => {
    if (dragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };
  const handleMouseUp = () => setDragging(false);
  const s = canvasStyles;
  return /*#__PURE__*/React.createElement("div", {
    ref: canvasRef,
    style: {
      ...s.canvas,
      cursor
    },
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp
  }, /*#__PURE__*/React.createElement("div", {
    style: s.grid
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.content,
      transform: `translate(calc(-50% + ${pan.x}px), calc(-50% + ${pan.y}px))`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: s.frameLabel
  }, "Mobile App \u2014 375 \xD7 812"), /*#__PURE__*/React.createElement("div", {
    style: s.mobileFrame,
    onClick: () => setSelectedLayer('f1')
  }, /*#__PURE__*/React.createElement("div", {
    style: s.mockNav
  }, /*#__PURE__*/React.createElement("div", {
    style: s.mockLogo
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "21",
    viewBox: "0 0 38 57",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 28.5a9.5 9.5 0 100-19H9.5a9.5 9.5 0 000 19H19z",
    fill: "#F24E1E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 28.5a9.5 9.5 0 000 19c5.247 0 9.5-4.253 9.5-9.5V28.5H9.5z",
    fill: "#0ACF83"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28.5",
    cy: "28.5",
    r: "9.5",
    fill: "#FF7262"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 9.5A9.5 9.5 0 0028.5 0H19v19h9.5A9.5 9.5 0 0038 9.5z",
    fill: "#A259FF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 19H9.5a9.5 9.5 0 000 19H19V19z",
    fill: "#1ABCFE"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: -0.3
    }
  }, "figma")), /*#__PURE__*/React.createElement("div", {
    style: s.mockNavRight
  }, /*#__PURE__*/React.createElement("div", {
    style: s.mockAvatar
  }, "J"))), /*#__PURE__*/React.createElement("div", {
    style: s.mockHero
  }, /*#__PURE__*/React.createElement("div", {
    style: s.heroTag
  }, "New in Figma"), /*#__PURE__*/React.createElement("div", {
    style: s.heroTitle
  }, "Design together"), /*#__PURE__*/React.createElement("div", {
    style: s.heroSub
  }, "Bring your team into one collaborative workspace."), /*#__PURE__*/React.createElement("div", {
    style: s.heroCta
  }, "Get started free")), /*#__PURE__*/React.createElement("div", {
    style: s.cardGrid
  }, [{
    label: 'Components',
    color: '#A259FF',
    icon: '⬡'
  }, {
    label: 'Auto layout',
    color: '#1ABCFE',
    icon: '⊞'
  }, {
    label: 'Prototyping',
    color: '#0ACF83',
    icon: '▶'
  }, {
    label: 'Dev Mode',
    color: '#FF7262',
    icon: '</>'
  }].map((card, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...s.featureCard,
      borderTop: `2px solid ${card.color}`
    },
    onClick: e => {
      e.stopPropagation();
      setSelectedLayer('f1-2-' + (i + 1));
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.featureIcon,
      color: card.color
    }
  }, card.icon), /*#__PURE__*/React.createElement("div", {
    style: s.featureLabel
  }, card.label)))), /*#__PURE__*/React.createElement("div", {
    style: s.bottomNav
  }, ['Home', 'Recents', 'Explore', 'Notifications'].map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...s.bottomNavItem,
      ...(i === 0 ? s.bottomNavActive : {})
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ph-${['house', 'clock', 'compass', 'bell'][i]}`,
    style: {
      fontSize: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9
    }
  }, item))))), selectedLayer && /*#__PURE__*/React.createElement("div", {
    style: s.selectionOutline
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '100%',
      marginLeft: 48,
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: s.frameLabel
  }, "Desktop \u2014 1440 \xD7 900"), /*#__PURE__*/React.createElement("div", {
    style: s.desktopFrame
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#333',
      marginBottom: 4
    }
  }, "figma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#1E1E1E',
      marginBottom: 4,
      lineHeight: 1.2
    }
  }, "Nothing great", /*#__PURE__*/React.createElement("br", null), "is made alone"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: '#666',
      marginBottom: 12
    }
  }, "Design, prototype, and collaborate"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1E1E1E',
      color: '#fff',
      borderRadius: 4,
      padding: '5px 12px',
      fontSize: 9,
      fontWeight: 600,
      display: 'inline-block'
    }
  }, "Get started free"))))), /*#__PURE__*/React.createElement("div", {
    style: s.statusBar
  }, /*#__PURE__*/React.createElement("span", {
    style: s.statusText
  }, "Mobile App \u2014 375 \xD7 812"), /*#__PURE__*/React.createElement("span", {
    style: s.statusText
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...s.statusText,
      color: '#B3B3B3'
    }
  }, "Tool: ", activeTool)));
};
const canvasStyles = {
  canvas: {
    flex: 1,
    background: '#1E1E1E',
    position: 'relative',
    overflow: 'hidden'
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(circle, #2C2C2C 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    opacity: 0.6,
    pointerEvents: 'none'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transition: 'transform 0.05s'
  },
  frameLabel: {
    fontSize: 10,
    color: '#666',
    marginBottom: 6,
    fontFamily: 'Inter, sans-serif',
    whiteSpace: 'nowrap'
  },
  mobileFrame: {
    width: 375,
    background: '#FFFFFF',
    borderRadius: 2,
    boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.5)',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    fontFamily: 'Inter, sans-serif'
  },
  mockNav: {
    height: 52,
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    borderBottom: '1px solid #F0F0F0'
  },
  mockLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    color: '#1E1E1E'
  },
  mockNavRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 8
  },
  mockAvatar: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    background: '#A259FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    fontWeight: 700,
    color: '#fff'
  },
  mockHero: {
    background: '#000',
    padding: '32px 20px 28px',
    color: '#fff'
  },
  heroTag: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.7)',
    fontSize: 10,
    fontWeight: 500,
    padding: '3px 10px',
    borderRadius: 999,
    marginBottom: 10
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    marginBottom: 8
  },
  heroSub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.5,
    marginBottom: 20
  },
  heroCta: {
    background: '#fff',
    color: '#000',
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer'
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 1,
    background: '#F0F0F0',
    borderBottom: '1px solid #F0F0F0'
  },
  featureCard: {
    background: '#fff',
    padding: '14px 16px',
    cursor: 'pointer',
    transition: 'background 0.1s'
  },
  featureIcon: {
    fontSize: 16,
    marginBottom: 4
  },
  featureLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: '#1E1E1E'
  },
  bottomNav: {
    display: 'flex',
    borderTop: '1px solid #F0F0F0',
    background: '#fff'
  },
  bottomNavItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 0 10px',
    gap: 2,
    color: '#999',
    cursor: 'pointer'
  },
  bottomNavActive: {
    color: '#1E1E1E'
  },
  desktopFrame: {
    width: 320,
    background: '#F5F5F5',
    borderRadius: 2,
    boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.4)',
    overflow: 'hidden'
  },
  selectionOutline: {
    position: 'absolute',
    inset: -2,
    border: '2px solid #0D99FF',
    borderRadius: 2,
    pointerEvents: 'none'
  },
  statusBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 24,
    background: '#2C2C2C',
    borderTop: '1px solid #3C3C3C',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '0 12px'
  },
  statusText: {
    fontSize: 10,
    color: '#666',
    fontFamily: 'Inter, sans-serif'
  }
};
Object.assign(window, {
  FigmaCanvas
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/figma-app/Canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/figma-app/FilesBrowser.jsx
try { (() => {
// FilesBrowser.jsx — Figma home/files screen
// Exports: FilesBrowser to window

const MOCK_FILES = [{
  id: 1,
  name: 'Mobile App Design',
  team: 'My Team',
  updated: '2 hours ago',
  color: '#1E1E1E',
  accent: '#A259FF'
}, {
  id: 2,
  name: 'Marketing Website',
  team: 'My Team',
  updated: 'Yesterday',
  color: '#000',
  accent: '#0ACF83'
}, {
  id: 3,
  name: 'Design System v2',
  team: 'My Team',
  updated: '3 days ago',
  color: '#0D0D0D',
  accent: '#1ABCFE'
}, {
  id: 4,
  name: 'Icon Library',
  team: 'Drafts',
  updated: 'Last week',
  color: '#1A1A1A',
  accent: '#FF7262'
}, {
  id: 5,
  name: 'Onboarding Flow',
  team: 'Drafts',
  updated: '2 weeks ago',
  color: '#111',
  accent: '#F24E1E'
}, {
  id: 6,
  name: 'Dashboard UI',
  team: 'My Team',
  updated: 'Last month',
  color: '#0A0A0A',
  accent: '#FFD966'
}];
const MOCK_TEAMS = [{
  id: 'recent',
  label: 'Recents',
  icon: 'ph-clock'
}, {
  id: 'drafts',
  label: 'Drafts',
  icon: 'ph-folder'
}, {
  id: 'favs',
  label: 'Favorites',
  icon: 'ph-star'
}, {
  id: 'team',
  label: 'My Team',
  icon: 'ph-users'
}, {
  id: 'comm',
  label: 'Community',
  icon: 'ph-compass'
}];
const FileCard = ({
  file,
  onClick
}) => {
  const [hover, setHover] = React.useState(false);
  const s = filesBrowserStyles;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.card,
      ...(hover ? s.cardHover : {})
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onClick(file)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.thumb,
      background: file.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: s.thumbContent
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.thumbFrame,
      borderTop: `3px solid ${file.accent}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'rgba(255,255,255,0.15)',
      borderRadius: 2,
      marginBottom: 3,
      width: '60%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 2,
      marginBottom: 2,
      width: '80%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 2,
      width: '40%'
    }
  }))), hover && /*#__PURE__*/React.createElement("div", {
    style: s.thumbOverlay
  }, /*#__PURE__*/React.createElement("div", {
    style: s.editBtn
  }, "Edit"))), /*#__PURE__*/React.createElement("div", {
    style: s.meta
  }, /*#__PURE__*/React.createElement("div", {
    style: s.fileName
  }, file.name), /*#__PURE__*/React.createElement("div", {
    style: s.fileSub
  }, file.team, " \xB7 ", file.updated)));
};
const FilesBrowser = ({
  onOpenFile
}) => {
  const [activeSection, setActiveSection] = React.useState('recent');
  const [search, setSearch] = React.useState('');
  const s = filesBrowserStyles;
  const filtered = MOCK_FILES.filter(f => !search || f.name.toLowerCase().includes(search.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: s.root
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sidebar
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sidebarLogo
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "30",
    viewBox: "0 0 38 57",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 28.5a9.5 9.5 0 100-19H9.5a9.5 9.5 0 000 19H19z",
    fill: "#F24E1E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 28.5a9.5 9.5 0 000 19c5.247 0 9.5-4.253 9.5-9.5V28.5H9.5z",
    fill: "#0ACF83"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28.5",
    cy: "28.5",
    r: "9.5",
    fill: "#FF7262"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 9.5A9.5 9.5 0 0028.5 0H19v19h9.5A9.5 9.5 0 0038 9.5z",
    fill: "#A259FF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 19H9.5a9.5 9.5 0 000 19H19V19z",
    fill: "#1ABCFE"
  }))), /*#__PURE__*/React.createElement("nav", {
    style: s.nav
  }, MOCK_TEAMS.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      ...s.navItem,
      ...(activeSection === item.id ? s.navItemActive : {})
    },
    onClick: () => setActiveSection(item.id)
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ${item.icon}`,
    style: {
      fontSize: 15,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, item.label)))), /*#__PURE__*/React.createElement("div", {
    style: s.sidebarUser
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.userAvatar,
      background: '#A259FF'
    }
  }, "J"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: s.userName
  }, "Jamie L"), /*#__PURE__*/React.createElement("div", {
    style: s.userEmail
  }, "jamie@example.com")))), /*#__PURE__*/React.createElement("div", {
    style: s.main
  }, /*#__PURE__*/React.createElement("div", {
    style: s.topbar
  }, /*#__PURE__*/React.createElement("h1", {
    style: s.pageTitle
  }, MOCK_TEAMS.find(t => t.id === activeSection)?.label || 'Recents'), /*#__PURE__*/React.createElement("div", {
    style: s.topbarRight
  }, /*#__PURE__*/React.createElement("div", {
    style: s.searchBar
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass",
    style: {
      fontSize: 14,
      color: '#999'
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: s.searchInput,
    placeholder: "Search files\u2026",
    value: search,
    onChange: e => setSearch(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    style: s.newBtn
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-plus",
    style: {
      fontSize: 13
    }
  }), "New design"))), /*#__PURE__*/React.createElement("div", {
    style: s.grid
  }, filtered.map(file => /*#__PURE__*/React.createElement(FileCard, {
    key: file.id,
    file: file,
    onClick: onOpenFile
  })), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: s.empty
  }, "No files found for \"", search, "\""))));
};
const filesBrowserStyles = {
  root: {
    display: 'flex',
    height: '100%',
    background: '#fff',
    fontFamily: 'Inter, sans-serif'
  },
  sidebar: {
    width: 220,
    background: '#F5F5F5',
    borderRight: '1px solid #E6E6E6',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    padding: '16px 0'
  },
  sidebarLogo: {
    padding: '0 20px 20px',
    display: 'flex',
    alignItems: 'center'
  },
  nav: {
    flex: 1,
    padding: '0 8px'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '7px 12px',
    borderRadius: 6,
    fontSize: 13,
    color: '#666',
    cursor: 'pointer',
    transition: 'all 0.1s'
  },
  navItemActive: {
    background: '#E6E6E6',
    color: '#1E1E1E',
    fontWeight: 500
  },
  sidebarUser: {
    padding: '12px 20px',
    borderTop: '1px solid #E6E6E6',
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },
  userAvatar: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    fontWeight: 700,
    color: '#fff',
    flexShrink: 0
  },
  userName: {
    fontSize: 12,
    fontWeight: 600,
    color: '#1E1E1E'
  },
  userEmail: {
    fontSize: 10,
    color: '#999'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  topbar: {
    padding: '20px 28px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E6E6E6',
    flexShrink: 0
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: '#1E1E1E',
    letterSpacing: '-0.01em'
  },
  topbarRight: {
    display: 'flex',
    gap: 10,
    alignItems: 'center'
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: '#F5F5F5',
    border: '1px solid #E6E6E6',
    borderRadius: 6,
    padding: '7px 12px',
    width: 220
  },
  searchInput: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: 13,
    color: '#1E1E1E',
    width: '100%',
    fontFamily: 'inherit'
  },
  newBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: '#1E1E1E',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '8px 16px',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'inherit'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 16,
    padding: '24px 28px',
    overflowY: 'auto'
  },
  card: {
    background: '#fff',
    border: '1px solid #E6E6E6',
    borderRadius: 8,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.15s'
  },
  cardHover: {
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    transform: 'translateY(-1px)'
  },
  thumb: {
    height: 130,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbContent: {
    padding: 16
  },
  thumbFrame: {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 4,
    padding: '8px 10px',
    width: 80
  },
  thumbOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  editBtn: {
    background: '#fff',
    color: '#1E1E1E',
    borderRadius: 6,
    padding: '6px 16px',
    fontSize: 12,
    fontWeight: 600
  },
  meta: {
    padding: '10px 12px 12px'
  },
  fileName: {
    fontSize: 13,
    fontWeight: 500,
    color: '#1E1E1E',
    marginBottom: 2,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  fileSub: {
    fontSize: 11,
    color: '#999'
  },
  empty: {
    gridColumn: '1/-1',
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
    padding: '40px 0'
  }
};
Object.assign(window, {
  FilesBrowser
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/figma-app/FilesBrowser.jsx", error: String((e && e.message) || e) }); }

// ui_kits/figma-app/LeftPanel.jsx
try { (() => {
// LeftPanel.jsx — Layers + Assets panel
// Exports: LeftPanel to window

const LAYERS = [{
  id: 1,
  name: 'Page 1',
  type: 'page',
  active: true
}, {
  id: 2,
  name: 'Page 2',
  type: 'page'
}];
const LAYER_TREE = [{
  id: 'f1',
  name: 'Hero Section',
  type: 'frame',
  depth: 0,
  expanded: true
}, {
  id: 'f1-1',
  name: 'Background',
  type: 'rect',
  depth: 1
}, {
  id: 'f1-2',
  name: 'Nav',
  type: 'frame',
  depth: 1,
  expanded: true
}, {
  id: 'f1-2-1',
  name: 'Logo',
  type: 'component',
  depth: 2
}, {
  id: 'f1-2-2',
  name: 'Links',
  type: 'frame',
  depth: 2
}, {
  id: 'f1-2-3',
  name: 'CTA Button',
  type: 'component',
  depth: 2,
  selected: true
}, {
  id: 'f1-3',
  name: 'Hero Text',
  type: 'text',
  depth: 1
}, {
  id: 'f1-4',
  name: 'Illustration',
  type: 'group',
  depth: 1
}, {
  id: 'f2',
  name: 'Features',
  type: 'frame',
  depth: 0
}, {
  id: 'f3',
  name: 'Footer',
  type: 'frame',
  depth: 0
}];
const typeIcon = type => {
  const icons = {
    frame: 'ph-frame-corners',
    rect: 'ph-square',
    text: 'ph-text-t',
    component: 'ph-cube',
    group: 'ph-folder-open',
    page: 'ph-file'
  };
  return icons[type] || 'ph-square';
};
const typeColor = type => {
  const colors = {
    component: '#A259FF',
    text: '#1ABCFE',
    frame: '#B3B3B3',
    group: '#B3B3B3',
    rect: '#B3B3B3'
  };
  return colors[type] || '#B3B3B3';
};
const LeftPanel = ({
  selectedLayer,
  setSelectedLayer
}) => {
  const [tab, setTab] = React.useState('layers');
  const [activePage, setActivePage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState('');
  const s = leftPanelStyles;
  return /*#__PURE__*/React.createElement("div", {
    style: s.panel
  }, /*#__PURE__*/React.createElement("div", {
    style: s.pageTabs
  }, /*#__PURE__*/React.createElement("div", {
    style: s.pageTabsInner
  }, LAYERS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      ...s.pageTab,
      ...(activePage === p.id ? s.pageTabActive : {})
    },
    onClick: () => setActivePage(p.id)
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: s.addPage
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-plus",
    style: {
      fontSize: 11
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: s.tabs
  }, ['layers', 'assets'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      ...s.tabItem,
      ...(tab === t ? s.tabActive : {})
    },
    onClick: () => setTab(t)
  }, t[0].toUpperCase() + t.slice(1)))), /*#__PURE__*/React.createElement("div", {
    style: s.searchWrap
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass",
    style: {
      fontSize: 12,
      color: '#666',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: s.searchInput,
    placeholder: "Search layers",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value)
  })), tab === 'layers' && /*#__PURE__*/React.createElement("div", {
    style: s.layerList
  }, LAYER_TREE.filter(l => !searchQuery || l.name.toLowerCase().includes(searchQuery.toLowerCase())).map(layer => /*#__PURE__*/React.createElement("div", {
    key: layer.id,
    style: {
      ...s.layerRow,
      ...(selectedLayer === layer.id ? s.layerSelected : {}),
      paddingLeft: 8 + layer.depth * 16
    },
    onClick: () => setSelectedLayer(layer.id)
  }, layer.expanded !== undefined && /*#__PURE__*/React.createElement("i", {
    className: `ph ph-caret-${layer.expanded ? 'down' : 'right'}`,
    style: {
      fontSize: 9,
      color: '#666',
      marginRight: 2,
      flexShrink: 0
    }
  }), layer.expanded === undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: `ph ${typeIcon(layer.type)}`,
    style: {
      fontSize: 11,
      color: typeColor(layer.type),
      flexShrink: 0,
      marginRight: 5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...s.layerName,
      ...(layer.type === 'component' ? {
        color: '#A259FF'
      } : {})
    }
  }, layer.name)))), tab === 'assets' && /*#__PURE__*/React.createElement("div", {
    style: s.assetsPanel
  }, ['Local components', 'Local styles', 'Enabled libraries'].map(section => /*#__PURE__*/React.createElement("div", {
    key: section,
    style: s.assetSection
  }, /*#__PURE__*/React.createElement("div", {
    style: s.assetSectionHeader
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right",
    style: {
      fontSize: 10,
      color: '#666'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: s.assetSectionTitle
  }, section), /*#__PURE__*/React.createElement("span", {
    style: s.assetCount
  }, "\u2014"))))));
};
const leftPanelStyles = {
  panel: {
    width: 240,
    background: '#2C2C2C',
    borderRight: '1px solid #3C3C3C',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    overflow: 'hidden',
    userSelect: 'none'
  },
  pageTabs: {
    borderBottom: '1px solid #3C3C3C',
    padding: '4px 8px 0'
  },
  pageTabsInner: {
    display: 'flex',
    gap: 2,
    alignItems: 'center'
  },
  pageTab: {
    padding: '4px 8px',
    fontSize: 11,
    color: '#808080',
    borderRadius: '4px 4px 0 0',
    cursor: 'pointer'
  },
  pageTabActive: {
    background: '#1E1E1E',
    color: '#E6E6E6'
  },
  addPage: {
    marginLeft: 'auto',
    color: '#666',
    cursor: 'pointer',
    padding: '2px 4px'
  },
  tabs: {
    display: 'flex',
    borderBottom: '1px solid #3C3C3C'
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
    padding: '8px 0',
    fontSize: 12,
    color: '#808080',
    cursor: 'pointer'
  },
  tabActive: {
    color: '#E6E6E6',
    borderBottom: '2px solid #E6E6E6'
  },
  searchWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    margin: '6px 8px',
    background: '#1E1E1E',
    border: '1px solid #3C3C3C',
    borderRadius: 5,
    padding: '5px 8px'
  },
  searchInput: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: 11,
    color: '#E6E6E6',
    width: '100%',
    fontFamily: 'inherit'
  },
  layerList: {
    flex: 1,
    overflowY: 'auto',
    paddingBottom: 8
  },
  layerRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 8px',
    cursor: 'pointer',
    borderRadius: 4,
    margin: '1px 4px',
    transition: 'background 0.1s'
  },
  layerSelected: {
    background: 'rgba(13,153,255,0.15)'
  },
  layerName: {
    fontSize: 11,
    color: '#B3B3B3',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  assetsPanel: {
    flex: 1,
    padding: '8px'
  },
  assetSection: {
    marginBottom: 4
  },
  assetSectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: '4px 0',
    cursor: 'pointer'
  },
  assetSectionTitle: {
    fontSize: 11,
    color: '#B3B3B3',
    flex: 1
  },
  assetCount: {
    fontSize: 10,
    color: '#666'
  }
};
Object.assign(window, {
  LeftPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/figma-app/LeftPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/figma-app/RightPanel.jsx
try { (() => {
// RightPanel.jsx — Design/Prototype/Dev properties
// Exports: RightPanel to window

const PropRow = ({
  label,
  children,
  style: extraStyle
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
    ...extraStyle
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 10,
    color: '#808080',
    width: 60,
    flexShrink: 0,
    textTransform: 'capitalize'
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    display: 'flex',
    gap: 4
  }
}, children));
const NumInput = ({
  value,
  label
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, label && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 9,
    color: '#666',
    marginBottom: 2
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: rightPanelStyles.numInput
}, value));
const ColorChip = ({
  color,
  opacity = '100%'
}) => /*#__PURE__*/React.createElement("div", {
  style: rightPanelStyles.colorRow
}, /*#__PURE__*/React.createElement("div", {
  style: {
    ...rightPanelStyles.colorChip,
    background: color
  }
}), /*#__PURE__*/React.createElement("span", {
  style: rightPanelStyles.colorHex
}, color), /*#__PURE__*/React.createElement("span", {
  style: rightPanelStyles.colorOpacity
}, opacity));
const SectionHeader = ({
  title,
  onAdd
}) => /*#__PURE__*/React.createElement("div", {
  style: rightPanelStyles.sectionHeader
}, /*#__PURE__*/React.createElement("span", {
  style: rightPanelStyles.sectionTitle
}, title), onAdd && /*#__PURE__*/React.createElement("i", {
  className: "ph ph-plus",
  style: {
    fontSize: 11,
    color: '#666',
    cursor: 'pointer'
  }
}));
const RightPanel = ({
  selectedLayer
}) => {
  const [tab, setTab] = React.useState('design');
  const s = rightPanelStyles;
  return /*#__PURE__*/React.createElement("div", {
    style: s.panel
  }, /*#__PURE__*/React.createElement("div", {
    style: s.tabs
  }, ['design', 'prototype', 'dev'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      ...s.tabItem,
      ...(tab === t ? s.tabActive : {})
    },
    onClick: () => setTab(t)
  }, t[0].toUpperCase() + t.slice(1)))), /*#__PURE__*/React.createElement("div", {
    style: s.scroll
  }, tab === 'design' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: s.section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Frame"
  }), /*#__PURE__*/React.createElement(PropRow, {
    label: "W / H"
  }, /*#__PURE__*/React.createElement(NumInput, {
    value: "375",
    label: "W"
  }), /*#__PURE__*/React.createElement(NumInput, {
    value: "812",
    label: "H"
  })), /*#__PURE__*/React.createElement(PropRow, {
    label: "X / Y"
  }, /*#__PURE__*/React.createElement(NumInput, {
    value: "0",
    label: "X"
  }), /*#__PURE__*/React.createElement(NumInput, {
    value: "0",
    label: "Y"
  })), /*#__PURE__*/React.createElement(PropRow, {
    label: "Rotate"
  }, /*#__PURE__*/React.createElement(NumInput, {
    value: "0\xB0",
    label: "R"
  }), /*#__PURE__*/React.createElement(NumInput, {
    value: "1",
    label: "Scale"
  })), /*#__PURE__*/React.createElement("div", {
    style: s.row2
  }, /*#__PURE__*/React.createElement("div", {
    style: s.checkRow
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.checkbox,
      background: '#0D99FF',
      borderColor: '#0D99FF'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-check",
    style: {
      fontSize: 8,
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: s.checkLabel
  }, "Clip content")))), /*#__PURE__*/React.createElement("div", {
    style: s.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: s.section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Auto layout",
    onAdd: true
  }), /*#__PURE__*/React.createElement("div", {
    style: s.autoLayoutRow
  }, ['ph-arrows-horizontal', 'ph-arrows-vertical', 'ph-grid-four'].map((icon, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...s.alBtn,
      ...(i === 0 ? s.alBtnActive : {})
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph ${icon}`,
    style: {
      fontSize: 12
    }
  }))), /*#__PURE__*/React.createElement(NumInput, {
    value: "16",
    label: "Gap"
  }), /*#__PURE__*/React.createElement(NumInput, {
    value: "16",
    label: "Pad"
  }))), /*#__PURE__*/React.createElement("div", {
    style: s.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: s.section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Fill",
    onAdd: true
  }), /*#__PURE__*/React.createElement(ColorChip, {
    color: "#FFFFFF"
  })), /*#__PURE__*/React.createElement("div", {
    style: s.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: s.section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Stroke",
    onAdd: true
  }), /*#__PURE__*/React.createElement("div", {
    style: s.emptyState
  }, "\u2014")), /*#__PURE__*/React.createElement("div", {
    style: s.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: s.section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Effects",
    onAdd: true
  }), /*#__PURE__*/React.createElement("div", {
    style: s.effectRow
  }, /*#__PURE__*/React.createElement("div", {
    style: s.checkbox
  }), /*#__PURE__*/React.createElement("div", {
    style: s.colorChip2,
    style2: {
      background: 'rgba(0,0,0,0.25)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#B3B3B3',
      flex: 1
    }
  }, "Drop shadow"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-eye",
    style: {
      fontSize: 11,
      color: '#666'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: s.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: s.section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Export",
    onAdd: true
  }), /*#__PURE__*/React.createElement("div", {
    style: s.emptyState
  }, "\u2014"))), tab === 'prototype' && /*#__PURE__*/React.createElement("div", {
    style: s.section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Interactions",
    onAdd: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.emptyState,
      textAlign: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-link",
    style: {
      fontSize: 20,
      color: '#4D4D4D',
      display: 'block',
      marginBottom: 6
    }
  }), /*#__PURE__*/React.createElement("span", null, "No interactions yet.", /*#__PURE__*/React.createElement("br", null), "Click + to add one."))), tab === 'dev' && /*#__PURE__*/React.createElement("div", {
    style: s.section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Code"
  }), /*#__PURE__*/React.createElement("div", {
    style: s.codeBlock
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C792EA'
    }
  }, "background"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#89DDFF'
    }
  }, ": "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C3E88D'
    }
  }, "#FFFFFF"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#89DDFF'
    }
  }, ";"), '\n', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C792EA'
    }
  }, "border-radius"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#89DDFF'
    }
  }, ": "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F78C6C'
    }
  }, "12px"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#89DDFF'
    }
  }, ";"), '\n', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C792EA'
    }
  }, "padding"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#89DDFF'
    }
  }, ": "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F78C6C'
    }
  }, "16px"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#89DDFF'
    }
  }, ";")))));
};
const rightPanelStyles = {
  panel: {
    width: 240,
    background: '#2C2C2C',
    borderLeft: '1px solid #3C3C3C',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    userSelect: 'none'
  },
  tabs: {
    display: 'flex',
    borderBottom: '1px solid #3C3C3C'
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
    padding: '8px 0',
    fontSize: 12,
    color: '#808080',
    cursor: 'pointer'
  },
  tabActive: {
    color: '#E6E6E6',
    borderBottom: '2px solid #E6E6E6'
  },
  scroll: {
    flex: 1,
    overflowY: 'auto'
  },
  section: {
    padding: '10px 12px'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: '#E6E6E6'
  },
  divider: {
    height: 1,
    background: 'rgba(255,255,255,0.06)',
    margin: '0 0'
  },
  numInput: {
    background: '#1E1E1E',
    border: '1px solid #3C3C3C',
    borderRadius: 4,
    padding: '4px 6px',
    fontSize: 11,
    color: '#E6E6E6',
    textAlign: 'right'
  },
  colorRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: '#1E1E1E',
    border: '1px solid #3C3C3C',
    borderRadius: 4,
    padding: '5px 8px',
    cursor: 'pointer'
  },
  colorChip: {
    width: 14,
    height: 14,
    borderRadius: 3,
    border: '1px solid rgba(255,255,255,0.1)',
    flexShrink: 0
  },
  colorHex: {
    fontSize: 11,
    color: '#E6E6E6',
    flex: 1
  },
  colorOpacity: {
    fontSize: 11,
    color: '#808080'
  },
  row2: {
    marginTop: 4
  },
  checkRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 5
  },
  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 2,
    border: '1px solid #4D4D4D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkLabel: {
    fontSize: 10,
    color: '#B3B3B3'
  },
  autoLayoutRow: {
    display: 'flex',
    gap: 4,
    alignItems: 'flex-end'
  },
  alBtn: {
    width: 28,
    height: 28,
    borderRadius: 4,
    background: '#1E1E1E',
    border: '1px solid #3C3C3C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#808080',
    cursor: 'pointer',
    flexShrink: 0
  },
  alBtnActive: {
    background: 'rgba(13,153,255,0.15)',
    borderColor: '#0D99FF',
    color: '#0D99FF'
  },
  effectRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 6
  },
  colorChip2: {
    width: 14,
    height: 14,
    borderRadius: 3,
    background: 'rgba(0,0,0,0.25)',
    border: '1px solid rgba(255,255,255,0.1)',
    flexShrink: 0
  },
  emptyState: {
    fontSize: 11,
    color: '#4D4D4D'
  },
  codeBlock: {
    background: '#1E1E1E',
    border: '1px solid #3C3C3C',
    borderRadius: 6,
    padding: '10px 12px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    color: '#E6E6E6',
    lineHeight: 1.6,
    whiteSpace: 'pre'
  }
};
Object.assign(window, {
  RightPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/figma-app/RightPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/figma-app/Toolbar.jsx
try { (() => {
// Toolbar.jsx — Figma top toolbar
// Exports: FigmaToolbar to window

const FigmaToolbar = ({
  activeTool,
  setActiveTool,
  fileName,
  onBack,
  zoom,
  setZoom
}) => {
  const tools = [{
    id: 'move',
    key: 'V',
    icon: 'ph-cursor'
  }, {
    id: 'frame',
    key: 'F',
    icon: 'ph-frame-corners'
  }, {
    id: 'pen',
    key: 'P',
    icon: 'ph-pen-nib'
  }, {
    id: 'rect',
    key: 'R',
    icon: 'ph-square'
  }, {
    id: 'ellipse',
    key: 'O',
    icon: 'ph-circle'
  }, {
    id: 'text',
    key: 'T',
    icon: 'ph-text-t'
  }, {
    id: 'hand',
    key: 'H',
    icon: 'ph-hand'
  }, {
    id: 'comment',
    key: 'C',
    icon: 'ph-chat-circle'
  }];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const s = toolbarStyles;
  return /*#__PURE__*/React.createElement("div", {
    style: s.bar
  }, /*#__PURE__*/React.createElement("div", {
    style: s.left
  }, /*#__PURE__*/React.createElement("div", {
    style: s.logoBtn,
    onClick: () => setMenuOpen(!menuOpen)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "24",
    viewBox: "0 0 38 57",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 28.5a9.5 9.5 0 100-19H9.5a9.5 9.5 0 000 19H19z",
    fill: "#F24E1E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 28.5a9.5 9.5 0 000 19c5.247 0 9.5-4.253 9.5-9.5V28.5H9.5z",
    fill: "#0ACF83"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28.5",
    cy: "28.5",
    r: "9.5",
    fill: "#FF7262"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 9.5A9.5 9.5 0 0028.5 0H19v19h9.5A9.5 9.5 0 0038 9.5z",
    fill: "#A259FF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 19H9.5a9.5 9.5 0 000 19H19V19z",
    fill: "#1ABCFE"
  }))), /*#__PURE__*/React.createElement("div", {
    style: s.breadcrumb
  }, /*#__PURE__*/React.createElement("span", {
    style: s.backBtn,
    onClick: onBack
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-left",
    style: {
      fontSize: 12
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: s.teamName
  }, "Drafts"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4D4D4D',
      margin: '0 4px',
      fontSize: 11
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: s.fileName
  }, fileName), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down",
    style: {
      fontSize: 10,
      color: '#808080',
      marginLeft: 3
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: s.tools
  }, tools.map((t, i) => {
    const isBreak = i === 2 || i === 6;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: t.id
    }, isBreak && /*#__PURE__*/React.createElement("div", {
      style: s.toolDivider
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...s.toolBtn,
        ...(activeTool === t.id ? s.toolBtnActive : {})
      },
      onClick: () => setActiveTool(t.id),
      title: `${t.id[0].toUpperCase() + t.id.slice(1)} (${t.key})`
    }, /*#__PURE__*/React.createElement("i", {
      className: `ph ${t.icon}`,
      style: {
        fontSize: 15
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: s.right
  }, /*#__PURE__*/React.createElement("div", {
    style: s.zoomControl
  }, /*#__PURE__*/React.createElement("span", {
    style: s.zoomText
  }, zoom, "%"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down",
    style: {
      fontSize: 10,
      color: '#808080'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: s.avatarGroup
  }, ['#A259FF', '#0ACF83', '#FF7262'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...s.avatar,
      background: c,
      marginLeft: i > 0 ? -6 : 0
    }
  }, ['J', 'T', 'M'][i]))), /*#__PURE__*/React.createElement("button", {
    style: s.shareBtn
  }, "Share"), /*#__PURE__*/React.createElement("div", {
    style: s.presentBtn,
    title: "Present"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-play",
    style: {
      fontSize: 13
    }
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    style: s.mainMenu,
    onClick: () => setMenuOpen(false)
  }, ['New file', 'New FigJam', 'Open...', '—', 'Save to version history', 'Duplicate', '—', 'Export...'].map((item, i) => item === '—' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: s.menuDivider
  }) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: s.menuItem
  }, item))));
};
const toolbarStyles = {
  bar: {
    height: 40,
    background: '#2C2C2C',
    borderBottom: '1px solid #3C3C3C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    position: 'relative',
    zIndex: 100,
    flexShrink: 0,
    userSelect: 'none'
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    minWidth: 220
  },
  logoBtn: {
    width: 32,
    height: 32,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.1s'
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },
  backBtn: {
    width: 24,
    height: 24,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#B3B3B3'
  },
  teamName: {
    fontSize: 12,
    color: '#B3B3B3',
    cursor: 'pointer'
  },
  fileName: {
    fontSize: 12,
    fontWeight: 500,
    color: '#E6E6E6',
    cursor: 'pointer'
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  toolBtn: {
    width: 30,
    height: 30,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#B3B3B3',
    transition: 'all 0.1s'
  },
  toolBtnActive: {
    background: 'rgba(13,153,255,0.2)',
    color: '#0D99FF'
  },
  toolDivider: {
    width: 1,
    height: 18,
    background: 'rgba(255,255,255,0.1)',
    margin: '0 4px'
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    minWidth: 220,
    justifyContent: 'flex-end'
  },
  zoomControl: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    background: '#333',
    border: '1px solid #3C3C3C',
    borderRadius: 5,
    padding: '4px 8px',
    cursor: 'pointer'
  },
  zoomText: {
    fontSize: 12,
    color: '#B3B3B3'
  },
  avatarGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 9,
    fontWeight: 700,
    color: '#fff',
    border: '2px solid #2C2C2C'
  },
  shareBtn: {
    background: '#0D99FF',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '5px 12px',
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'inherit'
  },
  presentBtn: {
    width: 28,
    height: 28,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#B3B3B3',
    background: 'rgba(255,255,255,0.05)'
  },
  mainMenu: {
    position: 'absolute',
    top: 44,
    left: 8,
    background: '#2C2C2C',
    border: '1px solid #3C3C3C',
    borderRadius: 8,
    padding: 4,
    boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
    minWidth: 200,
    zIndex: 200
  },
  menuItem: {
    padding: '7px 10px',
    fontSize: 12,
    color: '#E6E6E6',
    borderRadius: 5,
    cursor: 'pointer'
  },
  menuDivider: {
    height: 1,
    background: 'rgba(255,255,255,0.08)',
    margin: '3px 0'
  }
};
Object.assign(window, {
  FigmaToolbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/figma-app/Toolbar.jsx", error: String((e && e.message) || e) }); }

})();
