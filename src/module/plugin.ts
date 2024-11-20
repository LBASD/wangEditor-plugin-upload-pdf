/**
 * @description attachment plugin
 * @author wangfupeng
 */

import { DomEditor, IDomEditor } from '@wangeditor-next/editor'

function withImportPdf<T extends IDomEditor>(editor: T) {
  const { isInline, isVoid } = editor
  const newEditor = editor

  // 重写 isInline
  newEditor.isInline = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'importPdf') {
      return false
    }

    return isInline(elem)
  }

  // 重写 isVoid
  newEditor.isVoid = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'importPdf') {
      return true
    }

    return isVoid(elem)
  }

  return newEditor
}

export default withImportPdf
