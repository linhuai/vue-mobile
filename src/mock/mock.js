var Mock = require('mockjs');
var data = Mock.mock('/mock',function(){
    return {
        modules: [
        	{
        		type: 'slider',
        		data: [
        			{
						img : 'http://img.dmall.com/mIndex/201612/f8d1c169-1229-4121-8b39-b997d4cef239_750H',
						link : '../active/active',
						actived : true
        			},
        			{
						img : 'http://img.dmall.com/mIndex/201611/8412c37b-754b-4e1e-8e2c-cb8653cd4d0b_750H',
						link : '../active/active',
						actived : false
        			},
        			{
						img : 'http://img.dmall.com/mIndex/201612/5388bc94-0340-45a6-911d-2e1ea6fd11ca_750H',
						link : '../active/active',
						actived : false
        			}
        		]
        	}
        ]
    }
})