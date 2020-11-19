import React from 'react'
import propTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MyUploadAdapter from './MyUploadAdapter.js'

// console.log(ClassicEditor.builtinPlugins.map((plugin) => plugin.pluginName))

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    // console.log(loader);
    return new MyUploadAdapter(loader)
  }
}

function RVWysiwygEditor(props) {
  const { data, onChange } = props
  const custom_config = {
    extraPlugins: [MyCustomUploadAdapterPlugin],
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        'alignment',
        '|',
        'blockQuote',
        'insertTable',
        '|',
        'imageUpload',
        'undo',
        'redo',
      ],
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
    isReadOnly: props.readOnly ? true : false,
    isVisible: props.readOnly ? true : false,
    autoGrow_minHeight: 600,
    autoGrow_maxHeight: 5000,
    autoGrow_onStartup: true,
  }
  return (
    <>
      <div>
        <CKEditor
          required
          editor={ClassicEditor}
          config={custom_config}
          onInit={(editor) => {
            // console.log(editor);
            // 에디터 초기 크기값 지정
            editor.editing.view.change((writer) => {
              writer.setStyle('height', '500px', editor.editing.view.document.getRoot())
            })
          }}
          data={data}
          onChange={(event, editor) => {
            const editData = editor.getData()
            // console.log(editData);
            onChange(editData)
            // editor.editing.view.change((writer) => {
            //   writer.setStyle(
            //     'height',
            //     props.height,
            //     editor.editing.view.document.getRoot()
            //   );
            // });
          }}
        />
        {/* <CKEditor
          editor={ClassicEditor}
          data={!props.data ? '' : props.data}
          disabled={props.readOnly ? true : false}
          config={{
            isReadOnly: props.readOnly ? true : false,
            isVisible: props.readOnly ? true : false,

            ckfinder: {
              uploadUrl: `${base_url}/upload`,
            },
          }}
          onInit={(editor) => {
            console.log(editor);
            // 에디터 초기 크기값 지정
            editor.editing.view.change((writer) => {
              writer.setStyle(
                'height',
                props.height,
                editor.editing.view.document.getRoot()
              );
            });
          }}
          ready={(event) => {
            console.log(event);
          }}
          onChange={(event, editor) => {
            // console.log(event);
            // console.log(editor);
            const data = editor.getData();
            if (props.onChange) {
              props.onChange(data);
            }
            //console.log( { event, editor, data } );
          }}
          onBlur={(editor) => {
            //console.log( 'Blur.', editor );
          }}
          onFocus={(editor) => {
            //console.log( 'Focus.', editor );
          }}
        /> */}
      </div>
    </>
  )
}

RVWysiwygEditor.propTypes = {
  /** 위즈윅 에디터 초기 데이터 */
  data: propTypes.string,
  /** 위즈윅 에디터 세로 크기(px 만 사용가능) */
  height: propTypes.string,
  /** 위즈윅 에디터 변경 이벤트  */
  onChange: propTypes.func,
  /** 읽기 전용모드 */
  readOnly: propTypes.string,
}

RVWysiwygEditor.defaultProps = {
  data: '',
  height: '1000px',
  onChange: null,
  readOnly: false,
}

export default RVWysiwygEditor
