/* @ds-bundle: {"format":4,"namespace":"OxfordRoofingDesignSystem_4ccde3","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/core/Card.jsx"},{"name":"StatCard","sourcePath":"components/core/Card.jsx"},{"name":"TestimonialCard","sourcePath":"components/core/Card.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7281c62a82bd","components/core/Button.jsx":"d3fbc99fe46d","components/core/Card.jsx":"005305763f9e","components/feedback/Accordion.jsx":"506921b0030b","components/forms/Checkbox.jsx":"2fd7906089c6","components/forms/Input.jsx":"c750f23cb79c","components/forms/Select.jsx":"cf190229a1ff","components/layout/Section.jsx":"3579b7914407","components/navigation/Footer.jsx":"919d326781b3","components/navigation/NavBar.jsx":"d0762f456347"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OxfordRoofingDesignSystem_4ccde3 = window.OxfordRoofingDesignSystem_4ccde3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const toneStyles = {
  navy: {
    background: 'var(--navy-900)',
    color: 'var(--white)'
  },
  gold: {
    background: 'var(--gold-50)',
    color: 'var(--text-gold)',
    border: '1px solid var(--gold-300)'
  },
  olive: {
    background: 'var(--olive-50)',
    color: 'var(--olive-800)',
    border: '1px solid var(--olive-300)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--navy-900)',
    border: '1px solid var(--border-default)'
  },
  'outline-on-dark': {
    background: 'transparent',
    color: 'var(--white)',
    border: '1px solid rgba(255,255,255,0.4)'
  }
};
function Badge({
  tone = 'gold',
  children
}) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    ...toneStyles[tone]
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '8px 16px',
    fontSize: '13px'
  },
  md: {
    padding: '11px 22px',
    fontSize: '14px'
  },
  lg: {
    padding: '14px 28px',
    fontSize: '15px'
  }
};
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  letterSpacing: '0.01em',
  borderRadius: 'var(--radius-md)',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  transition: 'background-color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)',
  textDecoration: 'none'
};
const variantStyles = {
  primary: {
    background: 'var(--btn-primary-bg)',
    color: 'var(--btn-primary-text)',
    borderColor: 'var(--btn-primary-bg)'
  },
  accent: {
    background: 'var(--btn-accent-bg)',
    color: 'var(--btn-accent-text)',
    borderColor: 'var(--btn-accent-bg)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--btn-secondary-text)',
    borderColor: 'var(--btn-secondary-border)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--btn-ghost-text)',
    borderColor: 'var(--btn-ghost-border)'
  }
};
const hoverBg = {
  primary: 'var(--btn-primary-bg-hover)',
  accent: 'var(--btn-accent-bg-hover)',
  secondary: 'var(--btn-secondary-bg-hover)',
  ghost: 'var(--btn-ghost-bg-hover)'
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  iconPosition = 'left',
  children,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...sizeStyles[size],
    ...variantStyles[variant],
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    backgroundColor: hover && !disabled ? hoverBg[variant] : variantStyles[variant].background
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  padding = 'md',
  elevated = false,
  children,
  style = {}
}) {
  const paddingMap = {
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: elevated ? 'var(--shadow-card)' : 'none',
      padding: paddingMap[padding],
      ...style
    }
  }, children);
}
function ServiceCard({
  icon,
  title,
  description
}) {
  return /*#__PURE__*/React.createElement(Card, {
    elevated: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--space-sm)',
      color: 'var(--gold-400)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, description));
}
function StatCard({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-md) var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 40,
      fontWeight: 600,
      color: 'var(--navy-900)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, label));
}
function TestimonialCard({
  quote,
  name,
  role
}) {
  return /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    style: {
      borderLeft: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 32,
      color: 'var(--gold-400)',
      lineHeight: 1,
      marginBottom: 8
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-body)',
      lineHeight: 1.6,
      marginBottom: 16
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, role));
}
Object.assign(__ds_scope, { Card, ServiceCard, StatCard, TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function Accordion({
  items = []
}) {
  const [openIndex, setOpenIndex] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)'
    }
  }, items.map((item, i) => {
    const isOpen = openIndex === i;
    return /*#__PURE__*/React.createElement("div", {
      key: item.question,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenIndex(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 4px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--text-heading)'
      }
    }, item.question, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-gold)',
        fontSize: 18,
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-standard)'
      }
    }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 4px 20px',
        fontSize: 14,
        color: 'var(--text-body)',
        lineHeight: 1.6
      }
    }, item.answer));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  id
}) {
  const boxId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: boxId,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: boxId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      appearance: 'none',
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      border: '1.5px solid var(--border-default)',
      background: checked ? 'var(--navy-900)' : 'var(--surface)',
      position: 'relative',
      cursor: 'pointer'
    }
  }), label);
}
function Radio({
  label,
  name,
  checked,
  onChange,
  id
}) {
  const radioId = id || `${name}-${label?.toLowerCase().replace(/\s+/g, '-')}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: radioId,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: radioId,
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    style: {
      appearance: 'none',
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '1.5px solid var(--border-default)',
      background: checked ? 'radial-gradient(var(--navy-900) 40%, transparent 42%)' : 'var(--surface)',
      cursor: 'pointer'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  value,
  onChange,
  id
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--semantic-danger)' : 'var(--border-default)'}`,
      background: 'var(--surface)',
      color: 'var(--text-body)',
      outline: 'none'
    },
    onFocus: e => e.target.style.borderColor = 'var(--focus-ring)',
    onBlur: e => e.target.style.borderColor = error ? 'var(--semantic-danger)' : 'var(--border-default)'
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--semantic-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  id
}) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    id: selectId,
    value: value,
    onChange: onChange,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface)',
      color: 'var(--text-body)',
      outline: 'none'
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function Section({
  tone = 'light',
  children,
  id,
  style = {}
}) {
  const toneStyles = {
    light: {
      background: 'var(--bg-page)',
      color: 'var(--text-body)'
    },
    alt: {
      background: 'var(--bg-page-alt)',
      color: 'var(--text-body)'
    },
    dark: {
      background: 'var(--bg-page-dark)',
      color: 'var(--text-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: 'var(--space-section) 40px',
      ...toneStyles[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc
}) {
  const cols = [{
    title: 'Services',
    links: ['Roof Replacement', 'Storm Restoration', 'Commercial Maintenance', 'Inspections']
  }, {
    title: 'Company',
    links: ['About', 'Our Work', 'Careers', 'Contact']
  }, {
    title: 'Resources',
    links: ['Warranty Info', 'Financing', 'FAQ']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-sans)',
      padding: '64px 40px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 200px'
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Oxford Roofing",
    style: {
      height: 44,
      marginBottom: 12,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-dark-muted)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, "Commercial & Residential")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      flex: '1 1 140px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 16
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border-on-dark)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 ", new Date().getFullYear(), " Oxford Roofing. Licensed & insured. All rights reserved."));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logoSrc,
  links = [],
  ctaLabel = 'Request an Inspection',
  onCtaClick
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Oxford Roofing",
    style: {
      height: 40
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-heading)',
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("button", {
    onClick: onCtaClick,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      padding: '10px 20px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
      border: 'none',
      cursor: 'pointer'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
