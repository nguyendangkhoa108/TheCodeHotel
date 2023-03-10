import React from "react";
import { Select } from "antd";


const SelectComponent: React.FC = () => (
    <Select
      showSearch
      size='large'
      style={{ width: 200}}
      placeholder="Choose"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={[
        {
          value: '1',
          label: 'Vũng Tàu',
        },
        {
          value: '2',
          label: 'Hà Nội',
        },
        {
          value: '3',
          label: 'Hồ Chí Minh',
        },
        {
          value: '4',
          label: 'Đà Nẵng',
        },
        {
          value: '5',
          label: 'Hải Phòng',
        },
        {
          value: '6',
          label: 'Đà lạt',
        },
      ]}
    />
  );
  
  export default SelectComponent;