import {
  R as e,
  r as t,
  B as l,
  S as n,
  M as a,
  a as s,
  C as r,
  b as m,
  G as c,
  T as i,
  c as o,
} from './vendor.de53347e.js';
var d = e.memo(() => e.createElement('div', null, '12123123'));
const u = () => {
  const [o, u] = t.exports.useState(!1),
    [E, y] = t.exports.useState('1');
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(
      l,
      {
        style: {
          position: 'fixed',
          left: 0,
          bottom: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        onClick: () => u(!0),
      },
      e.createElement(n, { style: { fontSize: 18 } }),
    ),
    e.createElement(
      a,
      {
        visible: o,
        onCancel: () => u(!1),
        footer: null,
        width: 800,
        bodyStyle: { padding: 0 },
        title: 'Dev plugin',
      },
      e.createElement(
        s,
        { style: { minHeight: 500 } },
        e.createElement(
          r,
          { span: 5 },
          e.createElement(
            m,
            {
              theme: 'dark',
              mode: 'inline',
              defaultSelectedKeys: [E],
              style: { height: '100%' },
              onClick: ({ key: e }) => y(e),
            },
            e.createElement(m.Item, { key: '1', icon: e.createElement(c, null) }, 'http proxy'),
            e.createElement(
              m.Item,
              { disabled: !0, key: '2', icon: e.createElement(i, null) },
              '建设中...',
            ),
          ),
        ),
        e.createElement(
          r,
          { span: 19 },
          e.createElement(
            'div',
            { className: 'site-layout-background', style: { padding: 24, height: '100%' } },
            '1' === E && e.createElement(d, null),
          ),
        ),
      ),
    ),
  );
};
o.render(e.createElement(u, null), document.getElementById('dev-plugin'));
