import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { isNumber } from 'lodash';
import { Grid, Typography } from '@material-ui/core';

import { MovieDetailsModel } from 'core/models';
import { apiPaths } from '../../constants';

export interface HeroSetting {
  dynamicBullets?: boolean;
  //  Set to false to disable swiping to next slide direction (to right or bottom)
  allowSlidePrev?: boolean;
  //  Set to false to disable swiping to previous slide direction (to left or top)
  allowSlideNext?: boolean;
  //  If false, then the only way to switch the slide is use of external API functions like slidePrev or slideNext
  allowTouchMove?: boolean;
  //  Set to true and slider wrapper will adapt its height to the height of the currently active slide
  autoHeight?: boolean;
  /*
        Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like slidesPerView, slidesPerGroup, spaceBetween, slidesPerColumn. Such parameters like loop and effect won't work
        {
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                  spaceBetween: 40
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                '@1.50': {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
            }
        }
    */
  breakpoints?: any;
  /*
        Base for breakpoints (beta). Can be window or container. If set to window (by default) then breakpoint keys mean window width. If set to container then breakpoint keys treated as swiper container width
        WARNING: Currently in beta and not supported by Swiper Angular, React, Svelte and Vue components
    */
  breakpointsBase?: string;
  //  When enabled it center slides if the amount of slides less than slidesPerView. Not intended to be used loop mode and slidesPerColumn
  centerInsufficientSlides?: boolean;
  //  If true, then active slide will be centered, not always on the left side.
  centeredSlides?: boolean;
  //  If true, then active slide will be centered without adding gaps at the beginning and end of slider. Required centeredSlides: true. Not intended to be used with loop or pagination
  centeredSlidesBounds?: boolean;
  //  The beginning of the modifier CSS class that can be added to swiper container depending on different parameters
  containerModifierClass?: string;
  //  When enabled Swiper will automatically wrap slides with swiper-wrapper element, and will create required elements for navigation, pagination and scrollbar they are enabled (with their respective params object or with boolean true))
  createElements?: boolean;
  /*
        When enabled it will use modern CSS Scroll Snap API. It doesn't support all of Swiper's features, but potentially should bring a much better performance in simple configurations.

        This is what is not supported when it is enabled:
        
        All effects (Fade, Coverflow, Flip, Cube)
        Zoom
        Virtual Slides
        speed parameter will have no effect
        All transition start/end related events (use slideChange instead)
        slidesPerGroup has limited support
        centeredSlides is not supported
        Changing slides with anything except touch/swipe and mousewheel will happen without transition in browsers without scrollTo.behaviour = 'smooth' support (e.g. in desktop and iOS Safari)
        simulateTouch doesn't have effect and "dragging" with mouse doesn't work
        resistance doesn't have any effect
        allowSlidePrev/Next
        swipeHandler
        freeMode and all relevant features
      */
  cssMode?: boolean;
  //  Can be 'horizontal' or 'vertical' (for vertical slider).
  direction?: 'horizontal' | 'vertical';
  //  Transition effect. Can be 'slide', 'fade', 'cube', 'coverflow' or 'flip'
  edgeSwipeDetection?: string | boolean;
  //  Whether Swiper initially enabled. When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
  enabled?: boolean;
  /*
      CSS selector for focusable elements. Swiping will be disabled on such elements if they are "focused"
      input, select, option, textarea, button, video, label
     */
  focusableElements?: string;
  //  If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it
  followFinger?: boolean;
  //  If enabled then slides will not have fixed positions
  freeMode?: boolean;
  //  Minimum touchmove-velocity required to trigger free mode momentum
  freeModeMinimumVelocity?: number;
  //  If enabled, then slide will keep moving for a while after you release it
  freeModeMomentum?: boolean;
  //  Set to false if you want to disable momentum bounce in free mode
  freeModeMomentumBounce?: boolean;
  //  Higher value produces larger momentum bounce effect
  freeModeMomentumBounceRatio?: number;
  //  Higher value produces larger momentum distance after you release slider
  freeModeMomentumRatio?: number;
  //  Higher value produces larger momentum velocity after you release slider
  freeModeMomentumVelocityRatio?: number;
  //  Set to enabled to enable snap to slides positions in free mode
  freeModeSticky?: boolean;
  //  This option may a little improve desktop usability. If true, user will see the "grab" cursor when hover on Swiper
  grabCursor?: boolean;
  //  Swiper height (in px). Parameter allows to force Swiper height. Useful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization
  //  WARNING: Setting this parameter will make Swiper not responsive
  height?: number;
  //  Whether Swiper should be initialised automatically when you create an instance. If disabled, then you need to init it manually by calling swiper.init()
  init?: boolean;
  //  Index number of initial slide.
  initialSlide?: number;
  //  Set to false if you want to disable long swipes
  longSwipes?: boolean;
  //  Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes
  longSwipesMs?: number;
  //  Ratio to trigger swipe to next/previous slide during long swipes
  longSwipesRatio?: number;
  /*
        Set to true to enable continuous loop mode
        Because of nature of how the loop mode works, it will add duplicated slides. Such duplicated slides will have additional classes:
        
        swiper-slide-duplicate - represents duplicated slide
        swiper-slide-duplicate-active - represents slide duplicated to the currently active slide
        swiper-slide-duplicate-next - represents slide duplicated to the slide next to active
        swiper-slide-duplicate-prev - represents slide duplicated to the slide previous to active

        WARNING: If you use it along with slidesPerView: 'auto' then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)
      */
  loop?: boolean;
  //  Addition number of slides that will be cloned after creating of loop
  loopAdditionalSlides?: number;
  //  Enable and loop mode will fill groups with insufficient number of slides with blank slides. Good to be used with slidesPerGroup parameter
  loopFillGroupWithBlank?: boolean;
  //  When enabled it prevents Swiper slide prev/next transitions when transitions is already in progress (has effect when loop enabled)
  loopPreventsSlide?: boolean;
  //  If you use slidesPerView:'auto' with loop mode you should tell to Swiper how many slides it should loop (duplicate) using this parameter
  loopedSlides?: number;
  //  Set to true on Swiper for correct touch events interception. Use only on swipers that use same direction as the parent one
  nested?: boolean;
  //  Enable/disable swiping on elements matched to class specified in noSwipingClass
  noSwiping?: boolean;
  //  Specify noSwiping's element css class
  noSwipingClass?: string;
  //  Can be used instead of noSwipingClass to specify elements to disable swiping on. For example 'input' will disable swiping on all inputs
  noSwipingSelector?: string;
  //  Normalize slide index.
  normalizeSlideIndex?: boolean;
  //  Set to true if you also need to watch Mutations for Swiper parent elements
  observeParents?: boolean;
  //  Set to true if you also need to watch Mutations for Swiper slide children elements
  observeSlideChildren?: boolean;
  //  Set to true to enable Mutation Observer on Swiper and its elements. In this case Swiper will be updated (reinitialized) each time if you change its style (like hide/show) or modify its child elements (like adding/removing slides)
  observer?: boolean;
  //  Register event handlers
  on?: any;
  //  Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices. But if you need to use e.preventDefault and you have conflict with it, then you should disable this parameter
  passiveListeners?: boolean;
  //  When enabled Swiper will force to load all images
  preloadImages?: boolean;
  //  Set to true to prevent accidental unwanted clicks on links during swiping
  preventClicks?: boolean;
  //  Set to true to stop clicks event propagation on links during swiping
  preventClicksPropagation?: boolean;
  //  When enabled it won't allow to change slides by swiping or navigation/pagination buttons during transition
  preventInteractionOnTransition?: boolean;
  //  Set to false if you want to disable resistant bounds
  resistance?: boolean;
  //  This option allows you to control resistance ratio
  resistanceRatio?: number;
  //    When enabled it will use ResizeObserver (if supported by browser) on swiper container to detect container resize (instead of watching for window resize)
  resizeObserver?: boolean;
  //  Set to true to round values of slides width and height to prevent blurry texts on usual resolution screens (if you have such)
  roundLengths?: boolean;
  //    Fire Transition/SlideChange/Start/End events on swiper initialization. Such events will be fired on initialization in case of your initialSlide is not 0, or you use loop mode
  runCallbacksOnInit?: boolean;
  //    Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides. Mostly should be used as compatibility fallback option for browser that don't support flexbox layout well
  setWrapperSize?: boolean;
  //  Set to false if you want to disable short swipes
  shortSwipes?: boolean;
  //    If true, Swiper will accept mouse events like touch events (click and drag to change slides)
  simulateTouch?: boolean;
  //    CSS class name of currently active slide
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue components
  slideActiveClass?: string;
  //    CSS class name of blank slide append to fill groups in loop mode when loopFillGroupWithBlank is also enabled
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue
  slideBlankClass?: string;
  //  CSS class name of slide
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue components
  slideClass?: string;
  //  CSS class name of duplicated slide which represents the currently active slide
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue components
  slideDuplicateActiveClass?: string;
  //  CSS class name of slide duplicated by loop mode
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue
  slideDuplicateClass?: string;
  //  CSS class name of duplicated slide which represents the slide next to active slide
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue
  slideDuplicateNextClass?: string;
  //  CSS class name of duplicated slide which represents the slide previous to active slide
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue
  slideDuplicatePrevClass?: string;
  //  CSS class name of slide which is right after currently active slide
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue
  slideNextClass?: string;
  //  CSS class name of slide which is right before currently active slide
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue
  slidePrevClass?: string;
  //  Set to true and click on any slide will produce transition to this slide
  slideToClickedSlide?: boolean;
  //  CSS class name of currently visible slide
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue
  slideVisibleClass?: string;
  //  Add (in px) additional slide offset in the end of the container (after all slides)
  slidesOffsetAfter?: number;
  //  Add (in px) additional slide offset in the beginning of the container (before all slides)
  slidesOffsetBefore?: number;
  //    Number of slides per column, for multirow layout
  //    WARNING: slidesPerColumn > 1 is currently not compatible with loop mode (loop: true)
  slidesPerColumn?: number;
  //  Can be 'column' or 'row'. Defines how slides should fill rows, by column or by row
  slidesPerColumnFill?: 'row' | 'column';
  //  Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
  slidesPerGroup?: number;
  //    The parameter works in the following way: If slidesPerGroupSkip equals 0 (default), no slides are excluded from grouping, and the resulting behaviour is the same as without this change.
  //
  // If slidesPerGroupSkip is equal or greater than 1 the first X slides are treated as single groups, whereas all following slides are grouped by the slidesPerGroup value.
  slidesPerGroupSkip?: number;
  //  Number of slides per view (slides visible at the same time on slider's container).
  // WARNING: If you use it with "auto" value and along with loop: true then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)
  // WARNING: slidesPerView: 'auto' is currently not compatible with multirow mode, when slidesPerColumn > 1
  slidesPerView?: 'auto' | number;
  //  Distance between slides in px.
  //    WARNING: If you use "margin" css property to the elements which go into Swiper in which you pass "spaceBetween" into, navigation might not work property.
  spaceBetween?: number;
  //  Duration of transition between slides (in ms)
  speed?: number;
  //    String with CSS selector or HTML element of the container with pagination that will work as only available handler for swiping
  swipeHandler?: HTMLElement | string;
  //    Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
  threshold?: number;
  //    Allowable angle (in degrees) to trigger touch move
  touchAngle?: number;
  //    Target element to listen touch events on. Can be 'container' (to listen for touch events on swiper-container) or 'wrapper'(to listen for touch events on swiper-wrapper)
  touchEventsTarget?: 'container' | 'wrapper';
  //  If enabled, then propagation of "touchmove" will be stopped
  touchMoveStopPropagation?: boolean;
  //    Touch ratio
  touchRatio?: number;
  //  Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling
  touchReleaseOnEdges?: boolean;
  //    Force to always prevent default for touchstart (mousedown) event
  touchStartForcePreventDefault?: boolean;
  //    If disabled, touchstart (mousedown) event won't be prevented
  touchStartPreventDefault?: boolean;
  //    If enabled (by default) and navigation elements' parameters passed as a string (like ".pagination") then Swiper will look for such elements through child elements first. Applies for pagination, prev/next buttons and scrollbar elements
  uniqueNavElements?: boolean;
  //    When enabled Swiper will be reinitialized after all inner images ( tags) are loaded. Required preloadImages: true
  updateOnImagesReady?: boolean;
  //    Swiper will recalculate slides position on window resize (orientationchange)
  updateOnWindowResize?: boolean;
  //  Required for active slide detection when rendered on server-side and enabled history
  url?: string;
  //    userAgent string. Required for browser/device detection when rendered on server-side
  userAgent?: string;
  //    Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set. Useful when you may need to create custom slide transition
  virtualTranslate?: boolean;
  //    When enabled Swiper will be disabled and hide navigation buttons on case there are not enough slides for sliding.
  watchOverflow?: boolean;
  //    Enable this feature to calculate each slides progress
  watchSlidesProgress?: boolean;
  //    watchSlidesProgress should be enabled. Enable this option and slides that are in viewport will have additional visible class
  watchSlidesVisibility?: boolean;
  //  Swiper width (in px). Parameter allows to force Swiper width. Useful only if you initialize Swiper when it is hidden and in SSR and Test environments for correct Swiper initialization
  //    WARNING: Setting this parameter will make Swiper not responsive
  width?: number;
  //    CSS class name of slides' wrapper
  //    WARNING: By changing classes you will also need to change Swiper's CSS to reflect changed classes
  //    WARNING: Not supported in Swiper Angular/React/Svelte/Vue
  wrapperClass?: string;
  //  Add event listener that will be fired on all events
  onAny?: (event: any, ...args: any) => any;
}

