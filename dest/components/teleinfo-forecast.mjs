class YadomsComponentName{constructor(){}propsKeys(){return["color"]}render(o){return`\n      <div class="teleinfo-forecast joliePosition">\n        <div class="square ${o.color}"></div>\n      </div>\n    `}style(){return"\n      .teleinfo-forecast .square {\n        border-radius: 9999px;\n        border-width: 2px;\n        width: 3rem;\n        height: 3rem;\n        box-shadow: 0 0 20px currentColor;\n      }\n\n      .teleinfo-forecast .square.blue {\n        background-color: #3182CE;\n        color: #3182CE;\n        border-color: #2C5282;\n      }\n\n      .teleinfo-forecast .square.white {\n        background-color: #FFFFFF;\n        color: #FFFFFF;\n        border-color: #E2E8F0;\n      }\n\n      .teleinfo-forecast .square.red {\n        background-color: #E53E3E;\n        color: #E53E3E;\n        border-color: #9B2C2C;\n      }\n    "}init(o){}update(o,r,n){}getProperty(o,r){}}export{YadomsComponentName as YadomsComponent};