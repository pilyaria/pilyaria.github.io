import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Select, Checkbox, InputNumber, Button, Input, Col, Row } from 'antd';

//для чекбоксов
function onChangeChkBox(checkedValues) {
  console.log('checked = ', checkedValues);
}

//для инпутнамбера
function onChangeInpNum(value) {
  console.log('changed', value);
}

//для селекта 
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const columns = [
  {
    title: 'Контроль',
    dataIndex: 'col1',
    width: 150,
  },
  
  {
    title: 'Точки учёта',
    dataIndex: 'col2',
    key: 'action',
    render: () => <a>Выбрать</a>,
    width: 50
  },
  
];
const data = [
  {
    key: '1',
    col1: <Checkbox  value="ch1" onChange={onChangeChkBox}>Отсутствие связи с прибором</Checkbox>,
  },
  {
    key: '2',
    col1: <Checkbox  value="ch2" onChange={onChangeChkBox}>Групповые условия</Checkbox>,
  },
  {
    key: '3',
    col1: <Checkbox  value="ch3" onChange={onChangeChkBox}>Контроль переменных</Checkbox>,
  },
  {
    key: '4',
    col1: <Checkbox  value="ch4" onChange={onChangeChkBox}>Неверное время прибора</Checkbox>,
  },
  {
    key: '5',
    col1: <Checkbox  value="ch5" onChange={onChangeChkBox}>Условия прибора</Checkbox>,
  },
  {
    key: '6',
    col1: <Checkbox  value="ch6" onChange={onChangeChkBox}>Срабатывание датчиков</Checkbox>,
  },
  {
    key: '7',
    col1: <Checkbox  value="ch7" onChange={onChangeChkBox}>Сообщения о поверке</Checkbox>,
  },
  {
    key: '8',
    col1: <Checkbox  value="ch8" onChange={onChangeChkBox}>Изменение параметров прибора</Checkbox>,
  },
  {
    key: '9',
    col1: <Checkbox  value="ch9" onChange={onChangeChkBox}>Высылать месячные отчёты</Checkbox>,
  },

  
];


ReactDOM.render(
  <>
   <div className="site-input-group-wrapper">
    <Input.Group size="large">
      <Row gutter={8}>
        <Col span={8}>
          Тип оповещения
        </Col>
        <Col span={8}>
          <Select defaultValue="e-mail" size="small" onChange={handleChange}>
            <Option value="sms">SMS</Option>
            <Option value="e-mail">e-mail</Option>
          </Select>
        </Col>
      </Row>
      <br />
      <Row gutter={8}>
        <Col span={8}>
          Электронный адрес
        </Col>
        <Col span={10}>
           <Input size="small" placeholder="pilyar@teplo-inform.ru" />
        </Col>
      </Row>
      <br />
      <Row gutter={8}>
        <Col span={8}>
          Сообщений подряд
        </Col>
        <Col span={8}>
          <InputNumber size="small" min={1} max={10} defaultValue={3} onChange={onChangeInpNum} />
        </Col>
      </Row>
    </Input.Group>
    <br />
    </div>

    <Table 
      columns={columns}
      dataSource={data} 
      pagination={{ pageSize: 50 }} scroll={{ y: 250 }} />

    <Button type="primary">Добавить</Button>
    <a> </a>
    <Button>Отмена</Button>
  </>,
  document.getElementById('container'),
);