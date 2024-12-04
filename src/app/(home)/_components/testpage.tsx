import React, { useState } from 'react';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from './tem';

export default function TestPage() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="flex items-center justify-center">
      <MultiSelector
        values={value}
        onValuesChange={setValue}
        className="max-w-xs"
      >
        <MultiSelectorTrigger>
          <MultiSelectorInput placeholder="사용한 툴을 선택해 주세요." />
        </MultiSelectorTrigger>
        <MultiSelectorContent>
          <MultiSelectorList>
            <MultiSelectorItem value={'Figma'}>Figma</MultiSelectorItem>
            <MultiSelectorItem value={'Sketch'}>Sketch</MultiSelectorItem>
            <MultiSelectorItem value={'Illustrator'}>
              Illustrator
            </MultiSelectorItem>
          </MultiSelectorList>
        </MultiSelectorContent>
      </MultiSelector>
    </div>
  );
}
