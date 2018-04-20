import san from 'san'
//import {Button} from 'san-mui'
import Button from 'san-mui/lib/Button';
import 'san-mui/lib/index.css'

var MyApp = san.defineComponent({
	template: `<div>
        <sm-button variants="primary">主色</sm-button>
        <sm-button variants="secondery">次色</sm-button>
        <sm-button variants="danger">危险</sm-button>
        <sm-button variants="warning">警告</sm-button>
        <sm-button variants="success">成功</sm-button>
        <sm-button variants="info">通知</sm-button>
        <sm-button disabled="{{!0}}">禁用</sm-button>
    </div>`,

	components: {
		'sm-button': Button
	},
	initData: function() {
		return {
			name: 'San'
		}
	}
})

var myApp = new MyApp()
myApp.attach(document.body)
