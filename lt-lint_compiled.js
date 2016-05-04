if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj29167 = {};return obj29167;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj29169 = {};return obj29169;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj29171 = {};return obj29171;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj29173 = {};return obj29173;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj29175 = {};return obj29175;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){return b;
});
var add_BANG___2 = (function (b,itm){if(!((itm == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"itm","itm",-1640426917,null)))))].join('')));
}
return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj29177 = {};return obj29177;
})();
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.buffers')) {
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function acopy(src,src_start,dest,dest_start,len){var cnt = 0;while(true){
if((cnt < len))
{(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));
{
var G__29113 = (cnt + 1);
cnt = G__29113;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){var self__ = this;
var _ = this;if((self__.length === 0))
{return null;
} else
{var x = (self__.arr[self__.tail]);(self__.arr[self__.tail] = null);
self__.tail = ((self__.tail + 1) % self__.arr.length);
self__.length = (self__.length - 1);
return x;
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){var self__ = this;
var _ = this;(self__.arr[self__.head] = x);
self__.head = ((self__.head + 1) % self__.arr.length);
self__.length = (self__.length + 1);
return null;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){var self__ = this;
var this$ = this;if(((self__.length + 1) === self__.arr.length))
{this$.resize();
} else
{}
return this$.unshift(x);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){var self__ = this;
var _ = this;var new_arr_size = (self__.arr.length * 2);var new_arr = (new Array(new_arr_size));if((self__.tail < self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,self__.length);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail > self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,(self__.arr.length - self__.tail));
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,0,new_arr,(self__.arr.length - self__.tail),self__.head);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail === self__.head))
{self__.tail = 0;
self__.head = 0;
return self__.arr = new_arr;
} else
{return null;
}
}
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){var self__ = this;
var this$ = this;var n__20651__auto__ = self__.length;var x = 0;while(true){
if((x < n__20651__auto__))
{var v_29114 = this$.pop();if(keep_QMARK_.call(null,v_29114))
{this$.unshift(v_29114);
} else
{}
{
var G__29115 = (x + 1);
x = G__29115;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.buffers.__GT_RingBuffer = (function __GT_RingBuffer(head,tail,length,arr){return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});
cljs.core.async.impl.buffers.ring_buffer = (function ring_buffer(n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),0)))].join('')));
}
return (new cljs.core.async.impl.buffers.RingBuffer(0,0,0,(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.buf.length === self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;self__.buf.unbounded_unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function __GT_FixedBuffer(buf,n){return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{} else
{self__.buf.unshift(itm);
}
return this$__$1;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function __GT_DroppingBuffer(buf,n){return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else
{}
self__.buf.unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function __GT_SlidingBuffer(buf,n){return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_29163 = 0;while(true){
var m_29164 = cljs.core.async.impl.dispatch.tasks.pop();if((m_29164 == null))
{} else
{m_29164.call(null);
if((count_29163 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__29165 = (count_29163 + 1);
count_29163 = G__29165;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__19791__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__19791__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.channels')) {
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t29119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t29119 = (function (val,box,meta29120){
this.val = val;
this.box = box;
this.meta29120 = meta29120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t29119.cljs$lang$type = true;
cljs.core.async.impl.channels.t29119.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t29119";
cljs.core.async.impl.channels.t29119.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t29119");
});
cljs.core.async.impl.channels.t29119.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t29119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29121){var self__ = this;
var _29121__$1 = this;return self__.meta29120;
});
cljs.core.async.impl.channels.t29119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29121,meta29120__$1){var self__ = this;
var _29121__$1 = this;return (new cljs.core.async.impl.channels.t29119(self__.val,self__.box,meta29120__$1));
});
cljs.core.async.impl.channels.__GT_t29119 = (function __GT_t29119(val__$1,box__$1,meta29120){return (new cljs.core.async.impl.channels.t29119(val__$1,box__$1,meta29120));
});
}
return (new cljs.core.async.impl.channels.t29119(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__20373__auto__,writer__20374__auto__,opts__20375__auto__){return cljs.core._write.call(null,writer__20374__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;
cljs.core.async.impl.channels.MMC = (function (){var obj29123 = {};return obj29123;
})();
cljs.core.async.impl.channels.abort = (function abort(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.closed;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (self__.puts.length === 0);
} else
{return and__19791__auto__;
}
})()))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
while(true){
var taker_29138 = self__.takes.pop();if((taker_29138 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_29138))
{var take_cb_29139 = cljs.core.async.impl.protocols.commit.call(null,taker_29138);var val_29140 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_29139,val_29140,taker_29138,this$__$1){
return (function (){return take_cb_29139.call(null,val_29140);
});})(take_cb_29139,val_29140,taker_29138,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf)))
{} else
{var putter_29141 = self__.puts.pop();if((putter_29141 == null))
{} else
{var put_handler_29142 = putter_29141.handler;var val_29143 = putter_29141.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_29142))
{var put_cb_29144 = cljs.core.async.impl.protocols.commit.call(null,put_handler_29142);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_29144,put_handler_29142,val_29143,putter_29141,_,retval,this$__$1){
return (function (){return put_cb_29144.call(null,true);
});})(put_cb_29144,put_handler_29142,val_29143,putter_29141,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_29143)))
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
} else
{}
{
continue;
}
}
}
break;
}
return retval;
} else
{var putter = (function (){while(true){
var putter = self__.puts.pop();if(cljs.core.truth_(putter))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler))
{return putter;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(putter))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,putter.val);
} else
{if(cljs.core.truth_(self__.closed))
{if(cljs.core.truth_(self__.buf))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__19791__auto__;
}
})()))
{var has_val = (function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})();var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);return cljs.core.async.impl.channels.box.call(null,val);
} else
{return null;
}
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = 0;
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + 1);
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"takes","takes",-1530407291,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)))))].join('')));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else
{return and__19791__auto__;
}
})()))
{cljs.core.async.impl.protocols.commit.call(null,handler);
var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));while(true){
if(((self__.takes.length > 0)) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var taker_29145 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_29145))
{var take_cb_29146 = cljs.core.async.impl.protocols.commit.call(null,taker_29145);var val_29147__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_29146,val_29147__$1,taker_29145,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_29146.call(null,val_29147__$1);
});})(take_cb_29146,val_29147__$1,taker_29145,done_QMARK_,closed__$1,this$__$1))
);
} else
{{
continue;
}
}
} else
{}
break;
}
if(done_QMARK_)
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
return cljs.core.async.impl.channels.box.call(null,true);
} else
{var taker = (function (){while(true){
var taker = self__.takes.pop();if(cljs.core.truth_(taker))
{if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)))
{return taker;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,true);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = 0;
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + 1);
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"puts","puts",-1637078787,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;while(true){
var putter_29148 = self__.puts.pop();if((putter_29148 == null))
{} else
{var put_handler_29149 = putter_29148.handler;var val_29150 = putter_29148.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_29149))
{var put_cb_29151 = cljs.core.async.impl.protocols.commit.call(null,put_handler_29149);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_29151,put_handler_29149,val_29150,putter_29148,this$__$1){
return (function (){return put_cb_29151.call(null,true);
});})(put_cb_29151,put_handler_29149,val_29150,putter_29148,this$__$1))
);
} else
{{
continue;
}
}
}
break;
}
self__.puts.cleanup(cljs.core.constantly.call(null,false));
return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});
cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){console.log(ex);
return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){var else$ = (function (){var or__19803__auto__ = exh;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);if((else$ == null))
{return buf;
} else
{return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){return chan.call(null,buf,null);
});
var chan__2 = (function (buf,xform){return chan.call(null,buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);return ((function (add_BANG_){
return (function() {
var G__29152 = null;
var G__29152__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e29126){var t = e29126;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__29152__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e29127){var t = e29127;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__29152 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__29152__1.call(this,buf__$1);
case 2:
return G__29152__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29152;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.timers')) {
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = 15;
cljs.core.async.impl.timers.P = (1 / 2);
cljs.core.async.impl.timers.random_level = (function() {
var random_level = null;
var random_level__0 = (function (){return random_level.call(null,0);
});
var random_level__1 = (function (level){while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))
{{
var G__29198 = (level + 1);
level = G__29198;
continue;
}
} else
{return level;
}
break;
}
});
random_level = function(level){
switch(arguments.length){
case 0:
return random_level__0.call(this);
case 1:
return random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_level.cljs$core$IFn$_invoke$arity$0 = random_level__0;
random_level.cljs$core$IFn$_invoke$arity$1 = random_level__1;
return random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipListNode");
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.async.impl.timers.__GT_SkipListNode = (function __GT_SkipListNode(key,val,forward){return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});
cljs.core.async.impl.timers.skip_list_node = (function() {
var skip_list_node = null;
var skip_list_node__1 = (function (level){return skip_list_node.call(null,null,null,level);
});
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_29199 = 0;while(true){
if((i_29199 < arr.length))
{(arr[i_29199] = null);
{
var G__29200 = (i_29199 + 1);
i_29199 = G__29200;
continue;
}
} else
{}
break;
}
return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return skip_list_node__1.call(this,k);
case 3:
return skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_list_node.cljs$core$IFn$_invoke$arity$1 = skip_list_node__1;
skip_list_node.cljs$core$IFn$_invoke$arity$3 = skip_list_node__3;
return skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var least_greater_node = null;
var least_greater_node__3 = (function (x,k,level){return least_greater_node.call(null,x,k,level,null);
});
var least_greater_node__4 = (function (x,k,level,update){while(true){
if(!((level < 0)))
{var x__$1 = (function (){var x__$1 = x;while(true){
var temp__4090__auto__ = (x__$1.forward[level]);if(cljs.core.truth_(temp__4090__auto__))
{var x_SINGLEQUOTE_ = temp__4090__auto__;if((x_SINGLEQUOTE_.key < k))
{{
var G__29201 = x_SINGLEQUOTE_;
x__$1 = G__29201;
continue;
}
} else
{return x__$1;
}
} else
{return x__$1;
}
break;
}
})();if((update == null))
{} else
{(update[level] = x__$1);
}
{
var G__29202 = x__$1;
var G__29203 = k;
var G__29204 = (level - 1);
var G__29205 = update;
x = G__29202;
k = G__29203;
level = G__29204;
update = G__29205;
continue;
}
} else
{return x;
}
break;
}
});
least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return least_greater_node__3.call(this,x,k,level);
case 4:
return least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
least_greater_node.cljs$core$IFn$_invoke$arity$3 = least_greater_node__3;
least_greater_node.cljs$core$IFn$_invoke$arity$4 = least_greater_node__4;
return least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipList");
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var iter = ((function (coll__$1){
return (function iter(node){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){if((node == null))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),iter.call(null,(node.forward[0])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[0]));
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{return x__$1.val = v;
} else
{var new_level = cljs.core.async.impl.timers.random_level.call(null);if((new_level > self__.level))
{var i_29206 = (self__.level + 1);while(true){
if((i_29206 <= (new_level + 1)))
{(update[i_29206] = self__.header);
{
var G__29207 = (i_29206 + 1);
i_29206 = G__29207;
continue;
}
} else
{}
break;
}
self__.level = new_level;
} else
{}
var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));var i = 0;while(true){
if((i <= self__.level))
{var links = (update[i]).forward;(x__$2.forward[i] = (links[i]));
return (links[i] = x__$2);
} else
{return null;
}
break;
}
}
});
cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{var i_29208 = 0;while(true){
if((i_29208 <= self__.level))
{var links_29209 = (update[i_29208]).forward;if(((links_29209[i_29208]) === x__$1))
{(links_29209[i_29208] = (x__$1.forward[i_29208]));
{
var G__29210 = (i_29208 + 1);
i_29208 = G__29210;
continue;
}
} else
{{
var G__29211 = (i_29208 + 1);
i_29208 = G__29211;
continue;
}
}
} else
{}
break;
}
while(true){
if(((self__.level > 0)) && (((self__.header.forward[self__.level]) == null)))
{self__.level = (self__.level - 1);
{
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if((x_SINGLEQUOTE_ == null))
{return null;
} else
{if((x_SINGLEQUOTE_.key >= k))
{return x_SINGLEQUOTE_;
} else
{{
var G__29212 = x_SINGLEQUOTE_;
x__$1 = G__29212;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__29213 = nx;
var G__29214 = (level__$1 - 1);
x = G__29213;
level__$1 = G__29214;
continue;
}
} else
{{
var G__29215 = x;
var G__29216 = (level__$1 - 1);
x = G__29215;
level__$1 = G__29216;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if(!((x_SINGLEQUOTE_ == null)))
{if((x_SINGLEQUOTE_.key > k))
{return x__$1;
} else
{{
var G__29217 = x_SINGLEQUOTE_;
x__$1 = G__29217;
continue;
}
}
} else
{if((level__$1 === 0))
{return x__$1;
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(nx))
{{
var G__29218 = nx;
var G__29219 = (level__$1 - 1);
x = G__29218;
level__$1 = G__29219;
continue;
}
} else
{{
var G__29220 = x;
var G__29221 = (level__$1 - 1);
x = G__29220;
level__$1 = G__29221;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.__GT_SkipList = (function __GT_SkipList(header,level){return (new cljs.core.async.impl.timers.SkipList(header,level));
});
cljs.core.async.impl.timers.skip_list = (function skip_list(){return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,0),0));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = 10;
/**
* returns a channel that will close after msecs
*/
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__19803__auto__ = (cljs.core.truth_((function (){var and__19791__auto__ = me;if(cljs.core.truth_(and__19791__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__19791__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__19803__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__19803__auto__,timeout__$1,me))
,msecs);
return timeout_channel;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.ioc-helpers')) {
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t29043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t29043 = (function (f,fn_handler,meta29044){
this.f = f;
this.fn_handler = fn_handler;
this.meta29044 = meta29044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t29043.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t29043.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t29043";
cljs.core.async.impl.ioc_helpers.t29043.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t29043");
});
cljs.core.async.impl.ioc_helpers.t29043.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t29043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t29043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t29043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29045){var self__ = this;
var _29045__$1 = this;return self__.meta29044;
});
cljs.core.async.impl.ioc_helpers.t29043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29045,meta29044__$1){var self__ = this;
var _29045__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t29043(self__.f,self__.fn_handler,meta29044__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t29043 = (function __GT_t29043(f__$1,fn_handler__$1,meta29044){return (new cljs.core.async.impl.ioc_helpers.t29043(f__$1,fn_handler__$1,meta29044));
});
}
return (new cljs.core.async.impl.ioc_helpers.t29043(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e29047){if((e29047 instanceof Object))
{var ex = e29047;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29047;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_29050_29093 = state;(statearr_29050_29093[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_29050_29093[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_29051_29094 = state;(statearr_29051_29094[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_29051_29094[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_29054_29095 = state;(statearr_29054_29095[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_29054_29095[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_29055_29096 = state;(statearr_29055_29096[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_29055_29096[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29056){var map__29061 = p__29056;var map__29061__$1 = ((cljs.core.seq_QMARK_.call(null,map__29061))?cljs.core.apply.call(null,cljs.core.hash_map,map__29061):map__29061);var opts = map__29061__$1;var statearr_29062_29097 = state;(statearr_29062_29097[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__29061,map__29061__$1,opts){
return (function (val){var statearr_29063_29098 = state;(statearr_29063_29098[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29061,map__29061__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_29064_29099 = state;(statearr_29064_29099[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29056 = null;if (arguments.length > 3) {
  p__29056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29056);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29100){
var state = cljs.core.first(arglist__29100);
arglist__29100 = cljs.core.next(arglist__29100);
var cont_block = cljs.core.first(arglist__29100);
arglist__29100 = cljs.core.next(arglist__29100);
var ports = cljs.core.first(arglist__29100);
var p__29056 = cljs.core.rest(arglist__29100);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29056);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k29066,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k29066,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29066,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29066,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29066,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29066,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k29066,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__29065){var self__ = this;
var this__20396__auto____$1 = this;var pred__29068 = cljs.core.keyword_identical_QMARK_;var expr__29069 = k__20397__auto__;if(cljs.core.truth_(pred__29068.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__29069)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__29065,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29068.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__29069)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__29065,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29068.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__29069)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__29065,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29068.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__29069)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__29065,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29068.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__29069)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__29065,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__29065),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
var this__20385__auto____$1 = this;if(cljs.core.truth_((function (){var and__19791__auto__ = other__20386__auto__;if(cljs.core.truth_(and__19791__auto__))
{return ((this__20385__auto____$1.constructor === other__20386__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20385__auto____$1,other__20386__auto__));
} else
{return and__19791__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__29065){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__29065,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__29067){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__29067),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__29067),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__29067),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__29067),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__29067),null,cljs.core.dissoc.call(null,G__29067,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_29072 = state;(statearr_29072[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_29072;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__19791__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = catch_block;if(cljs.core.truth_(and__19791__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_29078 = state;(statearr_29078[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_29078[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_29078[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_29078[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_29078;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_29079_29101 = state;(statearr_29079_29101[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__29102 = state;
state = G__29102;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = cljs.core.not.call(null,catch_block);if(and__19791__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_29080 = state;(statearr_29080[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29080[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_29080;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_29081 = state;(statearr_29081[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29081[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_29081;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_29082 = state;(statearr_29082[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29082[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_29082;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("No matching clause"));
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async')) {
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25961 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25961 = (function (f,fn_handler,meta25962){
this.f = f;
this.fn_handler = fn_handler;
this.meta25962 = meta25962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25961.cljs$lang$type = true;
cljs.core.async.t25961.cljs$lang$ctorStr = "cljs.core.async/t25961";
cljs.core.async.t25961.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25961");
});
cljs.core.async.t25961.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25963){var self__ = this;
var _25963__$1 = this;return self__.meta25962;
});
cljs.core.async.t25961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25963,meta25962__$1){var self__ = this;
var _25963__$1 = this;return (new cljs.core.async.t25961(self__.f,self__.fn_handler,meta25962__$1));
});
cljs.core.async.__GT_t25961 = (function __GT_t25961(f__$1,fn_handler__$1,meta25962){return (new cljs.core.async.t25961(f__$1,fn_handler__$1,meta25962));
});
}
return (new cljs.core.async.t25961(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25965 = buff;if(G__25965)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25965.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25965.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25965);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25965);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",1080054743,null)))].join('')));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_28668 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28668);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28668,ret){
return (function (){return fn1.call(null,val_28668);
});})(val_28668,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___28669 = n;var x_28670 = 0;while(true){
if((x_28670 < n__20651__auto___28669))
{(a[x_28670] = 0);
{
var G__28671 = (x_28670 + 1);
x_28670 = G__28671;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__28672 = (i + 1);
i = G__28672;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25969 = (function (flag,alt_flag,meta25970){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25970 = meta25970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25969.cljs$lang$type = true;
cljs.core.async.t25969.cljs$lang$ctorStr = "cljs.core.async/t25969";
cljs.core.async.t25969.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25969");
});})(flag))
;
cljs.core.async.t25969.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25971){var self__ = this;
var _25971__$1 = this;return self__.meta25970;
});})(flag))
;
cljs.core.async.t25969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25971,meta25970__$1){var self__ = this;
var _25971__$1 = this;return (new cljs.core.async.t25969(self__.flag,self__.alt_flag,meta25970__$1));
});})(flag))
;
cljs.core.async.__GT_t25969 = ((function (flag){
return (function __GT_t25969(flag__$1,alt_flag__$1,meta25970){return (new cljs.core.async.t25969(flag__$1,alt_flag__$1,meta25970));
});})(flag))
;
}
return (new cljs.core.async.t25969(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25975 = (function (cb,flag,alt_handler,meta25976){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25976 = meta25976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25975.cljs$lang$type = true;
cljs.core.async.t25975.cljs$lang$ctorStr = "cljs.core.async/t25975";
cljs.core.async.t25975.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25975");
});
cljs.core.async.t25975.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25977){var self__ = this;
var _25977__$1 = this;return self__.meta25976;
});
cljs.core.async.t25975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25977,meta25976__$1){var self__ = this;
var _25977__$1 = this;return (new cljs.core.async.t25975(self__.cb,self__.flag,self__.alt_handler,meta25976__$1));
});
cljs.core.async.__GT_t25975 = (function __GT_t25975(cb__$1,flag__$1,alt_handler__$1,meta25976){return (new cljs.core.async.t25975(cb__$1,flag__$1,alt_handler__$1,meta25976));
});
}
return (new cljs.core.async.t25975(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25978_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25978_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25979_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25979_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19803__auto__ = wport;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__28673 = (i + 1);
i = G__28673;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19803__auto__ = ret;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__19791__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__25980){var map__25982 = p__25980;var map__25982__$1 = ((cljs.core.seq_QMARK_.call(null,map__25982))?cljs.core.apply.call(null,cljs.core.hash_map,map__25982):map__25982);var opts = map__25982__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25980 = null;if (arguments.length > 1) {
  p__25980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25980);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28674){
var ports = cljs.core.first(arglist__28674);
var p__25980 = cljs.core.rest(arglist__28674);
return alts_BANG___delegate(ports,p__25980);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__22463__auto___28675 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28675){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28675){
return (function (state_26053){var state_val_26054 = (state_26053[1]);if((state_val_26054 === 1))
{var state_26053__$1 = state_26053;var statearr_26055_28676 = state_26053__$1;(statearr_26055_28676[2] = null);
(statearr_26055_28676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 2))
{var state_26053__$1 = state_26053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26053__$1,4,from);
} else
{if((state_val_26054 === 3))
{var inst_26051 = (state_26053[2]);var state_26053__$1 = state_26053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26053__$1,inst_26051);
} else
{if((state_val_26054 === 4))
{var inst_26032 = (state_26053[7]);var inst_26032__$1 = (state_26053[2]);var inst_26033 = (inst_26032__$1 == null);var state_26053__$1 = (function (){var statearr_26056 = state_26053;(statearr_26056[7] = inst_26032__$1);
return statearr_26056;
})();if(cljs.core.truth_(inst_26033))
{var statearr_26057_28677 = state_26053__$1;(statearr_26057_28677[1] = 5);
} else
{var statearr_26058_28678 = state_26053__$1;(statearr_26058_28678[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 5))
{var state_26053__$1 = state_26053;if(cljs.core.truth_(close_QMARK_))
{var statearr_26059_28679 = state_26053__$1;(statearr_26059_28679[1] = 8);
} else
{var statearr_26060_28680 = state_26053__$1;(statearr_26060_28680[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 6))
{var inst_26032 = (state_26053[7]);var state_26053__$1 = state_26053;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26053__$1,11,to,inst_26032);
} else
{if((state_val_26054 === 7))
{var inst_26049 = (state_26053[2]);var state_26053__$1 = state_26053;var statearr_26061_28681 = state_26053__$1;(statearr_26061_28681[2] = inst_26049);
(statearr_26061_28681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 8))
{var inst_26036 = cljs.core.async.close_BANG_.call(null,to);var state_26053__$1 = state_26053;var statearr_26062_28682 = state_26053__$1;(statearr_26062_28682[2] = inst_26036);
(statearr_26062_28682[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 9))
{var state_26053__$1 = state_26053;var statearr_26063_28683 = state_26053__$1;(statearr_26063_28683[2] = null);
(statearr_26063_28683[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 10))
{var inst_26039 = (state_26053[2]);var state_26053__$1 = state_26053;var statearr_26064_28684 = state_26053__$1;(statearr_26064_28684[2] = inst_26039);
(statearr_26064_28684[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 11))
{var inst_26042 = (state_26053[2]);var state_26053__$1 = state_26053;if(cljs.core.truth_(inst_26042))
{var statearr_26065_28685 = state_26053__$1;(statearr_26065_28685[1] = 12);
} else
{var statearr_26066_28686 = state_26053__$1;(statearr_26066_28686[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 12))
{var state_26053__$1 = state_26053;var statearr_26067_28687 = state_26053__$1;(statearr_26067_28687[2] = null);
(statearr_26067_28687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 13))
{var state_26053__$1 = state_26053;var statearr_26068_28688 = state_26053__$1;(statearr_26068_28688[2] = null);
(statearr_26068_28688[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26054 === 14))
{var inst_26047 = (state_26053[2]);var state_26053__$1 = state_26053;var statearr_26069_28689 = state_26053__$1;(statearr_26069_28689[2] = inst_26047);
(statearr_26069_28689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28675))
;return ((function (switch__22387__auto__,c__22463__auto___28675){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26073 = [null,null,null,null,null,null,null,null];(statearr_26073[0] = state_machine__22388__auto__);
(statearr_26073[1] = 1);
return statearr_26073;
});
var state_machine__22388__auto____1 = (function (state_26053){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26053);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26074){if((e26074 instanceof Object))
{var ex__22391__auto__ = e26074;var statearr_26075_28690 = state_26053;(statearr_26075_28690[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28691 = state_26053;
state_26053 = G__28691;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26053){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28675))
})();var state__22465__auto__ = (function (){var statearr_26076 = f__22464__auto__.call(null);(statearr_26076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28675);
return statearr_26076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28675))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"n","n",-1640531417,null))))].join('')));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__26259){var vec__26260 = p__26259;var v = cljs.core.nth.call(null,vec__26260,0,null);var p = cljs.core.nth.call(null,vec__26260,1,null);var job = vec__26260;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22463__auto___28692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28692,res,vec__26260,v,p,job,jobs,results){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28692,res,vec__26260,v,p,job,jobs,results){
return (function (state_26265){var state_val_26266 = (state_26265[1]);if((state_val_26266 === 2))
{var inst_26262 = (state_26265[2]);var inst_26263 = cljs.core.async.close_BANG_.call(null,res);var state_26265__$1 = (function (){var statearr_26267 = state_26265;(statearr_26267[7] = inst_26262);
return statearr_26267;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26265__$1,inst_26263);
} else
{if((state_val_26266 === 1))
{var state_26265__$1 = state_26265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26265__$1,2,res,v);
} else
{return null;
}
}
});})(c__22463__auto___28692,res,vec__26260,v,p,job,jobs,results))
;return ((function (switch__22387__auto__,c__22463__auto___28692,res,vec__26260,v,p,job,jobs,results){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26271 = [null,null,null,null,null,null,null,null];(statearr_26271[0] = state_machine__22388__auto__);
(statearr_26271[1] = 1);
return statearr_26271;
});
var state_machine__22388__auto____1 = (function (state_26265){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26265);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26272){if((e26272 instanceof Object))
{var ex__22391__auto__ = e26272;var statearr_26273_28693 = state_26265;(statearr_26273_28693[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28694 = state_26265;
state_26265 = G__28694;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26265){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28692,res,vec__26260,v,p,job,jobs,results))
})();var state__22465__auto__ = (function (){var statearr_26274 = f__22464__auto__.call(null);(statearr_26274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28692);
return statearr_26274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28692,res,vec__26260,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26275){var vec__26276 = p__26275;var v = cljs.core.nth.call(null,vec__26276,0,null);var p = cljs.core.nth.call(null,vec__26276,1,null);var job = vec__26276;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___28695 = n;var __28696 = 0;while(true){
if((__28696 < n__20651__auto___28695))
{var G__26277_28697 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__26277_28697))
{var c__22463__auto___28698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28696,c__22463__auto___28698,G__26277_28697,n__20651__auto___28695,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (__28696,c__22463__auto___28698,G__26277_28697,n__20651__auto___28695,jobs,results,process,async){
return (function (state_26290){var state_val_26291 = (state_26290[1]);if((state_val_26291 === 7))
{var inst_26286 = (state_26290[2]);var state_26290__$1 = state_26290;var statearr_26292_28699 = state_26290__$1;(statearr_26292_28699[2] = inst_26286);
(statearr_26292_28699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 6))
{var state_26290__$1 = state_26290;var statearr_26293_28700 = state_26290__$1;(statearr_26293_28700[2] = null);
(statearr_26293_28700[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 5))
{var state_26290__$1 = state_26290;var statearr_26294_28701 = state_26290__$1;(statearr_26294_28701[2] = null);
(statearr_26294_28701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 4))
{var inst_26280 = (state_26290[2]);var inst_26281 = async.call(null,inst_26280);var state_26290__$1 = state_26290;if(cljs.core.truth_(inst_26281))
{var statearr_26295_28702 = state_26290__$1;(statearr_26295_28702[1] = 5);
} else
{var statearr_26296_28703 = state_26290__$1;(statearr_26296_28703[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 3))
{var inst_26288 = (state_26290[2]);var state_26290__$1 = state_26290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26290__$1,inst_26288);
} else
{if((state_val_26291 === 2))
{var state_26290__$1 = state_26290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26290__$1,4,jobs);
} else
{if((state_val_26291 === 1))
{var state_26290__$1 = state_26290;var statearr_26297_28704 = state_26290__$1;(statearr_26297_28704[2] = null);
(statearr_26297_28704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__28696,c__22463__auto___28698,G__26277_28697,n__20651__auto___28695,jobs,results,process,async))
;return ((function (__28696,switch__22387__auto__,c__22463__auto___28698,G__26277_28697,n__20651__auto___28695,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26301 = [null,null,null,null,null,null,null];(statearr_26301[0] = state_machine__22388__auto__);
(statearr_26301[1] = 1);
return statearr_26301;
});
var state_machine__22388__auto____1 = (function (state_26290){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26290);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26302){if((e26302 instanceof Object))
{var ex__22391__auto__ = e26302;var statearr_26303_28705 = state_26290;(statearr_26303_28705[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26290);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28706 = state_26290;
state_26290 = G__28706;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26290){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(__28696,switch__22387__auto__,c__22463__auto___28698,G__26277_28697,n__20651__auto___28695,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_26304 = f__22464__auto__.call(null);(statearr_26304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28698);
return statearr_26304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(__28696,c__22463__auto___28698,G__26277_28697,n__20651__auto___28695,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__26277_28697))
{var c__22463__auto___28707 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28696,c__22463__auto___28707,G__26277_28697,n__20651__auto___28695,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (__28696,c__22463__auto___28707,G__26277_28697,n__20651__auto___28695,jobs,results,process,async){
return (function (state_26317){var state_val_26318 = (state_26317[1]);if((state_val_26318 === 7))
{var inst_26313 = (state_26317[2]);var state_26317__$1 = state_26317;var statearr_26319_28708 = state_26317__$1;(statearr_26319_28708[2] = inst_26313);
(statearr_26319_28708[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26318 === 6))
{var state_26317__$1 = state_26317;var statearr_26320_28709 = state_26317__$1;(statearr_26320_28709[2] = null);
(statearr_26320_28709[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26318 === 5))
{var state_26317__$1 = state_26317;var statearr_26321_28710 = state_26317__$1;(statearr_26321_28710[2] = null);
(statearr_26321_28710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26318 === 4))
{var inst_26307 = (state_26317[2]);var inst_26308 = process.call(null,inst_26307);var state_26317__$1 = state_26317;if(cljs.core.truth_(inst_26308))
{var statearr_26322_28711 = state_26317__$1;(statearr_26322_28711[1] = 5);
} else
{var statearr_26323_28712 = state_26317__$1;(statearr_26323_28712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26318 === 3))
{var inst_26315 = (state_26317[2]);var state_26317__$1 = state_26317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26317__$1,inst_26315);
} else
{if((state_val_26318 === 2))
{var state_26317__$1 = state_26317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26317__$1,4,jobs);
} else
{if((state_val_26318 === 1))
{var state_26317__$1 = state_26317;var statearr_26324_28713 = state_26317__$1;(statearr_26324_28713[2] = null);
(statearr_26324_28713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__28696,c__22463__auto___28707,G__26277_28697,n__20651__auto___28695,jobs,results,process,async))
;return ((function (__28696,switch__22387__auto__,c__22463__auto___28707,G__26277_28697,n__20651__auto___28695,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26328 = [null,null,null,null,null,null,null];(statearr_26328[0] = state_machine__22388__auto__);
(statearr_26328[1] = 1);
return statearr_26328;
});
var state_machine__22388__auto____1 = (function (state_26317){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26317);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26329){if((e26329 instanceof Object))
{var ex__22391__auto__ = e26329;var statearr_26330_28714 = state_26317;(statearr_26330_28714[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28715 = state_26317;
state_26317 = G__28715;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26317){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(__28696,switch__22387__auto__,c__22463__auto___28707,G__26277_28697,n__20651__auto___28695,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_26331 = f__22464__auto__.call(null);(statearr_26331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28707);
return statearr_26331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(__28696,c__22463__auto___28707,G__26277_28697,n__20651__auto___28695,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28716 = (__28696 + 1);
__28696 = G__28716;
continue;
}
} else
{}
break;
}
var c__22463__auto___28717 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28717,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28717,jobs,results,process,async){
return (function (state_26352){var state_val_26353 = (state_26352[1]);if((state_val_26353 === 9))
{var inst_26345 = (state_26352[2]);var state_26352__$1 = (function (){var statearr_26354 = state_26352;(statearr_26354[7] = inst_26345);
return statearr_26354;
})();var statearr_26355_28718 = state_26352__$1;(statearr_26355_28718[2] = null);
(statearr_26355_28718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26353 === 8))
{var inst_26339 = (state_26352[8]);var inst_26343 = (state_26352[2]);var state_26352__$1 = (function (){var statearr_26356 = state_26352;(statearr_26356[9] = inst_26343);
return statearr_26356;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26352__$1,9,results,inst_26339);
} else
{if((state_val_26353 === 7))
{var inst_26348 = (state_26352[2]);var state_26352__$1 = state_26352;var statearr_26357_28719 = state_26352__$1;(statearr_26357_28719[2] = inst_26348);
(statearr_26357_28719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26353 === 6))
{var inst_26339 = (state_26352[8]);var inst_26334 = (state_26352[10]);var inst_26339__$1 = cljs.core.async.chan.call(null,1);var inst_26340 = [inst_26334,inst_26339__$1];var inst_26341 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26340,null));var state_26352__$1 = (function (){var statearr_26358 = state_26352;(statearr_26358[8] = inst_26339__$1);
return statearr_26358;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26352__$1,8,jobs,inst_26341);
} else
{if((state_val_26353 === 5))
{var inst_26337 = cljs.core.async.close_BANG_.call(null,jobs);var state_26352__$1 = state_26352;var statearr_26359_28720 = state_26352__$1;(statearr_26359_28720[2] = inst_26337);
(statearr_26359_28720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26353 === 4))
{var inst_26334 = (state_26352[10]);var inst_26334__$1 = (state_26352[2]);var inst_26335 = (inst_26334__$1 == null);var state_26352__$1 = (function (){var statearr_26360 = state_26352;(statearr_26360[10] = inst_26334__$1);
return statearr_26360;
})();if(cljs.core.truth_(inst_26335))
{var statearr_26361_28721 = state_26352__$1;(statearr_26361_28721[1] = 5);
} else
{var statearr_26362_28722 = state_26352__$1;(statearr_26362_28722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26353 === 3))
{var inst_26350 = (state_26352[2]);var state_26352__$1 = state_26352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26352__$1,inst_26350);
} else
{if((state_val_26353 === 2))
{var state_26352__$1 = state_26352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26352__$1,4,from);
} else
{if((state_val_26353 === 1))
{var state_26352__$1 = state_26352;var statearr_26363_28723 = state_26352__$1;(statearr_26363_28723[2] = null);
(statearr_26363_28723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28717,jobs,results,process,async))
;return ((function (switch__22387__auto__,c__22463__auto___28717,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26367 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26367[0] = state_machine__22388__auto__);
(statearr_26367[1] = 1);
return statearr_26367;
});
var state_machine__22388__auto____1 = (function (state_26352){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26352);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26368){if((e26368 instanceof Object))
{var ex__22391__auto__ = e26368;var statearr_26369_28724 = state_26352;(statearr_26369_28724[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26352);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28725 = state_26352;
state_26352 = G__28725;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26352){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28717,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_26370 = f__22464__auto__.call(null);(statearr_26370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28717);
return statearr_26370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28717,jobs,results,process,async))
);
var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__,jobs,results,process,async){
return (function (state_26408){var state_val_26409 = (state_26408[1]);if((state_val_26409 === 1))
{var state_26408__$1 = state_26408;var statearr_26410_28726 = state_26408__$1;(statearr_26410_28726[2] = null);
(statearr_26410_28726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 2))
{var state_26408__$1 = state_26408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26408__$1,4,results);
} else
{if((state_val_26409 === 3))
{var inst_26406 = (state_26408[2]);var state_26408__$1 = state_26408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26408__$1,inst_26406);
} else
{if((state_val_26409 === 4))
{var inst_26373 = (state_26408[7]);var inst_26373__$1 = (state_26408[2]);var inst_26374 = (inst_26373__$1 == null);var state_26408__$1 = (function (){var statearr_26411 = state_26408;(statearr_26411[7] = inst_26373__$1);
return statearr_26411;
})();if(cljs.core.truth_(inst_26374))
{var statearr_26412_28727 = state_26408__$1;(statearr_26412_28727[1] = 5);
} else
{var statearr_26413_28728 = state_26408__$1;(statearr_26413_28728[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 5))
{var state_26408__$1 = state_26408;if(cljs.core.truth_(close_QMARK_))
{var statearr_26414_28729 = state_26408__$1;(statearr_26414_28729[1] = 8);
} else
{var statearr_26415_28730 = state_26408__$1;(statearr_26415_28730[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 6))
{var inst_26373 = (state_26408[7]);var state_26408__$1 = state_26408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26408__$1,11,inst_26373);
} else
{if((state_val_26409 === 7))
{var inst_26404 = (state_26408[2]);var state_26408__$1 = state_26408;var statearr_26416_28731 = state_26408__$1;(statearr_26416_28731[2] = inst_26404);
(statearr_26416_28731[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 8))
{var inst_26377 = cljs.core.async.close_BANG_.call(null,to);var state_26408__$1 = state_26408;var statearr_26417_28732 = state_26408__$1;(statearr_26417_28732[2] = inst_26377);
(statearr_26417_28732[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 9))
{var state_26408__$1 = state_26408;var statearr_26418_28733 = state_26408__$1;(statearr_26418_28733[2] = null);
(statearr_26418_28733[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 10))
{var inst_26380 = (state_26408[2]);var state_26408__$1 = state_26408;var statearr_26419_28734 = state_26408__$1;(statearr_26419_28734[2] = inst_26380);
(statearr_26419_28734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 11))
{var inst_26383 = (state_26408[2]);var state_26408__$1 = (function (){var statearr_26420 = state_26408;(statearr_26420[8] = inst_26383);
return statearr_26420;
})();var statearr_26421_28735 = state_26408__$1;(statearr_26421_28735[2] = null);
(statearr_26421_28735[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 12))
{var inst_26383 = (state_26408[8]);var state_26408__$1 = state_26408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26408__$1,14,inst_26383);
} else
{if((state_val_26409 === 13))
{var inst_26401 = (state_26408[2]);var state_26408__$1 = (function (){var statearr_26422 = state_26408;(statearr_26422[9] = inst_26401);
return statearr_26422;
})();var statearr_26423_28736 = state_26408__$1;(statearr_26423_28736[2] = null);
(statearr_26423_28736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 14))
{var inst_26388 = (state_26408[10]);var inst_26386 = (state_26408[11]);var inst_26386__$1 = (state_26408[2]);var inst_26387 = (inst_26386__$1 == null);var inst_26388__$1 = cljs.core.not.call(null,inst_26387);var state_26408__$1 = (function (){var statearr_26424 = state_26408;(statearr_26424[10] = inst_26388__$1);
(statearr_26424[11] = inst_26386__$1);
return statearr_26424;
})();if(inst_26388__$1)
{var statearr_26425_28737 = state_26408__$1;(statearr_26425_28737[1] = 15);
} else
{var statearr_26426_28738 = state_26408__$1;(statearr_26426_28738[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 15))
{var inst_26386 = (state_26408[11]);var state_26408__$1 = state_26408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26408__$1,18,to,inst_26386);
} else
{if((state_val_26409 === 16))
{var inst_26388 = (state_26408[10]);var state_26408__$1 = state_26408;var statearr_26427_28739 = state_26408__$1;(statearr_26427_28739[2] = inst_26388);
(statearr_26427_28739[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 17))
{var inst_26394 = (state_26408[2]);var state_26408__$1 = state_26408;if(cljs.core.truth_(inst_26394))
{var statearr_26428_28740 = state_26408__$1;(statearr_26428_28740[1] = 19);
} else
{var statearr_26429_28741 = state_26408__$1;(statearr_26429_28741[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 18))
{var inst_26391 = (state_26408[2]);var state_26408__$1 = state_26408;var statearr_26430_28742 = state_26408__$1;(statearr_26430_28742[2] = inst_26391);
(statearr_26430_28742[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 19))
{var state_26408__$1 = state_26408;var statearr_26431_28743 = state_26408__$1;(statearr_26431_28743[2] = null);
(statearr_26431_28743[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 20))
{var state_26408__$1 = state_26408;var statearr_26432_28744 = state_26408__$1;(statearr_26432_28744[2] = null);
(statearr_26432_28744[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26409 === 21))
{var inst_26399 = (state_26408[2]);var state_26408__$1 = state_26408;var statearr_26433_28745 = state_26408__$1;(statearr_26433_28745[2] = inst_26399);
(statearr_26433_28745[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto__,jobs,results,process,async))
;return ((function (switch__22387__auto__,c__22463__auto__,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26437 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26437[0] = state_machine__22388__auto__);
(statearr_26437[1] = 1);
return statearr_26437;
});
var state_machine__22388__auto____1 = (function (state_26408){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26408);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26438){if((e26438 instanceof Object))
{var ex__22391__auto__ = e26438;var statearr_26439_28746 = state_26408;(statearr_26439_28746[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28747 = state_26408;
state_26408 = G__28747;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26408){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_26440 = f__22464__auto__.call(null);(statearr_26440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_26440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__,jobs,results,process,async))
);
return c__22463__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1107031534));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1964407721));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22463__auto___28748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28748,tc,fc){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28748,tc,fc){
return (function (state_26516){var state_val_26517 = (state_26516[1]);if((state_val_26517 === 1))
{var state_26516__$1 = state_26516;var statearr_26518_28749 = state_26516__$1;(statearr_26518_28749[2] = null);
(statearr_26518_28749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 2))
{var state_26516__$1 = state_26516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26516__$1,4,ch);
} else
{if((state_val_26517 === 3))
{var inst_26514 = (state_26516[2]);var state_26516__$1 = state_26516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26516__$1,inst_26514);
} else
{if((state_val_26517 === 4))
{var inst_26493 = (state_26516[7]);var inst_26493__$1 = (state_26516[2]);var inst_26494 = (inst_26493__$1 == null);var state_26516__$1 = (function (){var statearr_26519 = state_26516;(statearr_26519[7] = inst_26493__$1);
return statearr_26519;
})();if(cljs.core.truth_(inst_26494))
{var statearr_26520_28750 = state_26516__$1;(statearr_26520_28750[1] = 5);
} else
{var statearr_26521_28751 = state_26516__$1;(statearr_26521_28751[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 5))
{var inst_26496 = cljs.core.async.close_BANG_.call(null,tc);var inst_26497 = cljs.core.async.close_BANG_.call(null,fc);var state_26516__$1 = (function (){var statearr_26522 = state_26516;(statearr_26522[8] = inst_26496);
return statearr_26522;
})();var statearr_26523_28752 = state_26516__$1;(statearr_26523_28752[2] = inst_26497);
(statearr_26523_28752[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 6))
{var inst_26493 = (state_26516[7]);var inst_26499 = p.call(null,inst_26493);var state_26516__$1 = state_26516;if(cljs.core.truth_(inst_26499))
{var statearr_26524_28753 = state_26516__$1;(statearr_26524_28753[1] = 9);
} else
{var statearr_26525_28754 = state_26516__$1;(statearr_26525_28754[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 7))
{var inst_26512 = (state_26516[2]);var state_26516__$1 = state_26516;var statearr_26526_28755 = state_26516__$1;(statearr_26526_28755[2] = inst_26512);
(statearr_26526_28755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 8))
{var inst_26505 = (state_26516[2]);var state_26516__$1 = state_26516;if(cljs.core.truth_(inst_26505))
{var statearr_26527_28756 = state_26516__$1;(statearr_26527_28756[1] = 12);
} else
{var statearr_26528_28757 = state_26516__$1;(statearr_26528_28757[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 9))
{var state_26516__$1 = state_26516;var statearr_26529_28758 = state_26516__$1;(statearr_26529_28758[2] = tc);
(statearr_26529_28758[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 10))
{var state_26516__$1 = state_26516;var statearr_26530_28759 = state_26516__$1;(statearr_26530_28759[2] = fc);
(statearr_26530_28759[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 11))
{var inst_26493 = (state_26516[7]);var inst_26503 = (state_26516[2]);var state_26516__$1 = state_26516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26516__$1,8,inst_26503,inst_26493);
} else
{if((state_val_26517 === 12))
{var state_26516__$1 = state_26516;var statearr_26531_28760 = state_26516__$1;(statearr_26531_28760[2] = null);
(statearr_26531_28760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 13))
{var state_26516__$1 = state_26516;var statearr_26532_28761 = state_26516__$1;(statearr_26532_28761[2] = null);
(statearr_26532_28761[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26517 === 14))
{var inst_26510 = (state_26516[2]);var state_26516__$1 = state_26516;var statearr_26533_28762 = state_26516__$1;(statearr_26533_28762[2] = inst_26510);
(statearr_26533_28762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28748,tc,fc))
;return ((function (switch__22387__auto__,c__22463__auto___28748,tc,fc){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26537 = [null,null,null,null,null,null,null,null,null];(statearr_26537[0] = state_machine__22388__auto__);
(statearr_26537[1] = 1);
return statearr_26537;
});
var state_machine__22388__auto____1 = (function (state_26516){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26516);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26538){if((e26538 instanceof Object))
{var ex__22391__auto__ = e26538;var statearr_26539_28763 = state_26516;(statearr_26539_28763[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26538;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28764 = state_26516;
state_26516 = G__28764;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26516){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28748,tc,fc))
})();var state__22465__auto__ = (function (){var statearr_26540 = f__22464__auto__.call(null);(statearr_26540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28748);
return statearr_26540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28748,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_26587){var state_val_26588 = (state_26587[1]);if((state_val_26588 === 7))
{var inst_26583 = (state_26587[2]);var state_26587__$1 = state_26587;var statearr_26589_28765 = state_26587__$1;(statearr_26589_28765[2] = inst_26583);
(statearr_26589_28765[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 6))
{var inst_26576 = (state_26587[7]);var inst_26573 = (state_26587[8]);var inst_26580 = f.call(null,inst_26573,inst_26576);var inst_26573__$1 = inst_26580;var state_26587__$1 = (function (){var statearr_26590 = state_26587;(statearr_26590[8] = inst_26573__$1);
return statearr_26590;
})();var statearr_26591_28766 = state_26587__$1;(statearr_26591_28766[2] = null);
(statearr_26591_28766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 5))
{var inst_26573 = (state_26587[8]);var state_26587__$1 = state_26587;var statearr_26592_28767 = state_26587__$1;(statearr_26592_28767[2] = inst_26573);
(statearr_26592_28767[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 4))
{var inst_26576 = (state_26587[7]);var inst_26576__$1 = (state_26587[2]);var inst_26577 = (inst_26576__$1 == null);var state_26587__$1 = (function (){var statearr_26593 = state_26587;(statearr_26593[7] = inst_26576__$1);
return statearr_26593;
})();if(cljs.core.truth_(inst_26577))
{var statearr_26594_28768 = state_26587__$1;(statearr_26594_28768[1] = 5);
} else
{var statearr_26595_28769 = state_26587__$1;(statearr_26595_28769[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26588 === 3))
{var inst_26585 = (state_26587[2]);var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26587__$1,inst_26585);
} else
{if((state_val_26588 === 2))
{var state_26587__$1 = state_26587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26587__$1,4,ch);
} else
{if((state_val_26588 === 1))
{var inst_26573 = init;var state_26587__$1 = (function (){var statearr_26596 = state_26587;(statearr_26596[8] = inst_26573);
return statearr_26596;
})();var statearr_26597_28770 = state_26587__$1;(statearr_26597_28770[2] = null);
(statearr_26597_28770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26601 = [null,null,null,null,null,null,null,null,null];(statearr_26601[0] = state_machine__22388__auto__);
(statearr_26601[1] = 1);
return statearr_26601;
});
var state_machine__22388__auto____1 = (function (state_26587){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26587);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26602){if((e26602 instanceof Object))
{var ex__22391__auto__ = e26602;var statearr_26603_28771 = state_26587;(statearr_26603_28771[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28772 = state_26587;
state_26587 = G__28772;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26587){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_26604 = f__22464__auto__.call(null);(statearr_26604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_26604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_26678){var state_val_26679 = (state_26678[1]);if((state_val_26679 === 1))
{var inst_26654 = cljs.core.seq.call(null,coll);var inst_26655 = inst_26654;var state_26678__$1 = (function (){var statearr_26680 = state_26678;(statearr_26680[7] = inst_26655);
return statearr_26680;
})();var statearr_26681_28773 = state_26678__$1;(statearr_26681_28773[2] = null);
(statearr_26681_28773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 2))
{var inst_26655 = (state_26678[7]);var state_26678__$1 = state_26678;if(cljs.core.truth_(inst_26655))
{var statearr_26682_28774 = state_26678__$1;(statearr_26682_28774[1] = 4);
} else
{var statearr_26683_28775 = state_26678__$1;(statearr_26683_28775[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 3))
{var inst_26676 = (state_26678[2]);var state_26678__$1 = state_26678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26678__$1,inst_26676);
} else
{if((state_val_26679 === 4))
{var inst_26655 = (state_26678[7]);var inst_26658 = cljs.core.first.call(null,inst_26655);var state_26678__$1 = state_26678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26678__$1,7,ch,inst_26658);
} else
{if((state_val_26679 === 5))
{var inst_26655 = (state_26678[7]);var state_26678__$1 = state_26678;var statearr_26684_28776 = state_26678__$1;(statearr_26684_28776[2] = inst_26655);
(statearr_26684_28776[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 6))
{var inst_26663 = (state_26678[2]);var state_26678__$1 = state_26678;if(cljs.core.truth_(inst_26663))
{var statearr_26685_28777 = state_26678__$1;(statearr_26685_28777[1] = 8);
} else
{var statearr_26686_28778 = state_26678__$1;(statearr_26686_28778[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 7))
{var inst_26660 = (state_26678[2]);var state_26678__$1 = state_26678;var statearr_26687_28779 = state_26678__$1;(statearr_26687_28779[2] = inst_26660);
(statearr_26687_28779[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 8))
{var inst_26655 = (state_26678[7]);var inst_26665 = cljs.core.next.call(null,inst_26655);var inst_26655__$1 = inst_26665;var state_26678__$1 = (function (){var statearr_26688 = state_26678;(statearr_26688[7] = inst_26655__$1);
return statearr_26688;
})();var statearr_26689_28780 = state_26678__$1;(statearr_26689_28780[2] = null);
(statearr_26689_28780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 9))
{var state_26678__$1 = state_26678;if(cljs.core.truth_(close_QMARK_))
{var statearr_26690_28781 = state_26678__$1;(statearr_26690_28781[1] = 11);
} else
{var statearr_26691_28782 = state_26678__$1;(statearr_26691_28782[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 10))
{var inst_26674 = (state_26678[2]);var state_26678__$1 = state_26678;var statearr_26692_28783 = state_26678__$1;(statearr_26692_28783[2] = inst_26674);
(statearr_26692_28783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 11))
{var inst_26669 = cljs.core.async.close_BANG_.call(null,ch);var state_26678__$1 = state_26678;var statearr_26693_28784 = state_26678__$1;(statearr_26693_28784[2] = inst_26669);
(statearr_26693_28784[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 12))
{var state_26678__$1 = state_26678;var statearr_26694_28785 = state_26678__$1;(statearr_26694_28785[2] = null);
(statearr_26694_28785[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26679 === 13))
{var inst_26672 = (state_26678[2]);var state_26678__$1 = state_26678;var statearr_26695_28786 = state_26678__$1;(statearr_26695_28786[2] = inst_26672);
(statearr_26695_28786[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26699 = [null,null,null,null,null,null,null,null];(statearr_26699[0] = state_machine__22388__auto__);
(statearr_26699[1] = 1);
return statearr_26699;
});
var state_machine__22388__auto____1 = (function (state_26678){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26678);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26700){if((e26700 instanceof Object))
{var ex__22391__auto__ = e26700;var statearr_26701_28787 = state_26678;(statearr_26701_28787[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28788 = state_26678;
state_26678 = G__28788;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26678){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_26702 = f__22464__auto__.call(null);(statearr_26702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_26702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26704 = {};return obj26704;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19791__auto__ = _;if(and__19791__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20430__auto__ = (((_ == null))?null:_);return (function (){var or__19803__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26706 = {};return obj26706;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26928 = (function (cs,ch,mult,meta26929){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26929 = meta26929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26928.cljs$lang$type = true;
cljs.core.async.t26928.cljs$lang$ctorStr = "cljs.core.async/t26928";
cljs.core.async.t26928.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26928");
});})(cs))
;
cljs.core.async.t26928.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26928.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26928.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26928.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26928.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26930){var self__ = this;
var _26930__$1 = this;return self__.meta26929;
});})(cs))
;
cljs.core.async.t26928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26930,meta26929__$1){var self__ = this;
var _26930__$1 = this;return (new cljs.core.async.t26928(self__.cs,self__.ch,self__.mult,meta26929__$1));
});})(cs))
;
cljs.core.async.__GT_t26928 = ((function (cs){
return (function __GT_t26928(cs__$1,ch__$1,mult__$1,meta26929){return (new cljs.core.async.t26928(cs__$1,ch__$1,mult__$1,meta26929));
});})(cs))
;
}
return (new cljs.core.async.t26928(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22463__auto___28789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28789,cs,m,dchan,dctr,done){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28789,cs,m,dchan,dctr,done){
return (function (state_27061){var state_val_27062 = (state_27061[1]);if((state_val_27062 === 32))
{var inst_27004 = (state_27061[7]);var inst_27002 = (state_27061[8]);var inst_27003 = (state_27061[9]);var inst_27001 = (state_27061[10]);var inst_27016 = (state_27061[2]);var inst_27017 = (inst_27004 + 1);var tmp27063 = inst_27002;var tmp27064 = inst_27003;var tmp27065 = inst_27001;var inst_27001__$1 = tmp27065;var inst_27002__$1 = tmp27063;var inst_27003__$1 = tmp27064;var inst_27004__$1 = inst_27017;var state_27061__$1 = (function (){var statearr_27066 = state_27061;(statearr_27066[7] = inst_27004__$1);
(statearr_27066[8] = inst_27002__$1);
(statearr_27066[9] = inst_27003__$1);
(statearr_27066[10] = inst_27001__$1);
(statearr_27066[11] = inst_27016);
return statearr_27066;
})();var statearr_27067_28790 = state_27061__$1;(statearr_27067_28790[2] = null);
(statearr_27067_28790[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 1))
{var state_27061__$1 = state_27061;var statearr_27068_28791 = state_27061__$1;(statearr_27068_28791[2] = null);
(statearr_27068_28791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 33))
{var inst_27020 = (state_27061[12]);var inst_27022 = cljs.core.chunked_seq_QMARK_.call(null,inst_27020);var state_27061__$1 = state_27061;if(inst_27022)
{var statearr_27069_28792 = state_27061__$1;(statearr_27069_28792[1] = 36);
} else
{var statearr_27070_28793 = state_27061__$1;(statearr_27070_28793[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 2))
{var state_27061__$1 = state_27061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,4,ch);
} else
{if((state_val_27062 === 34))
{var state_27061__$1 = state_27061;var statearr_27071_28794 = state_27061__$1;(statearr_27071_28794[2] = null);
(statearr_27071_28794[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 3))
{var inst_27059 = (state_27061[2]);var state_27061__$1 = state_27061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27061__$1,inst_27059);
} else
{if((state_val_27062 === 35))
{var inst_27043 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27072_28795 = state_27061__$1;(statearr_27072_28795[2] = inst_27043);
(statearr_27072_28795[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 4))
{var inst_26933 = (state_27061[13]);var inst_26933__$1 = (state_27061[2]);var inst_26934 = (inst_26933__$1 == null);var state_27061__$1 = (function (){var statearr_27073 = state_27061;(statearr_27073[13] = inst_26933__$1);
return statearr_27073;
})();if(cljs.core.truth_(inst_26934))
{var statearr_27074_28796 = state_27061__$1;(statearr_27074_28796[1] = 5);
} else
{var statearr_27075_28797 = state_27061__$1;(statearr_27075_28797[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 36))
{var inst_27020 = (state_27061[12]);var inst_27024 = cljs.core.chunk_first.call(null,inst_27020);var inst_27025 = cljs.core.chunk_rest.call(null,inst_27020);var inst_27026 = cljs.core.count.call(null,inst_27024);var inst_27001 = inst_27025;var inst_27002 = inst_27024;var inst_27003 = inst_27026;var inst_27004 = 0;var state_27061__$1 = (function (){var statearr_27076 = state_27061;(statearr_27076[7] = inst_27004);
(statearr_27076[8] = inst_27002);
(statearr_27076[9] = inst_27003);
(statearr_27076[10] = inst_27001);
return statearr_27076;
})();var statearr_27077_28798 = state_27061__$1;(statearr_27077_28798[2] = null);
(statearr_27077_28798[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 5))
{var inst_26940 = cljs.core.deref.call(null,cs);var inst_26941 = cljs.core.seq.call(null,inst_26940);var inst_26942 = inst_26941;var inst_26943 = null;var inst_26944 = 0;var inst_26945 = 0;var state_27061__$1 = (function (){var statearr_27078 = state_27061;(statearr_27078[14] = inst_26944);
(statearr_27078[15] = inst_26945);
(statearr_27078[16] = inst_26943);
(statearr_27078[17] = inst_26942);
return statearr_27078;
})();var statearr_27079_28799 = state_27061__$1;(statearr_27079_28799[2] = null);
(statearr_27079_28799[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 37))
{var inst_26933 = (state_27061[13]);var inst_27029 = (state_27061[18]);var inst_27020 = (state_27061[12]);var inst_27029__$1 = cljs.core.first.call(null,inst_27020);var inst_27030 = cljs.core.async.put_BANG_.call(null,inst_27029__$1,inst_26933,done);var state_27061__$1 = (function (){var statearr_27080 = state_27061;(statearr_27080[18] = inst_27029__$1);
return statearr_27080;
})();if(cljs.core.truth_(inst_27030))
{var statearr_27081_28800 = state_27061__$1;(statearr_27081_28800[1] = 39);
} else
{var statearr_27082_28801 = state_27061__$1;(statearr_27082_28801[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 6))
{var inst_26993 = (state_27061[19]);var inst_26992 = cljs.core.deref.call(null,cs);var inst_26993__$1 = cljs.core.keys.call(null,inst_26992);var inst_26994 = cljs.core.count.call(null,inst_26993__$1);var inst_26995 = cljs.core.reset_BANG_.call(null,dctr,inst_26994);var inst_27000 = cljs.core.seq.call(null,inst_26993__$1);var inst_27001 = inst_27000;var inst_27002 = null;var inst_27003 = 0;var inst_27004 = 0;var state_27061__$1 = (function (){var statearr_27083 = state_27061;(statearr_27083[20] = inst_26995);
(statearr_27083[7] = inst_27004);
(statearr_27083[19] = inst_26993__$1);
(statearr_27083[8] = inst_27002);
(statearr_27083[9] = inst_27003);
(statearr_27083[10] = inst_27001);
return statearr_27083;
})();var statearr_27084_28802 = state_27061__$1;(statearr_27084_28802[2] = null);
(statearr_27084_28802[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 38))
{var inst_27040 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27085_28803 = state_27061__$1;(statearr_27085_28803[2] = inst_27040);
(statearr_27085_28803[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 7))
{var inst_27057 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27086_28804 = state_27061__$1;(statearr_27086_28804[2] = inst_27057);
(statearr_27086_28804[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 39))
{var state_27061__$1 = state_27061;var statearr_27087_28805 = state_27061__$1;(statearr_27087_28805[2] = null);
(statearr_27087_28805[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 8))
{var inst_26944 = (state_27061[14]);var inst_26945 = (state_27061[15]);var inst_26947 = (inst_26945 < inst_26944);var inst_26948 = inst_26947;var state_27061__$1 = state_27061;if(cljs.core.truth_(inst_26948))
{var statearr_27088_28806 = state_27061__$1;(statearr_27088_28806[1] = 10);
} else
{var statearr_27089_28807 = state_27061__$1;(statearr_27089_28807[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 40))
{var inst_27029 = (state_27061[18]);var inst_27033 = done.call(null,null);var inst_27034 = cljs.core.async.untap_STAR_.call(null,m,inst_27029);var state_27061__$1 = (function (){var statearr_27090 = state_27061;(statearr_27090[21] = inst_27033);
return statearr_27090;
})();var statearr_27091_28808 = state_27061__$1;(statearr_27091_28808[2] = inst_27034);
(statearr_27091_28808[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 9))
{var inst_26990 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27092_28809 = state_27061__$1;(statearr_27092_28809[2] = inst_26990);
(statearr_27092_28809[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 41))
{var inst_27020 = (state_27061[12]);var inst_27036 = (state_27061[2]);var inst_27037 = cljs.core.next.call(null,inst_27020);var inst_27001 = inst_27037;var inst_27002 = null;var inst_27003 = 0;var inst_27004 = 0;var state_27061__$1 = (function (){var statearr_27093 = state_27061;(statearr_27093[22] = inst_27036);
(statearr_27093[7] = inst_27004);
(statearr_27093[8] = inst_27002);
(statearr_27093[9] = inst_27003);
(statearr_27093[10] = inst_27001);
return statearr_27093;
})();var statearr_27094_28810 = state_27061__$1;(statearr_27094_28810[2] = null);
(statearr_27094_28810[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 10))
{var inst_26945 = (state_27061[15]);var inst_26943 = (state_27061[16]);var inst_26951 = cljs.core._nth.call(null,inst_26943,inst_26945);var inst_26952 = cljs.core.nth.call(null,inst_26951,0,null);var inst_26953 = cljs.core.nth.call(null,inst_26951,1,null);var state_27061__$1 = (function (){var statearr_27095 = state_27061;(statearr_27095[23] = inst_26952);
return statearr_27095;
})();if(cljs.core.truth_(inst_26953))
{var statearr_27096_28811 = state_27061__$1;(statearr_27096_28811[1] = 13);
} else
{var statearr_27097_28812 = state_27061__$1;(statearr_27097_28812[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 42))
{var state_27061__$1 = state_27061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27061__$1,45,dchan);
} else
{if((state_val_27062 === 11))
{var inst_26942 = (state_27061[17]);var inst_26962 = (state_27061[24]);var inst_26962__$1 = cljs.core.seq.call(null,inst_26942);var state_27061__$1 = (function (){var statearr_27098 = state_27061;(statearr_27098[24] = inst_26962__$1);
return statearr_27098;
})();if(inst_26962__$1)
{var statearr_27099_28813 = state_27061__$1;(statearr_27099_28813[1] = 16);
} else
{var statearr_27100_28814 = state_27061__$1;(statearr_27100_28814[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 43))
{var state_27061__$1 = state_27061;var statearr_27101_28815 = state_27061__$1;(statearr_27101_28815[2] = null);
(statearr_27101_28815[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 12))
{var inst_26988 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27102_28816 = state_27061__$1;(statearr_27102_28816[2] = inst_26988);
(statearr_27102_28816[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 44))
{var inst_27054 = (state_27061[2]);var state_27061__$1 = (function (){var statearr_27103 = state_27061;(statearr_27103[25] = inst_27054);
return statearr_27103;
})();var statearr_27104_28817 = state_27061__$1;(statearr_27104_28817[2] = null);
(statearr_27104_28817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 13))
{var inst_26952 = (state_27061[23]);var inst_26955 = cljs.core.async.close_BANG_.call(null,inst_26952);var state_27061__$1 = state_27061;var statearr_27105_28818 = state_27061__$1;(statearr_27105_28818[2] = inst_26955);
(statearr_27105_28818[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 45))
{var inst_27051 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27109_28819 = state_27061__$1;(statearr_27109_28819[2] = inst_27051);
(statearr_27109_28819[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 14))
{var state_27061__$1 = state_27061;var statearr_27110_28820 = state_27061__$1;(statearr_27110_28820[2] = null);
(statearr_27110_28820[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 15))
{var inst_26944 = (state_27061[14]);var inst_26945 = (state_27061[15]);var inst_26943 = (state_27061[16]);var inst_26942 = (state_27061[17]);var inst_26958 = (state_27061[2]);var inst_26959 = (inst_26945 + 1);var tmp27106 = inst_26944;var tmp27107 = inst_26943;var tmp27108 = inst_26942;var inst_26942__$1 = tmp27108;var inst_26943__$1 = tmp27107;var inst_26944__$1 = tmp27106;var inst_26945__$1 = inst_26959;var state_27061__$1 = (function (){var statearr_27111 = state_27061;(statearr_27111[14] = inst_26944__$1);
(statearr_27111[15] = inst_26945__$1);
(statearr_27111[16] = inst_26943__$1);
(statearr_27111[17] = inst_26942__$1);
(statearr_27111[26] = inst_26958);
return statearr_27111;
})();var statearr_27112_28821 = state_27061__$1;(statearr_27112_28821[2] = null);
(statearr_27112_28821[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 16))
{var inst_26962 = (state_27061[24]);var inst_26964 = cljs.core.chunked_seq_QMARK_.call(null,inst_26962);var state_27061__$1 = state_27061;if(inst_26964)
{var statearr_27113_28822 = state_27061__$1;(statearr_27113_28822[1] = 19);
} else
{var statearr_27114_28823 = state_27061__$1;(statearr_27114_28823[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 17))
{var state_27061__$1 = state_27061;var statearr_27115_28824 = state_27061__$1;(statearr_27115_28824[2] = null);
(statearr_27115_28824[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 18))
{var inst_26986 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27116_28825 = state_27061__$1;(statearr_27116_28825[2] = inst_26986);
(statearr_27116_28825[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 19))
{var inst_26962 = (state_27061[24]);var inst_26966 = cljs.core.chunk_first.call(null,inst_26962);var inst_26967 = cljs.core.chunk_rest.call(null,inst_26962);var inst_26968 = cljs.core.count.call(null,inst_26966);var inst_26942 = inst_26967;var inst_26943 = inst_26966;var inst_26944 = inst_26968;var inst_26945 = 0;var state_27061__$1 = (function (){var statearr_27117 = state_27061;(statearr_27117[14] = inst_26944);
(statearr_27117[15] = inst_26945);
(statearr_27117[16] = inst_26943);
(statearr_27117[17] = inst_26942);
return statearr_27117;
})();var statearr_27118_28826 = state_27061__$1;(statearr_27118_28826[2] = null);
(statearr_27118_28826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 20))
{var inst_26962 = (state_27061[24]);var inst_26972 = cljs.core.first.call(null,inst_26962);var inst_26973 = cljs.core.nth.call(null,inst_26972,0,null);var inst_26974 = cljs.core.nth.call(null,inst_26972,1,null);var state_27061__$1 = (function (){var statearr_27119 = state_27061;(statearr_27119[27] = inst_26973);
return statearr_27119;
})();if(cljs.core.truth_(inst_26974))
{var statearr_27120_28827 = state_27061__$1;(statearr_27120_28827[1] = 22);
} else
{var statearr_27121_28828 = state_27061__$1;(statearr_27121_28828[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 21))
{var inst_26983 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27122_28829 = state_27061__$1;(statearr_27122_28829[2] = inst_26983);
(statearr_27122_28829[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 22))
{var inst_26973 = (state_27061[27]);var inst_26976 = cljs.core.async.close_BANG_.call(null,inst_26973);var state_27061__$1 = state_27061;var statearr_27123_28830 = state_27061__$1;(statearr_27123_28830[2] = inst_26976);
(statearr_27123_28830[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 23))
{var state_27061__$1 = state_27061;var statearr_27124_28831 = state_27061__$1;(statearr_27124_28831[2] = null);
(statearr_27124_28831[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 24))
{var inst_26962 = (state_27061[24]);var inst_26979 = (state_27061[2]);var inst_26980 = cljs.core.next.call(null,inst_26962);var inst_26942 = inst_26980;var inst_26943 = null;var inst_26944 = 0;var inst_26945 = 0;var state_27061__$1 = (function (){var statearr_27125 = state_27061;(statearr_27125[14] = inst_26944);
(statearr_27125[15] = inst_26945);
(statearr_27125[16] = inst_26943);
(statearr_27125[17] = inst_26942);
(statearr_27125[28] = inst_26979);
return statearr_27125;
})();var statearr_27126_28832 = state_27061__$1;(statearr_27126_28832[2] = null);
(statearr_27126_28832[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 25))
{var inst_27004 = (state_27061[7]);var inst_27003 = (state_27061[9]);var inst_27006 = (inst_27004 < inst_27003);var inst_27007 = inst_27006;var state_27061__$1 = state_27061;if(cljs.core.truth_(inst_27007))
{var statearr_27127_28833 = state_27061__$1;(statearr_27127_28833[1] = 27);
} else
{var statearr_27128_28834 = state_27061__$1;(statearr_27128_28834[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 26))
{var inst_26993 = (state_27061[19]);var inst_27047 = (state_27061[2]);var inst_27048 = cljs.core.seq.call(null,inst_26993);var state_27061__$1 = (function (){var statearr_27129 = state_27061;(statearr_27129[29] = inst_27047);
return statearr_27129;
})();if(inst_27048)
{var statearr_27130_28835 = state_27061__$1;(statearr_27130_28835[1] = 42);
} else
{var statearr_27131_28836 = state_27061__$1;(statearr_27131_28836[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 27))
{var inst_27009 = (state_27061[30]);var inst_27004 = (state_27061[7]);var inst_27002 = (state_27061[8]);var inst_26933 = (state_27061[13]);var inst_27009__$1 = cljs.core._nth.call(null,inst_27002,inst_27004);var inst_27010 = cljs.core.async.put_BANG_.call(null,inst_27009__$1,inst_26933,done);var state_27061__$1 = (function (){var statearr_27132 = state_27061;(statearr_27132[30] = inst_27009__$1);
return statearr_27132;
})();if(cljs.core.truth_(inst_27010))
{var statearr_27133_28837 = state_27061__$1;(statearr_27133_28837[1] = 30);
} else
{var statearr_27134_28838 = state_27061__$1;(statearr_27134_28838[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 28))
{var inst_27001 = (state_27061[10]);var inst_27020 = (state_27061[12]);var inst_27020__$1 = cljs.core.seq.call(null,inst_27001);var state_27061__$1 = (function (){var statearr_27135 = state_27061;(statearr_27135[12] = inst_27020__$1);
return statearr_27135;
})();if(inst_27020__$1)
{var statearr_27136_28839 = state_27061__$1;(statearr_27136_28839[1] = 33);
} else
{var statearr_27137_28840 = state_27061__$1;(statearr_27137_28840[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 29))
{var inst_27045 = (state_27061[2]);var state_27061__$1 = state_27061;var statearr_27138_28841 = state_27061__$1;(statearr_27138_28841[2] = inst_27045);
(statearr_27138_28841[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 30))
{var state_27061__$1 = state_27061;var statearr_27139_28842 = state_27061__$1;(statearr_27139_28842[2] = null);
(statearr_27139_28842[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27062 === 31))
{var inst_27009 = (state_27061[30]);var inst_27013 = done.call(null,null);var inst_27014 = cljs.core.async.untap_STAR_.call(null,m,inst_27009);var state_27061__$1 = (function (){var statearr_27140 = state_27061;(statearr_27140[31] = inst_27013);
return statearr_27140;
})();var statearr_27141_28843 = state_27061__$1;(statearr_27141_28843[2] = inst_27014);
(statearr_27141_28843[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28789,cs,m,dchan,dctr,done))
;return ((function (switch__22387__auto__,c__22463__auto___28789,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27145[0] = state_machine__22388__auto__);
(statearr_27145[1] = 1);
return statearr_27145;
});
var state_machine__22388__auto____1 = (function (state_27061){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27061);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27146){if((e27146 instanceof Object))
{var ex__22391__auto__ = e27146;var statearr_27147_28844 = state_27061;(statearr_27147_28844[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28845 = state_27061;
state_27061 = G__28845;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27061){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28789,cs,m,dchan,dctr,done))
})();var state__22465__auto__ = (function (){var statearr_27148 = f__22464__auto__.call(null);(statearr_27148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28789);
return statearr_27148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28789,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj27150 = {};return obj27150;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t27270 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27270 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27271){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta27271 = meta27271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27270.cljs$lang$type = true;
cljs.core.async.t27270.cljs$lang$ctorStr = "cljs.core.async/t27270";
cljs.core.async.t27270.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27270");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27270.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27270.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27270.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27270.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27270.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27270.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27270.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27272){var self__ = this;
var _27272__$1 = this;return self__.meta27271;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27272,meta27271__$1){var self__ = this;
var _27272__$1 = this;return (new cljs.core.async.t27270(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27271__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27270 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27270(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27271){return (new cljs.core.async.t27270(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27271));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27270(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22463__auto___28846 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27342){var state_val_27343 = (state_27342[1]);if((state_val_27343 === 1))
{var inst_27276 = (state_27342[7]);var inst_27276__$1 = calc_state.call(null);var inst_27277 = cljs.core.seq_QMARK_.call(null,inst_27276__$1);var state_27342__$1 = (function (){var statearr_27344 = state_27342;(statearr_27344[7] = inst_27276__$1);
return statearr_27344;
})();if(inst_27277)
{var statearr_27345_28847 = state_27342__$1;(statearr_27345_28847[1] = 2);
} else
{var statearr_27346_28848 = state_27342__$1;(statearr_27346_28848[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 2))
{var inst_27276 = (state_27342[7]);var inst_27279 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27276);var state_27342__$1 = state_27342;var statearr_27347_28849 = state_27342__$1;(statearr_27347_28849[2] = inst_27279);
(statearr_27347_28849[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 3))
{var inst_27276 = (state_27342[7]);var state_27342__$1 = state_27342;var statearr_27348_28850 = state_27342__$1;(statearr_27348_28850[2] = inst_27276);
(statearr_27348_28850[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 4))
{var inst_27276 = (state_27342[7]);var inst_27282 = (state_27342[2]);var inst_27283 = cljs.core.get.call(null,inst_27282,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27284 = cljs.core.get.call(null,inst_27282,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27285 = cljs.core.get.call(null,inst_27282,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27286 = inst_27276;var state_27342__$1 = (function (){var statearr_27349 = state_27342;(statearr_27349[8] = inst_27285);
(statearr_27349[9] = inst_27284);
(statearr_27349[10] = inst_27286);
(statearr_27349[11] = inst_27283);
return statearr_27349;
})();var statearr_27350_28851 = state_27342__$1;(statearr_27350_28851[2] = null);
(statearr_27350_28851[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 5))
{var inst_27286 = (state_27342[10]);var inst_27289 = cljs.core.seq_QMARK_.call(null,inst_27286);var state_27342__$1 = state_27342;if(inst_27289)
{var statearr_27351_28852 = state_27342__$1;(statearr_27351_28852[1] = 7);
} else
{var statearr_27352_28853 = state_27342__$1;(statearr_27352_28853[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 6))
{var inst_27340 = (state_27342[2]);var state_27342__$1 = state_27342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27342__$1,inst_27340);
} else
{if((state_val_27343 === 7))
{var inst_27286 = (state_27342[10]);var inst_27291 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27286);var state_27342__$1 = state_27342;var statearr_27353_28854 = state_27342__$1;(statearr_27353_28854[2] = inst_27291);
(statearr_27353_28854[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 8))
{var inst_27286 = (state_27342[10]);var state_27342__$1 = state_27342;var statearr_27354_28855 = state_27342__$1;(statearr_27354_28855[2] = inst_27286);
(statearr_27354_28855[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 9))
{var inst_27294 = (state_27342[12]);var inst_27294__$1 = (state_27342[2]);var inst_27295 = cljs.core.get.call(null,inst_27294__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27296 = cljs.core.get.call(null,inst_27294__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27297 = cljs.core.get.call(null,inst_27294__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27342__$1 = (function (){var statearr_27355 = state_27342;(statearr_27355[12] = inst_27294__$1);
(statearr_27355[13] = inst_27296);
(statearr_27355[14] = inst_27297);
return statearr_27355;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27342__$1,10,inst_27295);
} else
{if((state_val_27343 === 10))
{var inst_27301 = (state_27342[15]);var inst_27302 = (state_27342[16]);var inst_27300 = (state_27342[2]);var inst_27301__$1 = cljs.core.nth.call(null,inst_27300,0,null);var inst_27302__$1 = cljs.core.nth.call(null,inst_27300,1,null);var inst_27303 = (inst_27301__$1 == null);var inst_27304 = cljs.core._EQ_.call(null,inst_27302__$1,change);var inst_27305 = (inst_27303) || (inst_27304);var state_27342__$1 = (function (){var statearr_27356 = state_27342;(statearr_27356[15] = inst_27301__$1);
(statearr_27356[16] = inst_27302__$1);
return statearr_27356;
})();if(cljs.core.truth_(inst_27305))
{var statearr_27357_28856 = state_27342__$1;(statearr_27357_28856[1] = 11);
} else
{var statearr_27358_28857 = state_27342__$1;(statearr_27358_28857[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 11))
{var inst_27301 = (state_27342[15]);var inst_27307 = (inst_27301 == null);var state_27342__$1 = state_27342;if(cljs.core.truth_(inst_27307))
{var statearr_27359_28858 = state_27342__$1;(statearr_27359_28858[1] = 14);
} else
{var statearr_27360_28859 = state_27342__$1;(statearr_27360_28859[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 12))
{var inst_27316 = (state_27342[17]);var inst_27297 = (state_27342[14]);var inst_27302 = (state_27342[16]);var inst_27316__$1 = inst_27297.call(null,inst_27302);var state_27342__$1 = (function (){var statearr_27361 = state_27342;(statearr_27361[17] = inst_27316__$1);
return statearr_27361;
})();if(cljs.core.truth_(inst_27316__$1))
{var statearr_27362_28860 = state_27342__$1;(statearr_27362_28860[1] = 17);
} else
{var statearr_27363_28861 = state_27342__$1;(statearr_27363_28861[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 13))
{var inst_27338 = (state_27342[2]);var state_27342__$1 = state_27342;var statearr_27364_28862 = state_27342__$1;(statearr_27364_28862[2] = inst_27338);
(statearr_27364_28862[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 14))
{var inst_27302 = (state_27342[16]);var inst_27309 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27302);var state_27342__$1 = state_27342;var statearr_27365_28863 = state_27342__$1;(statearr_27365_28863[2] = inst_27309);
(statearr_27365_28863[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 15))
{var state_27342__$1 = state_27342;var statearr_27366_28864 = state_27342__$1;(statearr_27366_28864[2] = null);
(statearr_27366_28864[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 16))
{var inst_27312 = (state_27342[2]);var inst_27313 = calc_state.call(null);var inst_27286 = inst_27313;var state_27342__$1 = (function (){var statearr_27367 = state_27342;(statearr_27367[18] = inst_27312);
(statearr_27367[10] = inst_27286);
return statearr_27367;
})();var statearr_27368_28865 = state_27342__$1;(statearr_27368_28865[2] = null);
(statearr_27368_28865[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 17))
{var inst_27316 = (state_27342[17]);var state_27342__$1 = state_27342;var statearr_27369_28866 = state_27342__$1;(statearr_27369_28866[2] = inst_27316);
(statearr_27369_28866[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 18))
{var inst_27296 = (state_27342[13]);var inst_27297 = (state_27342[14]);var inst_27302 = (state_27342[16]);var inst_27319 = cljs.core.empty_QMARK_.call(null,inst_27297);var inst_27320 = inst_27296.call(null,inst_27302);var inst_27321 = cljs.core.not.call(null,inst_27320);var inst_27322 = (inst_27319) && (inst_27321);var state_27342__$1 = state_27342;var statearr_27370_28867 = state_27342__$1;(statearr_27370_28867[2] = inst_27322);
(statearr_27370_28867[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 19))
{var inst_27324 = (state_27342[2]);var state_27342__$1 = state_27342;if(cljs.core.truth_(inst_27324))
{var statearr_27371_28868 = state_27342__$1;(statearr_27371_28868[1] = 20);
} else
{var statearr_27372_28869 = state_27342__$1;(statearr_27372_28869[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 20))
{var inst_27301 = (state_27342[15]);var state_27342__$1 = state_27342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27342__$1,23,out,inst_27301);
} else
{if((state_val_27343 === 21))
{var inst_27294 = (state_27342[12]);var inst_27286 = inst_27294;var state_27342__$1 = (function (){var statearr_27373 = state_27342;(statearr_27373[10] = inst_27286);
return statearr_27373;
})();var statearr_27374_28870 = state_27342__$1;(statearr_27374_28870[2] = null);
(statearr_27374_28870[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 22))
{var inst_27336 = (state_27342[2]);var state_27342__$1 = state_27342;var statearr_27375_28871 = state_27342__$1;(statearr_27375_28871[2] = inst_27336);
(statearr_27375_28871[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 23))
{var inst_27327 = (state_27342[2]);var state_27342__$1 = state_27342;if(cljs.core.truth_(inst_27327))
{var statearr_27376_28872 = state_27342__$1;(statearr_27376_28872[1] = 24);
} else
{var statearr_27377_28873 = state_27342__$1;(statearr_27377_28873[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 24))
{var inst_27294 = (state_27342[12]);var inst_27286 = inst_27294;var state_27342__$1 = (function (){var statearr_27378 = state_27342;(statearr_27378[10] = inst_27286);
return statearr_27378;
})();var statearr_27379_28874 = state_27342__$1;(statearr_27379_28874[2] = null);
(statearr_27379_28874[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 25))
{var state_27342__$1 = state_27342;var statearr_27380_28875 = state_27342__$1;(statearr_27380_28875[2] = null);
(statearr_27380_28875[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27343 === 26))
{var inst_27332 = (state_27342[2]);var state_27342__$1 = state_27342;var statearr_27381_28876 = state_27342__$1;(statearr_27381_28876[2] = inst_27332);
(statearr_27381_28876[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22387__auto__,c__22463__auto___28846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27385[0] = state_machine__22388__auto__);
(statearr_27385[1] = 1);
return statearr_27385;
});
var state_machine__22388__auto____1 = (function (state_27342){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27342);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27386){if((e27386 instanceof Object))
{var ex__22391__auto__ = e27386;var statearr_27387_28877 = state_27342;(statearr_27387_28877[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28878 = state_27342;
state_27342 = G__28878;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27342){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22465__auto__ = (function (){var statearr_27388 = f__22464__auto__.call(null);(statearr_27388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28846);
return statearr_27388;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj27390 = {};return obj27390;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__19803__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19803__auto__,mults){
return (function (p1__27391_SHARP_){if(cljs.core.truth_(p1__27391_SHARP_.call(null,topic)))
{return p1__27391_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27391_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27514 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27515){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27515 = meta27515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27514.cljs$lang$type = true;
cljs.core.async.t27514.cljs$lang$ctorStr = "cljs.core.async/t27514";
cljs.core.async.t27514.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27514");
});})(mults,ensure_mult))
;
cljs.core.async.t27514.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27514.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27514.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27514.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27514.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27516){var self__ = this;
var _27516__$1 = this;return self__.meta27515;
});})(mults,ensure_mult))
;
cljs.core.async.t27514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27516,meta27515__$1){var self__ = this;
var _27516__$1 = this;return (new cljs.core.async.t27514(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27515__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27514 = ((function (mults,ensure_mult){
return (function __GT_t27514(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27515){return (new cljs.core.async.t27514(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27515));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27514(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22463__auto___28879 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28879,mults,ensure_mult,p){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28879,mults,ensure_mult,p){
return (function (state_27588){var state_val_27589 = (state_27588[1]);if((state_val_27589 === 1))
{var state_27588__$1 = state_27588;var statearr_27590_28880 = state_27588__$1;(statearr_27590_28880[2] = null);
(statearr_27590_28880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 2))
{var state_27588__$1 = state_27588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27588__$1,4,ch);
} else
{if((state_val_27589 === 3))
{var inst_27586 = (state_27588[2]);var state_27588__$1 = state_27588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27588__$1,inst_27586);
} else
{if((state_val_27589 === 4))
{var inst_27519 = (state_27588[7]);var inst_27519__$1 = (state_27588[2]);var inst_27520 = (inst_27519__$1 == null);var state_27588__$1 = (function (){var statearr_27591 = state_27588;(statearr_27591[7] = inst_27519__$1);
return statearr_27591;
})();if(cljs.core.truth_(inst_27520))
{var statearr_27592_28881 = state_27588__$1;(statearr_27592_28881[1] = 5);
} else
{var statearr_27593_28882 = state_27588__$1;(statearr_27593_28882[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 5))
{var inst_27526 = cljs.core.deref.call(null,mults);var inst_27527 = cljs.core.vals.call(null,inst_27526);var inst_27528 = cljs.core.seq.call(null,inst_27527);var inst_27529 = inst_27528;var inst_27530 = null;var inst_27531 = 0;var inst_27532 = 0;var state_27588__$1 = (function (){var statearr_27594 = state_27588;(statearr_27594[8] = inst_27532);
(statearr_27594[9] = inst_27530);
(statearr_27594[10] = inst_27531);
(statearr_27594[11] = inst_27529);
return statearr_27594;
})();var statearr_27595_28883 = state_27588__$1;(statearr_27595_28883[2] = null);
(statearr_27595_28883[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 6))
{var inst_27569 = (state_27588[12]);var inst_27519 = (state_27588[7]);var inst_27567 = (state_27588[13]);var inst_27567__$1 = topic_fn.call(null,inst_27519);var inst_27568 = cljs.core.deref.call(null,mults);var inst_27569__$1 = cljs.core.get.call(null,inst_27568,inst_27567__$1);var state_27588__$1 = (function (){var statearr_27596 = state_27588;(statearr_27596[12] = inst_27569__$1);
(statearr_27596[13] = inst_27567__$1);
return statearr_27596;
})();if(cljs.core.truth_(inst_27569__$1))
{var statearr_27597_28884 = state_27588__$1;(statearr_27597_28884[1] = 19);
} else
{var statearr_27598_28885 = state_27588__$1;(statearr_27598_28885[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 7))
{var inst_27584 = (state_27588[2]);var state_27588__$1 = state_27588;var statearr_27599_28886 = state_27588__$1;(statearr_27599_28886[2] = inst_27584);
(statearr_27599_28886[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 8))
{var inst_27532 = (state_27588[8]);var inst_27531 = (state_27588[10]);var inst_27534 = (inst_27532 < inst_27531);var inst_27535 = inst_27534;var state_27588__$1 = state_27588;if(cljs.core.truth_(inst_27535))
{var statearr_27603_28887 = state_27588__$1;(statearr_27603_28887[1] = 10);
} else
{var statearr_27604_28888 = state_27588__$1;(statearr_27604_28888[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 9))
{var inst_27565 = (state_27588[2]);var state_27588__$1 = state_27588;var statearr_27605_28889 = state_27588__$1;(statearr_27605_28889[2] = inst_27565);
(statearr_27605_28889[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 10))
{var inst_27532 = (state_27588[8]);var inst_27530 = (state_27588[9]);var inst_27531 = (state_27588[10]);var inst_27529 = (state_27588[11]);var inst_27537 = cljs.core._nth.call(null,inst_27530,inst_27532);var inst_27538 = cljs.core.async.muxch_STAR_.call(null,inst_27537);var inst_27539 = cljs.core.async.close_BANG_.call(null,inst_27538);var inst_27540 = (inst_27532 + 1);var tmp27600 = inst_27530;var tmp27601 = inst_27531;var tmp27602 = inst_27529;var inst_27529__$1 = tmp27602;var inst_27530__$1 = tmp27600;var inst_27531__$1 = tmp27601;var inst_27532__$1 = inst_27540;var state_27588__$1 = (function (){var statearr_27606 = state_27588;(statearr_27606[8] = inst_27532__$1);
(statearr_27606[9] = inst_27530__$1);
(statearr_27606[10] = inst_27531__$1);
(statearr_27606[14] = inst_27539);
(statearr_27606[11] = inst_27529__$1);
return statearr_27606;
})();var statearr_27607_28890 = state_27588__$1;(statearr_27607_28890[2] = null);
(statearr_27607_28890[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 11))
{var inst_27543 = (state_27588[15]);var inst_27529 = (state_27588[11]);var inst_27543__$1 = cljs.core.seq.call(null,inst_27529);var state_27588__$1 = (function (){var statearr_27608 = state_27588;(statearr_27608[15] = inst_27543__$1);
return statearr_27608;
})();if(inst_27543__$1)
{var statearr_27609_28891 = state_27588__$1;(statearr_27609_28891[1] = 13);
} else
{var statearr_27610_28892 = state_27588__$1;(statearr_27610_28892[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 12))
{var inst_27563 = (state_27588[2]);var state_27588__$1 = state_27588;var statearr_27611_28893 = state_27588__$1;(statearr_27611_28893[2] = inst_27563);
(statearr_27611_28893[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 13))
{var inst_27543 = (state_27588[15]);var inst_27545 = cljs.core.chunked_seq_QMARK_.call(null,inst_27543);var state_27588__$1 = state_27588;if(inst_27545)
{var statearr_27612_28894 = state_27588__$1;(statearr_27612_28894[1] = 16);
} else
{var statearr_27613_28895 = state_27588__$1;(statearr_27613_28895[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 14))
{var state_27588__$1 = state_27588;var statearr_27614_28896 = state_27588__$1;(statearr_27614_28896[2] = null);
(statearr_27614_28896[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 15))
{var inst_27561 = (state_27588[2]);var state_27588__$1 = state_27588;var statearr_27615_28897 = state_27588__$1;(statearr_27615_28897[2] = inst_27561);
(statearr_27615_28897[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 16))
{var inst_27543 = (state_27588[15]);var inst_27547 = cljs.core.chunk_first.call(null,inst_27543);var inst_27548 = cljs.core.chunk_rest.call(null,inst_27543);var inst_27549 = cljs.core.count.call(null,inst_27547);var inst_27529 = inst_27548;var inst_27530 = inst_27547;var inst_27531 = inst_27549;var inst_27532 = 0;var state_27588__$1 = (function (){var statearr_27616 = state_27588;(statearr_27616[8] = inst_27532);
(statearr_27616[9] = inst_27530);
(statearr_27616[10] = inst_27531);
(statearr_27616[11] = inst_27529);
return statearr_27616;
})();var statearr_27617_28898 = state_27588__$1;(statearr_27617_28898[2] = null);
(statearr_27617_28898[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 17))
{var inst_27543 = (state_27588[15]);var inst_27552 = cljs.core.first.call(null,inst_27543);var inst_27553 = cljs.core.async.muxch_STAR_.call(null,inst_27552);var inst_27554 = cljs.core.async.close_BANG_.call(null,inst_27553);var inst_27555 = cljs.core.next.call(null,inst_27543);var inst_27529 = inst_27555;var inst_27530 = null;var inst_27531 = 0;var inst_27532 = 0;var state_27588__$1 = (function (){var statearr_27618 = state_27588;(statearr_27618[16] = inst_27554);
(statearr_27618[8] = inst_27532);
(statearr_27618[9] = inst_27530);
(statearr_27618[10] = inst_27531);
(statearr_27618[11] = inst_27529);
return statearr_27618;
})();var statearr_27619_28899 = state_27588__$1;(statearr_27619_28899[2] = null);
(statearr_27619_28899[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 18))
{var inst_27558 = (state_27588[2]);var state_27588__$1 = state_27588;var statearr_27620_28900 = state_27588__$1;(statearr_27620_28900[2] = inst_27558);
(statearr_27620_28900[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 19))
{var inst_27569 = (state_27588[12]);var inst_27519 = (state_27588[7]);var inst_27571 = cljs.core.async.muxch_STAR_.call(null,inst_27569);var state_27588__$1 = state_27588;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27588__$1,22,inst_27571,inst_27519);
} else
{if((state_val_27589 === 20))
{var state_27588__$1 = state_27588;var statearr_27621_28901 = state_27588__$1;(statearr_27621_28901[2] = null);
(statearr_27621_28901[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 21))
{var inst_27581 = (state_27588[2]);var state_27588__$1 = (function (){var statearr_27622 = state_27588;(statearr_27622[17] = inst_27581);
return statearr_27622;
})();var statearr_27623_28902 = state_27588__$1;(statearr_27623_28902[2] = null);
(statearr_27623_28902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 22))
{var inst_27573 = (state_27588[2]);var state_27588__$1 = state_27588;if(cljs.core.truth_(inst_27573))
{var statearr_27624_28903 = state_27588__$1;(statearr_27624_28903[1] = 23);
} else
{var statearr_27625_28904 = state_27588__$1;(statearr_27625_28904[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 23))
{var state_27588__$1 = state_27588;var statearr_27626_28905 = state_27588__$1;(statearr_27626_28905[2] = null);
(statearr_27626_28905[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 24))
{var inst_27567 = (state_27588[13]);var inst_27576 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27567);var state_27588__$1 = state_27588;var statearr_27627_28906 = state_27588__$1;(statearr_27627_28906[2] = inst_27576);
(statearr_27627_28906[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27589 === 25))
{var inst_27578 = (state_27588[2]);var state_27588__$1 = state_27588;var statearr_27628_28907 = state_27588__$1;(statearr_27628_28907[2] = inst_27578);
(statearr_27628_28907[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28879,mults,ensure_mult,p))
;return ((function (switch__22387__auto__,c__22463__auto___28879,mults,ensure_mult,p){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27632[0] = state_machine__22388__auto__);
(statearr_27632[1] = 1);
return statearr_27632;
});
var state_machine__22388__auto____1 = (function (state_27588){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27588);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27633){if((e27633 instanceof Object))
{var ex__22391__auto__ = e27633;var statearr_27634_28908 = state_27588;(statearr_27634_28908[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27588);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28909 = state_27588;
state_27588 = G__28909;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27588){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28879,mults,ensure_mult,p))
})();var state__22465__auto__ = (function (){var statearr_27635 = f__22464__auto__.call(null);(statearr_27635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28879);
return statearr_27635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28879,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__22463__auto___28910 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27742){var state_val_27743 = (state_27742[1]);if((state_val_27743 === 1))
{var state_27742__$1 = state_27742;var statearr_27744_28911 = state_27742__$1;(statearr_27744_28911[2] = null);
(statearr_27744_28911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 2))
{var inst_27705 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27706 = 0;var state_27742__$1 = (function (){var statearr_27745 = state_27742;(statearr_27745[7] = inst_27705);
(statearr_27745[8] = inst_27706);
return statearr_27745;
})();var statearr_27746_28912 = state_27742__$1;(statearr_27746_28912[2] = null);
(statearr_27746_28912[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 3))
{var inst_27740 = (state_27742[2]);var state_27742__$1 = state_27742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27742__$1,inst_27740);
} else
{if((state_val_27743 === 4))
{var inst_27706 = (state_27742[8]);var inst_27708 = (inst_27706 < cnt);var state_27742__$1 = state_27742;if(cljs.core.truth_(inst_27708))
{var statearr_27747_28913 = state_27742__$1;(statearr_27747_28913[1] = 6);
} else
{var statearr_27748_28914 = state_27742__$1;(statearr_27748_28914[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 5))
{var inst_27726 = (state_27742[2]);var state_27742__$1 = (function (){var statearr_27749 = state_27742;(statearr_27749[9] = inst_27726);
return statearr_27749;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27742__$1,12,dchan);
} else
{if((state_val_27743 === 6))
{var state_27742__$1 = state_27742;var statearr_27750_28915 = state_27742__$1;(statearr_27750_28915[2] = null);
(statearr_27750_28915[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 7))
{var state_27742__$1 = state_27742;var statearr_27751_28916 = state_27742__$1;(statearr_27751_28916[2] = null);
(statearr_27751_28916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 8))
{var inst_27724 = (state_27742[2]);var state_27742__$1 = state_27742;var statearr_27752_28917 = state_27742__$1;(statearr_27752_28917[2] = inst_27724);
(statearr_27752_28917[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 9))
{var inst_27706 = (state_27742[8]);var inst_27719 = (state_27742[2]);var inst_27720 = (inst_27706 + 1);var inst_27706__$1 = inst_27720;var state_27742__$1 = (function (){var statearr_27753 = state_27742;(statearr_27753[8] = inst_27706__$1);
(statearr_27753[10] = inst_27719);
return statearr_27753;
})();var statearr_27754_28918 = state_27742__$1;(statearr_27754_28918[2] = null);
(statearr_27754_28918[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 10))
{var inst_27710 = (state_27742[2]);var inst_27711 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27742__$1 = (function (){var statearr_27755 = state_27742;(statearr_27755[11] = inst_27710);
return statearr_27755;
})();var statearr_27756_28919 = state_27742__$1;(statearr_27756_28919[2] = inst_27711);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27742__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 11))
{var inst_27706 = (state_27742[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27742,10,Object,null,9);var inst_27715 = chs__$1.call(null,inst_27706);var inst_27716 = done.call(null,inst_27706);var inst_27717 = cljs.core.async.take_BANG_.call(null,inst_27715,inst_27716);var state_27742__$1 = state_27742;var statearr_27757_28920 = state_27742__$1;(statearr_27757_28920[2] = inst_27717);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27742__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 12))
{var inst_27728 = (state_27742[12]);var inst_27728__$1 = (state_27742[2]);var inst_27729 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27728__$1);var state_27742__$1 = (function (){var statearr_27758 = state_27742;(statearr_27758[12] = inst_27728__$1);
return statearr_27758;
})();if(cljs.core.truth_(inst_27729))
{var statearr_27759_28921 = state_27742__$1;(statearr_27759_28921[1] = 13);
} else
{var statearr_27760_28922 = state_27742__$1;(statearr_27760_28922[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 13))
{var inst_27731 = cljs.core.async.close_BANG_.call(null,out);var state_27742__$1 = state_27742;var statearr_27761_28923 = state_27742__$1;(statearr_27761_28923[2] = inst_27731);
(statearr_27761_28923[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 14))
{var inst_27728 = (state_27742[12]);var inst_27733 = cljs.core.apply.call(null,f,inst_27728);var state_27742__$1 = state_27742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27742__$1,16,out,inst_27733);
} else
{if((state_val_27743 === 15))
{var inst_27738 = (state_27742[2]);var state_27742__$1 = state_27742;var statearr_27762_28924 = state_27742__$1;(statearr_27762_28924[2] = inst_27738);
(statearr_27762_28924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27743 === 16))
{var inst_27735 = (state_27742[2]);var state_27742__$1 = (function (){var statearr_27763 = state_27742;(statearr_27763[13] = inst_27735);
return statearr_27763;
})();var statearr_27764_28925 = state_27742__$1;(statearr_27764_28925[2] = null);
(statearr_27764_28925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28910,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22387__auto__,c__22463__auto___28910,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27768[0] = state_machine__22388__auto__);
(statearr_27768[1] = 1);
return statearr_27768;
});
var state_machine__22388__auto____1 = (function (state_27742){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27742);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27769){if((e27769 instanceof Object))
{var ex__22391__auto__ = e27769;var statearr_27770_28926 = state_27742;(statearr_27770_28926[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27742);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28927 = state_27742;
state_27742 = G__28927;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27742){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28910,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22465__auto__ = (function (){var statearr_27771 = f__22464__auto__.call(null);(statearr_27771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28910);
return statearr_27771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28910,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28928,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28928,out){
return (function (state_27855){var state_val_27856 = (state_27855[1]);if((state_val_27856 === 1))
{var inst_27826 = cljs.core.vec.call(null,chs);var inst_27827 = inst_27826;var state_27855__$1 = (function (){var statearr_27857 = state_27855;(statearr_27857[7] = inst_27827);
return statearr_27857;
})();var statearr_27858_28929 = state_27855__$1;(statearr_27858_28929[2] = null);
(statearr_27858_28929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27856 === 2))
{var inst_27827 = (state_27855[7]);var inst_27829 = cljs.core.count.call(null,inst_27827);var inst_27830 = (inst_27829 > 0);var state_27855__$1 = state_27855;if(cljs.core.truth_(inst_27830))
{var statearr_27859_28930 = state_27855__$1;(statearr_27859_28930[1] = 4);
} else
{var statearr_27860_28931 = state_27855__$1;(statearr_27860_28931[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27856 === 3))
{var inst_27853 = (state_27855[2]);var state_27855__$1 = state_27855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27855__$1,inst_27853);
} else
{if((state_val_27856 === 4))
{var inst_27827 = (state_27855[7]);var state_27855__$1 = state_27855;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27855__$1,7,inst_27827);
} else
{if((state_val_27856 === 5))
{var inst_27849 = cljs.core.async.close_BANG_.call(null,out);var state_27855__$1 = state_27855;var statearr_27861_28932 = state_27855__$1;(statearr_27861_28932[2] = inst_27849);
(statearr_27861_28932[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27856 === 6))
{var inst_27851 = (state_27855[2]);var state_27855__$1 = state_27855;var statearr_27862_28933 = state_27855__$1;(statearr_27862_28933[2] = inst_27851);
(statearr_27862_28933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27856 === 7))
{var inst_27835 = (state_27855[8]);var inst_27834 = (state_27855[9]);var inst_27834__$1 = (state_27855[2]);var inst_27835__$1 = cljs.core.nth.call(null,inst_27834__$1,0,null);var inst_27836 = cljs.core.nth.call(null,inst_27834__$1,1,null);var inst_27837 = (inst_27835__$1 == null);var state_27855__$1 = (function (){var statearr_27863 = state_27855;(statearr_27863[8] = inst_27835__$1);
(statearr_27863[10] = inst_27836);
(statearr_27863[9] = inst_27834__$1);
return statearr_27863;
})();if(cljs.core.truth_(inst_27837))
{var statearr_27864_28934 = state_27855__$1;(statearr_27864_28934[1] = 8);
} else
{var statearr_27865_28935 = state_27855__$1;(statearr_27865_28935[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27856 === 8))
{var inst_27835 = (state_27855[8]);var inst_27836 = (state_27855[10]);var inst_27834 = (state_27855[9]);var inst_27827 = (state_27855[7]);var inst_27839 = (function (){var c = inst_27836;var v = inst_27835;var vec__27832 = inst_27834;var cs = inst_27827;return ((function (c,v,vec__27832,cs,inst_27835,inst_27836,inst_27834,inst_27827,state_val_27856,c__22463__auto___28928,out){
return (function (p1__27772_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27772_SHARP_);
});
;})(c,v,vec__27832,cs,inst_27835,inst_27836,inst_27834,inst_27827,state_val_27856,c__22463__auto___28928,out))
})();var inst_27840 = cljs.core.filterv.call(null,inst_27839,inst_27827);var inst_27827__$1 = inst_27840;var state_27855__$1 = (function (){var statearr_27866 = state_27855;(statearr_27866[7] = inst_27827__$1);
return statearr_27866;
})();var statearr_27867_28936 = state_27855__$1;(statearr_27867_28936[2] = null);
(statearr_27867_28936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27856 === 9))
{var inst_27835 = (state_27855[8]);var state_27855__$1 = state_27855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27855__$1,11,out,inst_27835);
} else
{if((state_val_27856 === 10))
{var inst_27847 = (state_27855[2]);var state_27855__$1 = state_27855;var statearr_27869_28937 = state_27855__$1;(statearr_27869_28937[2] = inst_27847);
(statearr_27869_28937[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27856 === 11))
{var inst_27827 = (state_27855[7]);var inst_27844 = (state_27855[2]);var tmp27868 = inst_27827;var inst_27827__$1 = tmp27868;var state_27855__$1 = (function (){var statearr_27870 = state_27855;(statearr_27870[11] = inst_27844);
(statearr_27870[7] = inst_27827__$1);
return statearr_27870;
})();var statearr_27871_28938 = state_27855__$1;(statearr_27871_28938[2] = null);
(statearr_27871_28938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28928,out))
;return ((function (switch__22387__auto__,c__22463__auto___28928,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27875 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27875[0] = state_machine__22388__auto__);
(statearr_27875[1] = 1);
return statearr_27875;
});
var state_machine__22388__auto____1 = (function (state_27855){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27855);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27876){if((e27876 instanceof Object))
{var ex__22391__auto__ = e27876;var statearr_27877_28939 = state_27855;(statearr_27877_28939[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28940 = state_27855;
state_27855 = G__28940;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27855){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28928,out))
})();var state__22465__auto__ = (function (){var statearr_27878 = f__22464__auto__.call(null);(statearr_27878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28928);
return statearr_27878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28928,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28941,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28941,out){
return (function (state_27948){var state_val_27949 = (state_27948[1]);if((state_val_27949 === 1))
{var inst_27925 = 0;var state_27948__$1 = (function (){var statearr_27950 = state_27948;(statearr_27950[7] = inst_27925);
return statearr_27950;
})();var statearr_27951_28942 = state_27948__$1;(statearr_27951_28942[2] = null);
(statearr_27951_28942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27949 === 2))
{var inst_27925 = (state_27948[7]);var inst_27927 = (inst_27925 < n);var state_27948__$1 = state_27948;if(cljs.core.truth_(inst_27927))
{var statearr_27952_28943 = state_27948__$1;(statearr_27952_28943[1] = 4);
} else
{var statearr_27953_28944 = state_27948__$1;(statearr_27953_28944[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27949 === 3))
{var inst_27945 = (state_27948[2]);var inst_27946 = cljs.core.async.close_BANG_.call(null,out);var state_27948__$1 = (function (){var statearr_27954 = state_27948;(statearr_27954[8] = inst_27945);
return statearr_27954;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27948__$1,inst_27946);
} else
{if((state_val_27949 === 4))
{var state_27948__$1 = state_27948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27948__$1,7,ch);
} else
{if((state_val_27949 === 5))
{var state_27948__$1 = state_27948;var statearr_27955_28945 = state_27948__$1;(statearr_27955_28945[2] = null);
(statearr_27955_28945[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27949 === 6))
{var inst_27943 = (state_27948[2]);var state_27948__$1 = state_27948;var statearr_27956_28946 = state_27948__$1;(statearr_27956_28946[2] = inst_27943);
(statearr_27956_28946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27949 === 7))
{var inst_27930 = (state_27948[9]);var inst_27930__$1 = (state_27948[2]);var inst_27931 = (inst_27930__$1 == null);var inst_27932 = cljs.core.not.call(null,inst_27931);var state_27948__$1 = (function (){var statearr_27957 = state_27948;(statearr_27957[9] = inst_27930__$1);
return statearr_27957;
})();if(inst_27932)
{var statearr_27958_28947 = state_27948__$1;(statearr_27958_28947[1] = 8);
} else
{var statearr_27959_28948 = state_27948__$1;(statearr_27959_28948[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27949 === 8))
{var inst_27930 = (state_27948[9]);var state_27948__$1 = state_27948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27948__$1,11,out,inst_27930);
} else
{if((state_val_27949 === 9))
{var state_27948__$1 = state_27948;var statearr_27960_28949 = state_27948__$1;(statearr_27960_28949[2] = null);
(statearr_27960_28949[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27949 === 10))
{var inst_27940 = (state_27948[2]);var state_27948__$1 = state_27948;var statearr_27961_28950 = state_27948__$1;(statearr_27961_28950[2] = inst_27940);
(statearr_27961_28950[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27949 === 11))
{var inst_27925 = (state_27948[7]);var inst_27935 = (state_27948[2]);var inst_27936 = (inst_27925 + 1);var inst_27925__$1 = inst_27936;var state_27948__$1 = (function (){var statearr_27962 = state_27948;(statearr_27962[10] = inst_27935);
(statearr_27962[7] = inst_27925__$1);
return statearr_27962;
})();var statearr_27963_28951 = state_27948__$1;(statearr_27963_28951[2] = null);
(statearr_27963_28951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28941,out))
;return ((function (switch__22387__auto__,c__22463__auto___28941,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27967 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27967[0] = state_machine__22388__auto__);
(statearr_27967[1] = 1);
return statearr_27967;
});
var state_machine__22388__auto____1 = (function (state_27948){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27948);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27968){if((e27968 instanceof Object))
{var ex__22391__auto__ = e27968;var statearr_27969_28952 = state_27948;(statearr_27969_28952[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28953 = state_27948;
state_27948 = G__28953;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27948){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28941,out))
})();var state__22465__auto__ = (function (){var statearr_27970 = f__22464__auto__.call(null);(statearr_27970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28941);
return statearr_27970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28941,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27978 = (function (ch,f,map_LT_,meta27979){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27979 = meta27979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27978.cljs$lang$type = true;
cljs.core.async.t27978.cljs$lang$ctorStr = "cljs.core.async/t27978";
cljs.core.async.t27978.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27978");
});
cljs.core.async.t27978.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27978.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27981 = (function (fn1,_,meta27979,ch,f,map_LT_,meta27982){
this.fn1 = fn1;
this._ = _;
this.meta27979 = meta27979;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27982 = meta27982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27981.cljs$lang$type = true;
cljs.core.async.t27981.cljs$lang$ctorStr = "cljs.core.async/t27981";
cljs.core.async.t27981.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27981");
});})(___$1))
;
cljs.core.async.t27981.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27981.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27971_SHARP_){return f1.call(null,(((p1__27971_SHARP_ == null))?null:self__.f.call(null,p1__27971_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27983){var self__ = this;
var _27983__$1 = this;return self__.meta27982;
});})(___$1))
;
cljs.core.async.t27981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27983,meta27982__$1){var self__ = this;
var _27983__$1 = this;return (new cljs.core.async.t27981(self__.fn1,self__._,self__.meta27979,self__.ch,self__.f,self__.map_LT_,meta27982__$1));
});})(___$1))
;
cljs.core.async.__GT_t27981 = ((function (___$1){
return (function __GT_t27981(fn1__$1,___$2,meta27979__$1,ch__$2,f__$2,map_LT___$2,meta27982){return (new cljs.core.async.t27981(fn1__$1,___$2,meta27979__$1,ch__$2,f__$2,map_LT___$2,meta27982));
});})(___$1))
;
}
return (new cljs.core.async.t27981(fn1,___$1,self__.meta27979,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19791__auto__ = ret;if(cljs.core.truth_(and__19791__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__19791__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t27978.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27978.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27980){var self__ = this;
var _27980__$1 = this;return self__.meta27979;
});
cljs.core.async.t27978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27980,meta27979__$1){var self__ = this;
var _27980__$1 = this;return (new cljs.core.async.t27978(self__.ch,self__.f,self__.map_LT_,meta27979__$1));
});
cljs.core.async.__GT_t27978 = (function __GT_t27978(ch__$1,f__$1,map_LT___$1,meta27979){return (new cljs.core.async.t27978(ch__$1,f__$1,map_LT___$1,meta27979));
});
}
return (new cljs.core.async.t27978(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27987 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27987 = (function (ch,f,map_GT_,meta27988){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27988 = meta27988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27987.cljs$lang$type = true;
cljs.core.async.t27987.cljs$lang$ctorStr = "cljs.core.async/t27987";
cljs.core.async.t27987.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27987");
});
cljs.core.async.t27987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27987.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27989){var self__ = this;
var _27989__$1 = this;return self__.meta27988;
});
cljs.core.async.t27987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27989,meta27988__$1){var self__ = this;
var _27989__$1 = this;return (new cljs.core.async.t27987(self__.ch,self__.f,self__.map_GT_,meta27988__$1));
});
cljs.core.async.__GT_t27987 = (function __GT_t27987(ch__$1,f__$1,map_GT___$1,meta27988){return (new cljs.core.async.t27987(ch__$1,f__$1,map_GT___$1,meta27988));
});
}
return (new cljs.core.async.t27987(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27993 = (function (ch,p,filter_GT_,meta27994){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27994 = meta27994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27993.cljs$lang$type = true;
cljs.core.async.t27993.cljs$lang$ctorStr = "cljs.core.async/t27993";
cljs.core.async.t27993.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27993");
});
cljs.core.async.t27993.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27993.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27993.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27993.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27995){var self__ = this;
var _27995__$1 = this;return self__.meta27994;
});
cljs.core.async.t27993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27995,meta27994__$1){var self__ = this;
var _27995__$1 = this;return (new cljs.core.async.t27993(self__.ch,self__.p,self__.filter_GT_,meta27994__$1));
});
cljs.core.async.__GT_t27993 = (function __GT_t27993(ch__$1,p__$1,filter_GT___$1,meta27994){return (new cljs.core.async.t27993(ch__$1,p__$1,filter_GT___$1,meta27994));
});
}
return (new cljs.core.async.t27993(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28954 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28954,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28954,out){
return (function (state_28057){var state_val_28058 = (state_28057[1]);if((state_val_28058 === 1))
{var state_28057__$1 = state_28057;var statearr_28059_28955 = state_28057__$1;(statearr_28059_28955[2] = null);
(statearr_28059_28955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28058 === 2))
{var state_28057__$1 = state_28057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28057__$1,4,ch);
} else
{if((state_val_28058 === 3))
{var inst_28055 = (state_28057[2]);var state_28057__$1 = state_28057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28057__$1,inst_28055);
} else
{if((state_val_28058 === 4))
{var inst_28039 = (state_28057[7]);var inst_28039__$1 = (state_28057[2]);var inst_28040 = (inst_28039__$1 == null);var state_28057__$1 = (function (){var statearr_28060 = state_28057;(statearr_28060[7] = inst_28039__$1);
return statearr_28060;
})();if(cljs.core.truth_(inst_28040))
{var statearr_28061_28956 = state_28057__$1;(statearr_28061_28956[1] = 5);
} else
{var statearr_28062_28957 = state_28057__$1;(statearr_28062_28957[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28058 === 5))
{var inst_28042 = cljs.core.async.close_BANG_.call(null,out);var state_28057__$1 = state_28057;var statearr_28063_28958 = state_28057__$1;(statearr_28063_28958[2] = inst_28042);
(statearr_28063_28958[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28058 === 6))
{var inst_28039 = (state_28057[7]);var inst_28044 = p.call(null,inst_28039);var state_28057__$1 = state_28057;if(cljs.core.truth_(inst_28044))
{var statearr_28064_28959 = state_28057__$1;(statearr_28064_28959[1] = 8);
} else
{var statearr_28065_28960 = state_28057__$1;(statearr_28065_28960[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28058 === 7))
{var inst_28053 = (state_28057[2]);var state_28057__$1 = state_28057;var statearr_28066_28961 = state_28057__$1;(statearr_28066_28961[2] = inst_28053);
(statearr_28066_28961[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28058 === 8))
{var inst_28039 = (state_28057[7]);var state_28057__$1 = state_28057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28057__$1,11,out,inst_28039);
} else
{if((state_val_28058 === 9))
{var state_28057__$1 = state_28057;var statearr_28067_28962 = state_28057__$1;(statearr_28067_28962[2] = null);
(statearr_28067_28962[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28058 === 10))
{var inst_28050 = (state_28057[2]);var state_28057__$1 = (function (){var statearr_28068 = state_28057;(statearr_28068[8] = inst_28050);
return statearr_28068;
})();var statearr_28069_28963 = state_28057__$1;(statearr_28069_28963[2] = null);
(statearr_28069_28963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28058 === 11))
{var inst_28047 = (state_28057[2]);var state_28057__$1 = state_28057;var statearr_28070_28964 = state_28057__$1;(statearr_28070_28964[2] = inst_28047);
(statearr_28070_28964[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28954,out))
;return ((function (switch__22387__auto__,c__22463__auto___28954,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28074 = [null,null,null,null,null,null,null,null,null];(statearr_28074[0] = state_machine__22388__auto__);
(statearr_28074[1] = 1);
return statearr_28074;
});
var state_machine__22388__auto____1 = (function (state_28057){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28057);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28075){if((e28075 instanceof Object))
{var ex__22391__auto__ = e28075;var statearr_28076_28965 = state_28057;(statearr_28076_28965[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28966 = state_28057;
state_28057 = G__28966;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28057){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28954,out))
})();var state__22465__auto__ = (function (){var statearr_28077 = f__22464__auto__.call(null);(statearr_28077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28954);
return statearr_28077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28954,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_28243){var state_val_28244 = (state_28243[1]);if((state_val_28244 === 1))
{var state_28243__$1 = state_28243;var statearr_28245_28967 = state_28243__$1;(statearr_28245_28967[2] = null);
(statearr_28245_28967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 2))
{var state_28243__$1 = state_28243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28243__$1,4,in$);
} else
{if((state_val_28244 === 3))
{var inst_28241 = (state_28243[2]);var state_28243__$1 = state_28243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28243__$1,inst_28241);
} else
{if((state_val_28244 === 4))
{var inst_28184 = (state_28243[7]);var inst_28184__$1 = (state_28243[2]);var inst_28185 = (inst_28184__$1 == null);var state_28243__$1 = (function (){var statearr_28246 = state_28243;(statearr_28246[7] = inst_28184__$1);
return statearr_28246;
})();if(cljs.core.truth_(inst_28185))
{var statearr_28247_28968 = state_28243__$1;(statearr_28247_28968[1] = 5);
} else
{var statearr_28248_28969 = state_28243__$1;(statearr_28248_28969[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 5))
{var inst_28187 = cljs.core.async.close_BANG_.call(null,out);var state_28243__$1 = state_28243;var statearr_28249_28970 = state_28243__$1;(statearr_28249_28970[2] = inst_28187);
(statearr_28249_28970[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 6))
{var inst_28184 = (state_28243[7]);var inst_28193 = f.call(null,inst_28184);var inst_28194 = cljs.core.seq.call(null,inst_28193);var inst_28195 = inst_28194;var inst_28196 = null;var inst_28197 = 0;var inst_28198 = 0;var state_28243__$1 = (function (){var statearr_28250 = state_28243;(statearr_28250[8] = inst_28195);
(statearr_28250[9] = inst_28196);
(statearr_28250[10] = inst_28198);
(statearr_28250[11] = inst_28197);
return statearr_28250;
})();var statearr_28251_28971 = state_28243__$1;(statearr_28251_28971[2] = null);
(statearr_28251_28971[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 7))
{var inst_28239 = (state_28243[2]);var state_28243__$1 = state_28243;var statearr_28252_28972 = state_28243__$1;(statearr_28252_28972[2] = inst_28239);
(statearr_28252_28972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 8))
{var inst_28198 = (state_28243[10]);var inst_28197 = (state_28243[11]);var inst_28200 = (inst_28198 < inst_28197);var inst_28201 = inst_28200;var state_28243__$1 = state_28243;if(cljs.core.truth_(inst_28201))
{var statearr_28253_28973 = state_28243__$1;(statearr_28253_28973[1] = 10);
} else
{var statearr_28254_28974 = state_28243__$1;(statearr_28254_28974[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 9))
{var inst_28231 = (state_28243[2]);var inst_28232 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28243__$1 = (function (){var statearr_28255 = state_28243;(statearr_28255[12] = inst_28231);
return statearr_28255;
})();if(cljs.core.truth_(inst_28232))
{var statearr_28256_28975 = state_28243__$1;(statearr_28256_28975[1] = 21);
} else
{var statearr_28257_28976 = state_28243__$1;(statearr_28257_28976[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 10))
{var inst_28196 = (state_28243[9]);var inst_28198 = (state_28243[10]);var inst_28203 = cljs.core._nth.call(null,inst_28196,inst_28198);var state_28243__$1 = state_28243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28243__$1,13,out,inst_28203);
} else
{if((state_val_28244 === 11))
{var inst_28195 = (state_28243[8]);var inst_28209 = (state_28243[13]);var inst_28209__$1 = cljs.core.seq.call(null,inst_28195);var state_28243__$1 = (function (){var statearr_28261 = state_28243;(statearr_28261[13] = inst_28209__$1);
return statearr_28261;
})();if(inst_28209__$1)
{var statearr_28262_28977 = state_28243__$1;(statearr_28262_28977[1] = 14);
} else
{var statearr_28263_28978 = state_28243__$1;(statearr_28263_28978[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 12))
{var inst_28229 = (state_28243[2]);var state_28243__$1 = state_28243;var statearr_28264_28979 = state_28243__$1;(statearr_28264_28979[2] = inst_28229);
(statearr_28264_28979[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 13))
{var inst_28195 = (state_28243[8]);var inst_28196 = (state_28243[9]);var inst_28198 = (state_28243[10]);var inst_28197 = (state_28243[11]);var inst_28205 = (state_28243[2]);var inst_28206 = (inst_28198 + 1);var tmp28258 = inst_28195;var tmp28259 = inst_28196;var tmp28260 = inst_28197;var inst_28195__$1 = tmp28258;var inst_28196__$1 = tmp28259;var inst_28197__$1 = tmp28260;var inst_28198__$1 = inst_28206;var state_28243__$1 = (function (){var statearr_28265 = state_28243;(statearr_28265[8] = inst_28195__$1);
(statearr_28265[9] = inst_28196__$1);
(statearr_28265[14] = inst_28205);
(statearr_28265[10] = inst_28198__$1);
(statearr_28265[11] = inst_28197__$1);
return statearr_28265;
})();var statearr_28266_28980 = state_28243__$1;(statearr_28266_28980[2] = null);
(statearr_28266_28980[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 14))
{var inst_28209 = (state_28243[13]);var inst_28211 = cljs.core.chunked_seq_QMARK_.call(null,inst_28209);var state_28243__$1 = state_28243;if(inst_28211)
{var statearr_28267_28981 = state_28243__$1;(statearr_28267_28981[1] = 17);
} else
{var statearr_28268_28982 = state_28243__$1;(statearr_28268_28982[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 15))
{var state_28243__$1 = state_28243;var statearr_28269_28983 = state_28243__$1;(statearr_28269_28983[2] = null);
(statearr_28269_28983[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 16))
{var inst_28227 = (state_28243[2]);var state_28243__$1 = state_28243;var statearr_28270_28984 = state_28243__$1;(statearr_28270_28984[2] = inst_28227);
(statearr_28270_28984[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 17))
{var inst_28209 = (state_28243[13]);var inst_28213 = cljs.core.chunk_first.call(null,inst_28209);var inst_28214 = cljs.core.chunk_rest.call(null,inst_28209);var inst_28215 = cljs.core.count.call(null,inst_28213);var inst_28195 = inst_28214;var inst_28196 = inst_28213;var inst_28197 = inst_28215;var inst_28198 = 0;var state_28243__$1 = (function (){var statearr_28271 = state_28243;(statearr_28271[8] = inst_28195);
(statearr_28271[9] = inst_28196);
(statearr_28271[10] = inst_28198);
(statearr_28271[11] = inst_28197);
return statearr_28271;
})();var statearr_28272_28985 = state_28243__$1;(statearr_28272_28985[2] = null);
(statearr_28272_28985[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 18))
{var inst_28209 = (state_28243[13]);var inst_28218 = cljs.core.first.call(null,inst_28209);var state_28243__$1 = state_28243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28243__$1,20,out,inst_28218);
} else
{if((state_val_28244 === 19))
{var inst_28224 = (state_28243[2]);var state_28243__$1 = state_28243;var statearr_28273_28986 = state_28243__$1;(statearr_28273_28986[2] = inst_28224);
(statearr_28273_28986[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 20))
{var inst_28209 = (state_28243[13]);var inst_28220 = (state_28243[2]);var inst_28221 = cljs.core.next.call(null,inst_28209);var inst_28195 = inst_28221;var inst_28196 = null;var inst_28197 = 0;var inst_28198 = 0;var state_28243__$1 = (function (){var statearr_28274 = state_28243;(statearr_28274[8] = inst_28195);
(statearr_28274[9] = inst_28196);
(statearr_28274[15] = inst_28220);
(statearr_28274[10] = inst_28198);
(statearr_28274[11] = inst_28197);
return statearr_28274;
})();var statearr_28275_28987 = state_28243__$1;(statearr_28275_28987[2] = null);
(statearr_28275_28987[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 21))
{var state_28243__$1 = state_28243;var statearr_28276_28988 = state_28243__$1;(statearr_28276_28988[2] = null);
(statearr_28276_28988[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 22))
{var state_28243__$1 = state_28243;var statearr_28277_28989 = state_28243__$1;(statearr_28277_28989[2] = null);
(statearr_28277_28989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28244 === 23))
{var inst_28237 = (state_28243[2]);var state_28243__$1 = state_28243;var statearr_28278_28990 = state_28243__$1;(statearr_28278_28990[2] = inst_28237);
(statearr_28278_28990[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28282[0] = state_machine__22388__auto__);
(statearr_28282[1] = 1);
return statearr_28282;
});
var state_machine__22388__auto____1 = (function (state_28243){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28243);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28283){if((e28283 instanceof Object))
{var ex__22391__auto__ = e28283;var statearr_28284_28991 = state_28243;(statearr_28284_28991[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28243);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28992 = state_28243;
state_28243 = G__28992;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28243){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_28285 = f__22464__auto__.call(null);(statearr_28285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_28285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28993 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28993,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28993,out){
return (function (state_28357){var state_val_28358 = (state_28357[1]);if((state_val_28358 === 1))
{var inst_28334 = null;var state_28357__$1 = (function (){var statearr_28359 = state_28357;(statearr_28359[7] = inst_28334);
return statearr_28359;
})();var statearr_28360_28994 = state_28357__$1;(statearr_28360_28994[2] = null);
(statearr_28360_28994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 2))
{var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28357__$1,4,ch);
} else
{if((state_val_28358 === 3))
{var inst_28354 = (state_28357[2]);var inst_28355 = cljs.core.async.close_BANG_.call(null,out);var state_28357__$1 = (function (){var statearr_28361 = state_28357;(statearr_28361[8] = inst_28354);
return statearr_28361;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28357__$1,inst_28355);
} else
{if((state_val_28358 === 4))
{var inst_28337 = (state_28357[9]);var inst_28337__$1 = (state_28357[2]);var inst_28338 = (inst_28337__$1 == null);var inst_28339 = cljs.core.not.call(null,inst_28338);var state_28357__$1 = (function (){var statearr_28362 = state_28357;(statearr_28362[9] = inst_28337__$1);
return statearr_28362;
})();if(inst_28339)
{var statearr_28363_28995 = state_28357__$1;(statearr_28363_28995[1] = 5);
} else
{var statearr_28364_28996 = state_28357__$1;(statearr_28364_28996[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 5))
{var inst_28337 = (state_28357[9]);var inst_28334 = (state_28357[7]);var inst_28341 = cljs.core._EQ_.call(null,inst_28337,inst_28334);var state_28357__$1 = state_28357;if(inst_28341)
{var statearr_28365_28997 = state_28357__$1;(statearr_28365_28997[1] = 8);
} else
{var statearr_28366_28998 = state_28357__$1;(statearr_28366_28998[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 6))
{var state_28357__$1 = state_28357;var statearr_28368_28999 = state_28357__$1;(statearr_28368_28999[2] = null);
(statearr_28368_28999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 7))
{var inst_28352 = (state_28357[2]);var state_28357__$1 = state_28357;var statearr_28369_29000 = state_28357__$1;(statearr_28369_29000[2] = inst_28352);
(statearr_28369_29000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 8))
{var inst_28334 = (state_28357[7]);var tmp28367 = inst_28334;var inst_28334__$1 = tmp28367;var state_28357__$1 = (function (){var statearr_28370 = state_28357;(statearr_28370[7] = inst_28334__$1);
return statearr_28370;
})();var statearr_28371_29001 = state_28357__$1;(statearr_28371_29001[2] = null);
(statearr_28371_29001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 9))
{var inst_28337 = (state_28357[9]);var state_28357__$1 = state_28357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28357__$1,11,out,inst_28337);
} else
{if((state_val_28358 === 10))
{var inst_28349 = (state_28357[2]);var state_28357__$1 = state_28357;var statearr_28372_29002 = state_28357__$1;(statearr_28372_29002[2] = inst_28349);
(statearr_28372_29002[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28358 === 11))
{var inst_28337 = (state_28357[9]);var inst_28346 = (state_28357[2]);var inst_28334 = inst_28337;var state_28357__$1 = (function (){var statearr_28373 = state_28357;(statearr_28373[7] = inst_28334);
(statearr_28373[10] = inst_28346);
return statearr_28373;
})();var statearr_28374_29003 = state_28357__$1;(statearr_28374_29003[2] = null);
(statearr_28374_29003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___28993,out))
;return ((function (switch__22387__auto__,c__22463__auto___28993,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28378 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28378[0] = state_machine__22388__auto__);
(statearr_28378[1] = 1);
return statearr_28378;
});
var state_machine__22388__auto____1 = (function (state_28357){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28357);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28379){if((e28379 instanceof Object))
{var ex__22391__auto__ = e28379;var statearr_28380_29004 = state_28357;(statearr_28380_29004[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28357);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29005 = state_28357;
state_28357 = G__29005;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28357){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28993,out))
})();var state__22465__auto__ = (function (){var statearr_28381 = f__22464__auto__.call(null);(statearr_28381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28993);
return statearr_28381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28993,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___29006 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___29006,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___29006,out){
return (function (state_28486){var state_val_28487 = (state_28486[1]);if((state_val_28487 === 1))
{var inst_28449 = (new Array(n));var inst_28450 = inst_28449;var inst_28451 = 0;var state_28486__$1 = (function (){var statearr_28488 = state_28486;(statearr_28488[7] = inst_28451);
(statearr_28488[8] = inst_28450);
return statearr_28488;
})();var statearr_28489_29007 = state_28486__$1;(statearr_28489_29007[2] = null);
(statearr_28489_29007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 2))
{var state_28486__$1 = state_28486;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28486__$1,4,ch);
} else
{if((state_val_28487 === 3))
{var inst_28484 = (state_28486[2]);var state_28486__$1 = state_28486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28486__$1,inst_28484);
} else
{if((state_val_28487 === 4))
{var inst_28454 = (state_28486[9]);var inst_28454__$1 = (state_28486[2]);var inst_28455 = (inst_28454__$1 == null);var inst_28456 = cljs.core.not.call(null,inst_28455);var state_28486__$1 = (function (){var statearr_28490 = state_28486;(statearr_28490[9] = inst_28454__$1);
return statearr_28490;
})();if(inst_28456)
{var statearr_28491_29008 = state_28486__$1;(statearr_28491_29008[1] = 5);
} else
{var statearr_28492_29009 = state_28486__$1;(statearr_28492_29009[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 5))
{var inst_28459 = (state_28486[10]);var inst_28454 = (state_28486[9]);var inst_28451 = (state_28486[7]);var inst_28450 = (state_28486[8]);var inst_28458 = (inst_28450[inst_28451] = inst_28454);var inst_28459__$1 = (inst_28451 + 1);var inst_28460 = (inst_28459__$1 < n);var state_28486__$1 = (function (){var statearr_28493 = state_28486;(statearr_28493[10] = inst_28459__$1);
(statearr_28493[11] = inst_28458);
return statearr_28493;
})();if(cljs.core.truth_(inst_28460))
{var statearr_28494_29010 = state_28486__$1;(statearr_28494_29010[1] = 8);
} else
{var statearr_28495_29011 = state_28486__$1;(statearr_28495_29011[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 6))
{var inst_28451 = (state_28486[7]);var inst_28472 = (inst_28451 > 0);var state_28486__$1 = state_28486;if(cljs.core.truth_(inst_28472))
{var statearr_28497_29012 = state_28486__$1;(statearr_28497_29012[1] = 12);
} else
{var statearr_28498_29013 = state_28486__$1;(statearr_28498_29013[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 7))
{var inst_28482 = (state_28486[2]);var state_28486__$1 = state_28486;var statearr_28499_29014 = state_28486__$1;(statearr_28499_29014[2] = inst_28482);
(statearr_28499_29014[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 8))
{var inst_28459 = (state_28486[10]);var inst_28450 = (state_28486[8]);var tmp28496 = inst_28450;var inst_28450__$1 = tmp28496;var inst_28451 = inst_28459;var state_28486__$1 = (function (){var statearr_28500 = state_28486;(statearr_28500[7] = inst_28451);
(statearr_28500[8] = inst_28450__$1);
return statearr_28500;
})();var statearr_28501_29015 = state_28486__$1;(statearr_28501_29015[2] = null);
(statearr_28501_29015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 9))
{var inst_28450 = (state_28486[8]);var inst_28464 = cljs.core.vec.call(null,inst_28450);var state_28486__$1 = state_28486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28486__$1,11,out,inst_28464);
} else
{if((state_val_28487 === 10))
{var inst_28470 = (state_28486[2]);var state_28486__$1 = state_28486;var statearr_28502_29016 = state_28486__$1;(statearr_28502_29016[2] = inst_28470);
(statearr_28502_29016[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 11))
{var inst_28466 = (state_28486[2]);var inst_28467 = (new Array(n));var inst_28450 = inst_28467;var inst_28451 = 0;var state_28486__$1 = (function (){var statearr_28503 = state_28486;(statearr_28503[7] = inst_28451);
(statearr_28503[8] = inst_28450);
(statearr_28503[12] = inst_28466);
return statearr_28503;
})();var statearr_28504_29017 = state_28486__$1;(statearr_28504_29017[2] = null);
(statearr_28504_29017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 12))
{var inst_28450 = (state_28486[8]);var inst_28474 = cljs.core.vec.call(null,inst_28450);var state_28486__$1 = state_28486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28486__$1,15,out,inst_28474);
} else
{if((state_val_28487 === 13))
{var state_28486__$1 = state_28486;var statearr_28505_29018 = state_28486__$1;(statearr_28505_29018[2] = null);
(statearr_28505_29018[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 14))
{var inst_28479 = (state_28486[2]);var inst_28480 = cljs.core.async.close_BANG_.call(null,out);var state_28486__$1 = (function (){var statearr_28506 = state_28486;(statearr_28506[13] = inst_28479);
return statearr_28506;
})();var statearr_28507_29019 = state_28486__$1;(statearr_28507_29019[2] = inst_28480);
(statearr_28507_29019[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28487 === 15))
{var inst_28476 = (state_28486[2]);var state_28486__$1 = state_28486;var statearr_28508_29020 = state_28486__$1;(statearr_28508_29020[2] = inst_28476);
(statearr_28508_29020[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___29006,out))
;return ((function (switch__22387__auto__,c__22463__auto___29006,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28512[0] = state_machine__22388__auto__);
(statearr_28512[1] = 1);
return statearr_28512;
});
var state_machine__22388__auto____1 = (function (state_28486){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28486);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28513){if((e28513 instanceof Object))
{var ex__22391__auto__ = e28513;var statearr_28514_29021 = state_28486;(statearr_28514_29021[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28486);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29022 = state_28486;
state_28486 = G__29022;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28486){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___29006,out))
})();var state__22465__auto__ = (function (){var statearr_28515 = f__22464__auto__.call(null);(statearr_28515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___29006);
return statearr_28515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___29006,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___29023 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___29023,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___29023,out){
return (function (state_28628){var state_val_28629 = (state_28628[1]);if((state_val_28629 === 1))
{var inst_28587 = [];var inst_28588 = inst_28587;var inst_28589 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28628__$1 = (function (){var statearr_28630 = state_28628;(statearr_28630[7] = inst_28588);
(statearr_28630[8] = inst_28589);
return statearr_28630;
})();var statearr_28631_29024 = state_28628__$1;(statearr_28631_29024[2] = null);
(statearr_28631_29024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 2))
{var state_28628__$1 = state_28628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28628__$1,4,ch);
} else
{if((state_val_28629 === 3))
{var inst_28626 = (state_28628[2]);var state_28628__$1 = state_28628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28628__$1,inst_28626);
} else
{if((state_val_28629 === 4))
{var inst_28592 = (state_28628[9]);var inst_28592__$1 = (state_28628[2]);var inst_28593 = (inst_28592__$1 == null);var inst_28594 = cljs.core.not.call(null,inst_28593);var state_28628__$1 = (function (){var statearr_28632 = state_28628;(statearr_28632[9] = inst_28592__$1);
return statearr_28632;
})();if(inst_28594)
{var statearr_28633_29025 = state_28628__$1;(statearr_28633_29025[1] = 5);
} else
{var statearr_28634_29026 = state_28628__$1;(statearr_28634_29026[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 5))
{var inst_28592 = (state_28628[9]);var inst_28589 = (state_28628[8]);var inst_28596 = (state_28628[10]);var inst_28596__$1 = f.call(null,inst_28592);var inst_28597 = cljs.core._EQ_.call(null,inst_28596__$1,inst_28589);var inst_28598 = cljs.core.keyword_identical_QMARK_.call(null,inst_28589,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28599 = (inst_28597) || (inst_28598);var state_28628__$1 = (function (){var statearr_28635 = state_28628;(statearr_28635[10] = inst_28596__$1);
return statearr_28635;
})();if(cljs.core.truth_(inst_28599))
{var statearr_28636_29027 = state_28628__$1;(statearr_28636_29027[1] = 8);
} else
{var statearr_28637_29028 = state_28628__$1;(statearr_28637_29028[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 6))
{var inst_28588 = (state_28628[7]);var inst_28613 = inst_28588.length;var inst_28614 = (inst_28613 > 0);var state_28628__$1 = state_28628;if(cljs.core.truth_(inst_28614))
{var statearr_28639_29029 = state_28628__$1;(statearr_28639_29029[1] = 12);
} else
{var statearr_28640_29030 = state_28628__$1;(statearr_28640_29030[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 7))
{var inst_28624 = (state_28628[2]);var state_28628__$1 = state_28628;var statearr_28641_29031 = state_28628__$1;(statearr_28641_29031[2] = inst_28624);
(statearr_28641_29031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 8))
{var inst_28592 = (state_28628[9]);var inst_28588 = (state_28628[7]);var inst_28596 = (state_28628[10]);var inst_28601 = inst_28588.push(inst_28592);var tmp28638 = inst_28588;var inst_28588__$1 = tmp28638;var inst_28589 = inst_28596;var state_28628__$1 = (function (){var statearr_28642 = state_28628;(statearr_28642[11] = inst_28601);
(statearr_28642[7] = inst_28588__$1);
(statearr_28642[8] = inst_28589);
return statearr_28642;
})();var statearr_28643_29032 = state_28628__$1;(statearr_28643_29032[2] = null);
(statearr_28643_29032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 9))
{var inst_28588 = (state_28628[7]);var inst_28604 = cljs.core.vec.call(null,inst_28588);var state_28628__$1 = state_28628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28628__$1,11,out,inst_28604);
} else
{if((state_val_28629 === 10))
{var inst_28611 = (state_28628[2]);var state_28628__$1 = state_28628;var statearr_28644_29033 = state_28628__$1;(statearr_28644_29033[2] = inst_28611);
(statearr_28644_29033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 11))
{var inst_28592 = (state_28628[9]);var inst_28596 = (state_28628[10]);var inst_28606 = (state_28628[2]);var inst_28607 = [];var inst_28608 = inst_28607.push(inst_28592);var inst_28588 = inst_28607;var inst_28589 = inst_28596;var state_28628__$1 = (function (){var statearr_28645 = state_28628;(statearr_28645[12] = inst_28606);
(statearr_28645[13] = inst_28608);
(statearr_28645[7] = inst_28588);
(statearr_28645[8] = inst_28589);
return statearr_28645;
})();var statearr_28646_29034 = state_28628__$1;(statearr_28646_29034[2] = null);
(statearr_28646_29034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 12))
{var inst_28588 = (state_28628[7]);var inst_28616 = cljs.core.vec.call(null,inst_28588);var state_28628__$1 = state_28628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28628__$1,15,out,inst_28616);
} else
{if((state_val_28629 === 13))
{var state_28628__$1 = state_28628;var statearr_28647_29035 = state_28628__$1;(statearr_28647_29035[2] = null);
(statearr_28647_29035[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 14))
{var inst_28621 = (state_28628[2]);var inst_28622 = cljs.core.async.close_BANG_.call(null,out);var state_28628__$1 = (function (){var statearr_28648 = state_28628;(statearr_28648[14] = inst_28621);
return statearr_28648;
})();var statearr_28649_29036 = state_28628__$1;(statearr_28649_29036[2] = inst_28622);
(statearr_28649_29036[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28629 === 15))
{var inst_28618 = (state_28628[2]);var state_28628__$1 = state_28628;var statearr_28650_29037 = state_28628__$1;(statearr_28650_29037[2] = inst_28618);
(statearr_28650_29037[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto___29023,out))
;return ((function (switch__22387__auto__,c__22463__auto___29023,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28654[0] = state_machine__22388__auto__);
(statearr_28654[1] = 1);
return statearr_28654;
});
var state_machine__22388__auto____1 = (function (state_28628){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28628);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28655){if((e28655 instanceof Object))
{var ex__22391__auto__ = e28655;var statearr_28656_29038 = state_28628;(statearr_28656_29038[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28628);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29039 = state_28628;
state_28628 = G__29039;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28628){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___29023,out))
})();var state__22465__auto__ = (function (){var statearr_28657 = f__22464__auto__.call(null);(statearr_28657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___29023);
return statearr_28657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___29023,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.example-linter')) {
goog.provide('lt.plugins.example_linter');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","example-word-linter","lt.plugins.example-linter/example-word-linter",3076569534),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"Example word linter");
lt.plugins.example_linter.lint_words = (function lint_words(editor_text,words){var words_to_find = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.lower_case,words));return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (words_to_find){
return (function (line_no,line){return cljs.core.keep.call(null,((function (words_to_find){
return (function (w){var found_at = clojure.string.lower_case.call(null,line).indexOf(w);if((0 <= found_at))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),[cljs.core.str("You can't say the word "),cljs.core.str(w),cljs.core.str("!")].join(''),new cljs.core.Keyword(null,"severity","severity",2492204655),"error",new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,found_at], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,(found_at + cljs.core.count.call(null,w))], null)], null);
} else
{return null;
}
});})(words_to_find))
,words_to_find);
});})(words_to_find))
,clojure.string.split.call(null,editor_text,/\n/)));
});
lt.plugins.example_linter.__BEH__lint_words_in_editor = (function __BEH__lint_words_in_editor(obj,editor_text,callback){return callback.call(null,lt.plugins.example_linter.lint_words.call(null,editor_text,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.example_linter.__BEH__lint_words_in_editor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.editor.lint')) {
goog.provide('lt.objs.editor.lint');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linters","linters",1191258613)], null),new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),cljs.core.PersistentArrayMap.EMPTY);
lt.objs.editor.lint.linters = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659));
lt.objs.editor.lint.default_timeout = 5000;
lt.objs.editor.lint.verify_linter_result = (function verify_linter_result(obj,res){if((res == null))
{return lt.objs.console.error.call(null,[cljs.core.str("No response received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''));
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.map_QMARK_.call(null,res);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);
} else
{return and__19791__auto__;
}
})()))
{return lt.objs.console.error.call(null,[cljs.core.str("Error received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''),res);
} else
{if((cljs.core.coll_QMARK_.call(null,res)) && (!(cljs.core.map_QMARK_.call(null,res))))
{return res;
} else
{return null;
}
}
}
});
lt.objs.editor.lint.__GT_cm_lint_msg = (function __GT_cm_lint_msg(p__34214){var map__34216 = p__34214;var map__34216__$1 = ((cljs.core.seq_QMARK_.call(null,map__34216))?cljs.core.apply.call(null,cljs.core.hash_map,map__34216):map__34216);var msg = map__34216__$1;var to = cljs.core.get.call(null,map__34216__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__34216__$1,new cljs.core.Keyword(null,"from","from",1017056028));return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"from","from",1017056028),CodeMirror.Pos(cljs.core.first.call(null,from),cljs.core.last.call(null,from)),new cljs.core.Keyword(null,"to","to",1013907949),CodeMirror.Pos(cljs.core.first.call(null,to),cljs.core.last.call(null,to)));
});
lt.objs.editor.lint.is_lint_mark_QMARK_ = (function is_lint_mark_QMARK_(tm){return cljs.core.re_find.call(null,/^CodeMirror-lint-mark-/,tm.className);
});
lt.objs.editor.lint.on_cursor_activity = (function on_cursor_activity(ed){var text_marks = lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));var temp__4090__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,lt.objs.editor.lint.is_lint_mark_QMARK_,text_marks));if(temp__4090__auto__)
{var lint_marks = temp__4090__auto__;if((1 < cljs.core.count.call(null,lint_marks)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Multiple lint messages found.");
} else
{var annotation = cljs.core.js__GT_clj.call(null,cljs.core.first.call(null,lint_marks).__annotation,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(annotation),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"severity","severity",2492204655).cljs$core$IFn$_invoke$arity$1(annotation)], null));
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"");
}
});
/**
* Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
* at once to the codemirror linter callback function
* @param {...*} var_args
*/
lt.objs.editor.lint.validate_with_all_linters = (function() { 
var validate_with_all_linters__delegate = function (ed,linter_objs){return (function (editor_text,callback,options){lt.objs.editor.off.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.objs.editor.lint.on_cursor_activity,ed));
lt.objs.editor.on.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.objs.editor.lint.on_cursor_activity,ed));
var validate_chans = cljs.core.map.call(null,(function (obj){var ch = cljs.core.async.timeout.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return lt.objs.editor.lint.default_timeout;
}
})());var callback_fn = ((function (ch){
return (function (results){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__,ch){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__,ch){
return (function (state_34303){var state_val_34304 = (state_34303[1]);if((state_val_34304 === 2))
{var inst_34301 = (state_34303[2]);var state_34303__$1 = state_34303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34303__$1,inst_34301);
} else
{if((state_val_34304 === 1))
{var state_34303__$1 = state_34303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34303__$1,2,ch,results);
} else
{return null;
}
}
});})(c__22463__auto__,ch))
;return ((function (switch__22387__auto__,c__22463__auto__,ch){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_34308 = [null,null,null,null,null,null,null];(statearr_34308[0] = state_machine__22388__auto__);
(statearr_34308[1] = 1);
return statearr_34308;
});
var state_machine__22388__auto____1 = (function (state_34303){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_34303);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e34309){if((e34309 instanceof Object))
{var ex__22391__auto__ = e34309;var statearr_34310_34387 = state_34303;(statearr_34310_34387[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34388 = state_34303;
state_34303 = G__34388;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_34303){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_34303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__,ch))
})();var state__22465__auto__ = (function (){var statearr_34311 = f__22464__auto__.call(null);(statearr_34311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_34311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__,ch))
);
return c__22463__auto__;
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);var seq__34312_34389 = cljs.core.seq.call(null,validate_chans);var chunk__34313_34390 = null;var count__34314_34391 = 0;var i__34315_34392 = 0;while(true){
if((i__34315_34392 < count__34314_34391))
{var vec__34316_34393 = cljs.core._nth.call(null,chunk__34313_34390,i__34315_34392);var __34394 = cljs.core.nth.call(null,vec__34316_34393,0,null);var f_34395 = cljs.core.nth.call(null,vec__34316_34393,1,null);var obj_34396 = cljs.core.nth.call(null,vec__34316_34393,2,null);lt.object.raise.call(null,obj_34396,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_34395);
{
var G__34397 = seq__34312_34389;
var G__34398 = chunk__34313_34390;
var G__34399 = count__34314_34391;
var G__34400 = (i__34315_34392 + 1);
seq__34312_34389 = G__34397;
chunk__34313_34390 = G__34398;
count__34314_34391 = G__34399;
i__34315_34392 = G__34400;
continue;
}
} else
{var temp__4092__auto___34401 = cljs.core.seq.call(null,seq__34312_34389);if(temp__4092__auto___34401)
{var seq__34312_34402__$1 = temp__4092__auto___34401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34312_34402__$1))
{var c__20551__auto___34403 = cljs.core.chunk_first.call(null,seq__34312_34402__$1);{
var G__34404 = cljs.core.chunk_rest.call(null,seq__34312_34402__$1);
var G__34405 = c__20551__auto___34403;
var G__34406 = cljs.core.count.call(null,c__20551__auto___34403);
var G__34407 = 0;
seq__34312_34389 = G__34404;
chunk__34313_34390 = G__34405;
count__34314_34391 = G__34406;
i__34315_34392 = G__34407;
continue;
}
} else
{var vec__34317_34408 = cljs.core.first.call(null,seq__34312_34402__$1);var __34409 = cljs.core.nth.call(null,vec__34317_34408,0,null);var f_34410 = cljs.core.nth.call(null,vec__34317_34408,1,null);var obj_34411 = cljs.core.nth.call(null,vec__34317_34408,2,null);lt.object.raise.call(null,obj_34411,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_34410);
{
var G__34412 = cljs.core.next.call(null,seq__34312_34402__$1);
var G__34413 = null;
var G__34414 = 0;
var G__34415 = 0;
seq__34312_34389 = G__34412;
chunk__34313_34390 = G__34413;
count__34314_34391 = G__34414;
i__34315_34392 = G__34415;
continue;
}
}
} else
{}
}
break;
}
var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__,validate_chans){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__,validate_chans){
return (function (state_34359){var state_val_34360 = (state_34359[1]);if((state_val_34360 === 1))
{var inst_34323 = cljs.core.nth.call(null,validate_chans,0,null);var inst_34324 = cljs.core.nth.call(null,inst_34323,0,null);var inst_34325 = cljs.core.nth.call(null,inst_34323,1,null);var inst_34326 = cljs.core.nth.call(null,inst_34323,2,null);var inst_34327 = cljs.core.nthnext.call(null,validate_chans,1);var inst_34328 = validate_chans;var inst_34329 = cljs.core.PersistentVector.EMPTY;var state_34359__$1 = (function (){var statearr_34361 = state_34359;(statearr_34361[7] = inst_34325);
(statearr_34361[8] = inst_34326);
(statearr_34361[9] = inst_34327);
(statearr_34361[10] = inst_34328);
(statearr_34361[11] = inst_34324);
(statearr_34361[12] = inst_34329);
return statearr_34361;
})();var statearr_34362_34416 = state_34359__$1;(statearr_34362_34416[2] = null);
(statearr_34362_34416[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 2))
{var inst_34328 = (state_34359[10]);var inst_34333 = cljs.core.nth.call(null,inst_34328,0,null);var inst_34334 = cljs.core.nth.call(null,inst_34333,0,null);var inst_34335 = cljs.core.nth.call(null,inst_34333,1,null);var inst_34336 = cljs.core.nth.call(null,inst_34333,2,null);var inst_34337 = cljs.core.nthnext.call(null,inst_34328,1);var state_34359__$1 = (function (){var statearr_34363 = state_34359;(statearr_34363[13] = inst_34335);
(statearr_34363[14] = inst_34336);
(statearr_34363[15] = inst_34337);
return statearr_34363;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34359__$1,4,inst_34334);
} else
{if((state_val_34360 === 3))
{var inst_34357 = (state_34359[2]);var state_34359__$1 = state_34359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34359__$1,inst_34357);
} else
{if((state_val_34360 === 4))
{var inst_34340 = (state_34359[16]);var inst_34336 = (state_34359[14]);var inst_34339 = (state_34359[2]);var inst_34340__$1 = lt.objs.editor.lint.verify_linter_result.call(null,inst_34336,inst_34339);var state_34359__$1 = (function (){var statearr_34364 = state_34359;(statearr_34364[16] = inst_34340__$1);
return statearr_34364;
})();if(cljs.core.truth_(inst_34340__$1))
{var statearr_34365_34417 = state_34359__$1;(statearr_34365_34417[1] = 5);
} else
{var statearr_34366_34418 = state_34359__$1;(statearr_34366_34418[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 5))
{var inst_34340 = (state_34359[16]);var inst_34329 = (state_34359[12]);var inst_34342 = cljs.core.conj.call(null,inst_34329,inst_34340);var state_34359__$1 = state_34359;var statearr_34367_34419 = state_34359__$1;(statearr_34367_34419[2] = inst_34342);
(statearr_34367_34419[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 6))
{var inst_34329 = (state_34359[12]);var state_34359__$1 = state_34359;var statearr_34368_34420 = state_34359__$1;(statearr_34368_34420[2] = inst_34329);
(statearr_34368_34420[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 7))
{var inst_34337 = (state_34359[15]);var inst_34345 = (state_34359[2]);var inst_34346 = cljs.core.seq.call(null,inst_34337);var state_34359__$1 = (function (){var statearr_34369 = state_34359;(statearr_34369[17] = inst_34345);
return statearr_34369;
})();if(inst_34346)
{var statearr_34370_34421 = state_34359__$1;(statearr_34370_34421[1] = 8);
} else
{var statearr_34371_34422 = state_34359__$1;(statearr_34371_34422[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 8))
{var inst_34345 = (state_34359[17]);var inst_34337 = (state_34359[15]);var inst_34328 = inst_34337;var inst_34329 = inst_34345;var state_34359__$1 = (function (){var statearr_34372 = state_34359;(statearr_34372[10] = inst_34328);
(statearr_34372[12] = inst_34329);
return statearr_34372;
})();var statearr_34373_34423 = state_34359__$1;(statearr_34373_34423[2] = null);
(statearr_34373_34423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 9))
{var inst_34345 = (state_34359[17]);var inst_34350 = cljs.core.apply.call(null,cljs.core.concat,inst_34345);var inst_34351 = cljs.core.map.call(null,lt.objs.editor.lint.__GT_cm_lint_msg,inst_34350);var inst_34352 = cljs.core.clj__GT_js.call(null,inst_34351);var inst_34353 = callback.call(null,inst_34352);var state_34359__$1 = state_34359;var statearr_34374_34424 = state_34359__$1;(statearr_34374_34424[2] = inst_34353);
(statearr_34374_34424[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 10))
{var inst_34355 = (state_34359[2]);var state_34359__$1 = state_34359;var statearr_34375_34425 = state_34359__$1;(statearr_34375_34425[2] = inst_34355);
(statearr_34375_34425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22463__auto__,validate_chans))
;return ((function (switch__22387__auto__,c__22463__auto__,validate_chans){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_34379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34379[0] = state_machine__22388__auto__);
(statearr_34379[1] = 1);
return statearr_34379;
});
var state_machine__22388__auto____1 = (function (state_34359){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_34359);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e34380){if((e34380 instanceof Object))
{var ex__22391__auto__ = e34380;var statearr_34381_34426 = state_34359;(statearr_34381_34426[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34427 = state_34359;
state_34359 = G__34427;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_34359){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_34359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__,validate_chans))
})();var state__22465__auto__ = (function (){var statearr_34382 = f__22464__auto__.call(null);(statearr_34382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_34382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__,validate_chans))
);
return c__22463__auto__;
});
};
var validate_with_all_linters = function (ed,var_args){
var linter_objs = null;if (arguments.length > 1) {
  linter_objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return validate_with_all_linters__delegate.call(this,ed,linter_objs);};
validate_with_all_linters.cljs$lang$maxFixedArity = 1;
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__34428){
var ed = cljs.core.first(arglist__34428);
var linter_objs = cljs.core.rest(arglist__34428);
return validate_with_all_linters__delegate(ed,linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.objs.editor.lint.add_linter = (function add_linter(linters,linter_obj,args){var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,args);return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (obj){
return (function (p1__34383_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__34383_SHARP_)),linter_obj);
});})(obj))
,linters),obj);
});
lt.objs.editor.lint.prepare_editor_for_linter = (function prepare_editor_for_linter(ed,p__34384){var vec__34386 = p__34384;var linter_obj = cljs.core.nth.call(null,vec__34386,0,null);var args = cljs.core.nthnext.call(null,vec__34386,1);lt.objs.editor.add_gutter.call(null,ed,"CodeMirror-lint-markers",10);
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));var new_linters = lt.object.merge_BANG_.call(null,lt.objs.editor.lint.linters,cljs.core.update_in.call(null,cljs.core.deref.call(null,lt.objs.editor.lint.linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null),lt.objs.editor.lint.add_linter,linter_obj,args));var validator_fn = cljs.core.apply.call(null,lt.objs.editor.lint.validate_with_all_linters,ed,cljs.core.get_in.call(null,new_linters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null)));lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),{"getAnnotations": validator_fn, "async": true},new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
return new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));
});
lt.objs.editor.lint.__BEH__register_linter = (function __BEH__register_linter(this$,linter){return lt.objs.editor.lint.prepare_editor_for_linter.call(null,this$,linter);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","register-linter","lt.objs.editor.lint/register-linter",4391870434),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.editor.lint.__BEH__register_linter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Register linter",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"linter",new cljs.core.Keyword(null,"example","example",3985900764),"[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint.settings')) {
goog.provide('lt.plugins.lt_lint.settings');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.object');
goog.require('lt.object');
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint')) {
goog.provide('lt.plugins.lt_lint');
goog.require('cljs.core');
goog.require('lt.plugins.example_linter');
goog.require('lt.objs.editor.lint');
}

//# sourceMappingURL=lt-lint_compiled.js.map