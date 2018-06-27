import { assert, expect } from 'chai';
import 'mocha';
import { Series } from 'data-forge';
import "../index";

describe('data-forge-plot - series', () => {

    it('plot series with no configuration', ()  => {

        const series = new Series({ index: [1, 2, 3], values: [10, 20, 30] });
        const plotAPI = series.plot();
        
        expect(plotAPI.serialize()).to.eql({
            "data": {                      
                "columnOrder": [           
                    "__value__",           
                    "__index__"            
                ],                         
                "columns": {               
                    "__value__": "number", 
                    "__index__": "number"  
                },                         
                "values": [                
                    {                      
                        "__value__": 10,   
                        "__index__": 1     
                    },                     
                    {                      
                        "__value__": 20,   
                        "__index__": 2     
                    },                     
                    {                      
                        "__value__": 30,   
                        "__index__": 3     
                    }                      
                ]                          
            },                             
            "plotDef": {                   
                "chartType": "line"        
            },                             
            "axisMap": {                   
                "x": "__index__",          
                "y": [                     
                    "__value__"            
                ]                            
            }
        });
    });

});