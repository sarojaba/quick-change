import * as React from 'react'

import 'jui/dist/ui.min.css'
import 'jui/dist/ui-jennifer.min.css'
import 'jui-grid/dist/grid.min.css'
import 'jui-grid/dist/grid-jennifer.min.css'

/**
 * @see http://jui.io/?p=install
 * @param {} param0 
 * @returns 
 */
export function StyleLoader({ theme, children }) {
  return <>
    {/* <script src="jquery.min.js"></script>
    <script src="/jui-core/dist/core.min.js"></script>

    <script src="/jui/dist/ui.min.js"></script>

    <script src="/jui-grid/dist/grid.min.js"></script> */}

    <body className="jui">
      {children}
    </body>
  </>
}