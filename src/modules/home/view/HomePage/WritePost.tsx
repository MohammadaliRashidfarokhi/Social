import { Card, CardContent, CardHeader, CardFooter } from '@/lib/shadcn-components/ui/card.tsx'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Textarea } from '@/lib/shadcn-components/ui/textarea.tsx'
import { useState } from 'react'
import { useTranslation } from '@/locales/i18n.ts'

type Props = {
  onSubmit: (content: string) => Promise<void>
}

export const WritePost = (props: Props) => {
  const { t } = useTranslation()
  const [content, setContent] = useState<string>('')

  const handleSubmit = () => {
    props.onSubmit(content).then(() => {
      setContent('')
    })
  }

  return (
    <Card>
      <CardHeader className={'py-3'}>
        <h3 className={'text-white text-2xl font-bold'}>{t('write-post')}</h3>
      </CardHeader>
      <CardContent className={'text-white pb-2.5'}>
        <Textarea
          className={'bg-black min-h-12 text-md p-0 border-none ring-offset-black'}
          placeholder={t('write-post-placeholder')}
          value={content}
          onChange={(event) => {
            setContent(event.target.value)
          }}
        />
      </CardContent>
      <CardFooter>
        <Button className={'w-full'} onClick={handleSubmit}>
          Post
        </Button>
      </CardFooter>
    </Card>
  )
}