export interface HeroProps {
  height?: number | string;
  setting?: HeroSetting;
  data: MovieDetailsModel;
}

export interface HeroContainerProps {
  height?: number | string;
}

export const HeroHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--hero-item-background-color);
`;

export const HeroTitle = styled(Typography)`
  color: white;
`;

export const HeroDescription = styled(Typography)`
  width: 100%;
  padding: 0 0 0 1rem;
`;

const heroDefaultSettings: HeroSetting = {
  dynamicBullets: true
};

const HeroContainer = styled.div``;

const HeroSwiper = styled<any>(Swiper)`
  height: ${({ height = '100vh' }: HeroContainerProps) =>
    isNumber(height) ? `${height}px` : height};
`;

export const HeroCoverImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Hero({
  height = '100vh',
  setting = heroDefaultSettings,
  data
}: HeroProps): JSX.Element {
  return (
    <HeroContainer>
      <HeroSwiper height={height} className="hero" {...setting}>
        <SwiperSlide className="hero__container">
          <HeroCoverImage
            alt={data.original_title}
            src={`${apiPaths.themoviedbPostersUrl}/${data.poster_path}`}
            className="hero__container__cover_image"
          />

          <HeroHeader className="hero__container__header">
            <HeroTitle variant="h1" className="hero__container__header__title">
              {data.original_title}
            </HeroTitle>
          </HeroHeader>
        </SwiperSlide>
      </HeroSwiper>

      <br />

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <HeroDescription
            variant="body1"
            className="hero__container__header__title"
          >
            {data.overview}
          </HeroDescription>
        </Grid>

        <Grid item xs={12}>
          <HeroDescription
            variant="body1"
            className="hero__container__header__title"
          >
            {data.tagline}
          </HeroDescription>
        </Grid>
      </Grid>

      <br />
    </HeroContainer>
  );
}
