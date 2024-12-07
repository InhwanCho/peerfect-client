'use client';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from '@/_components/ui/multi-selector';
import { useState } from 'react';

export default function MultiInputs() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="">
      <MultiSelector values={value} onValuesChange={setValue}>
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
